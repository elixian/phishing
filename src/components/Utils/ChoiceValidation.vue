<template>
  <div id="wrapper-choice">
    <div class="choices" v-if="!nextStatmentButton">
      <div :class="['choice choice__left', { active: isPhishing }]">
        <label for="phishing" @mouseup="setValue(true)">
          <input id="phishing" type="radio" name="choices" class="js_radio" :checked="isPhishing"/>
          <span class="bold"
            ><img
              class="icone"
              src="@/assets/images/game/thumbs-down.png"
              alt=""
              srcset=""
            />
            Phishing</span
          >
        </label>
      </div>
      <div
        :class="[
          'choice choice__right',
          { active: !isPhishing && isPhishing !== null },
        ]"
      >
        <label for="authentic" @mouseup="setValue(false)">
          <input id="authentic" type="radio" name="choices" class="js_radio" :checked="isPhishing == false" />
          <span class="bold"
            ><img
              class="icone"
              src="@/assets/images/game/thumbs-up.png"
              alt=""
              srcset=""
            />Authentique</span
          >
        </label>
      </div>
      <span class="separator" v-if="isPhishing === null"></span>
    </div>
    <transition name="bounce">
      <div :class="['wrapper-result', stateResult]" v-if="nextStatmentButton">
        <div class="result-info" v-if="isPhishing == currentGame.isPhishing">
          <div class="result">
            <img src="@/assets/images/game/clapping-hands.png" alt="" />

            <span class="bold">Bien vu !</span> c’est bien un mail
            {{ isSuccess ? "frauduleux" : "authentique" }}
          </div>
        </div>
        <div class="result-info" v-else>
          <div class="result">
            <img src="@/assets/images/game/anxious.png" alt="" />

            <span class="bold">Raté</span>, c’est un mail
            {{ currentGame.isPhishing ? "frauduleux" : "authentique" }}
          </div>
        </div>
      </div>
    </transition>

    <button
      class="choice__validation"
      type="button"
      @click.prevent="checkResponse"
      v-if="!nextStatmentButton && isPhishing !== null"
    >
      Valider
    </button>
    <button
      :class="['choice__validation', { result: isLastPage }]"
      type="button"
      @click="next"
      :disabled="disabled"
      v-if="nextStatmentButton"
    >
      {{ isLastPage ? "Résulat" : "Suivant" }}
    </button>
  </div>
</template>

<script>
import { Power4, gsap } from "gsap";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  mounted() {
    let tl = new gsap.timeline({ delay: 1 });
    tl.fromTo(
      "#wrapper-choice",
      0.5,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, ease: Power4.easeOut }
    );
  },
  data() {
    return {
      isPhishing: null, //default null no choice
      nextStatmentButton: false,
      isSuccess: false,
      disabled:false
    };
  },
  computed: {
    ...mapState("stepper", ["activePage"]),
    ...mapState("game", ["currentGame"]),
    ...mapGetters("stepper", ["isLastPage"]),

    stateResult: function() {
      return this.currentGame.isPhishing === this.isPhishing
        ? "success"
        : "error";
    },
  },
  methods: {
    setValue(v) {
      this.isPhishing = v;
    },
    checkResponse() {
      if(this.activePage === 1){
        this.disabled = true;
        var self = this;
        setTimeout(function(){
          self.disabled = false;
        },1800)
      }
      this.nextStatmentButton = true;
      this.isSuccess = this.currentGame.isPhishing && this.isPhishing;
      if (this.isPhishing === this.currentGame.isPhishing) {
        this.setScore();
      }
      this.setShowSpot(true);
    },
    next() {
      //get input checked and set to false


      if (!this.disabled) {
        let radios = [...document.querySelectorAll(".js_radio")];
        let f = radios.find((b) => b.checked);
        f !== undefined ?? (f.checked = false);
        this.isPhishing = null; //on set à null
        this.setShowSpot(false);

        if (!this.isLastPage) {
          this.$router.replace({ name: `mailgame0${this.activePage + 1}` });
          this.incrementStepper();
          this.nextStatmentButton = false; // initialise le boutton suivant à false
        } else {
          this.setEndGame();
          this.resetPage();
        }
      }
    },
    disabledTimer() {
      return setTimeout(() => {
        return false;
      }, 1500);
    },
    ...mapActions("stepper", ["incrementStepper", "resetPage"]),
    ...mapActions("game", ["setShowSpot", "setScore", "setEndGame"]),
  },
};
</script>

<style lang="scss" scoped>
$grey-border: #bdbdbd;
#wrapper-choice {
  --width-button: 9.3rem;
  display: flex;
  align-items: center;
  width: 40rem;
  margin: 3rem auto 0;
  justify-content: center;
}
.separator {
  width: 1px;
  height: 33px;
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: 50%;
  transform: translate(0, -50%);
  background-color: #e0e0e0;
}
.choices {
  display: flex;
  position: relative;
  height: 6.6rem;
  width: 40rem;
  user-select: none;
  border-width: 1px;
  border-color: $grey-border;
  border-radius: 4px;
  border-style: solid;
  //overflow: hidden;
  .icone {
    width: 18px;
    margin: 0 5px 0 10px;
    margin-bottom: 6px;
  }
}
.wrapper-result {
  @extend .choices;

  background-color: #fff;

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    border: 1px solid $grey-border;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    transform: rotate(45deg);
    left: 0;
    right: 0;
    margin: -9px auto;
    transform-origin: center center;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 3px;
  }
  &.error {
    border-color: #eb5757;
    &::before {
      border-color: red#eb5757;
    }
  }
  &.success {
    border-color: #219653;
    &::before {
      border-color: #219653;
    }
  }
  .result-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 1.8rem;
    width: 351px;
    &__spot {
      font-size: 1.2rem;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 1rem;
    }
    .result {
      margin-top: -5px;
      margin-bottom: 5px;
    }
  }
}
.choice {
  width: 200px;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-size: $f-R;
  &.active {
    background-color: #f2f2f2;
    &::after {
      background-color: #f2f2f2;
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #fff;
    transform-origin: center center;
  }
  &::before {
    background: $grey-border;
    clip-path: polygon(1px 1px, 2px 12px, 12px 12px);
  }
  &::after {
    clip-path: polygon(1px 1px, 1px 12px, 12px 12px);
  }
  &__left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    &::before {
      bottom: -12px;
      right: -1px;

      transform: rotate(180deg);
    }
    &::after {
      bottom: -11px;
      right: -1px;
      transform: rotate(180deg);
    }
  }
  &__right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &::before {
      bottom: -12px;
      left: -1px;
      transform: rotate(180deg) rotateY(180deg);
    }
    &::after {
      bottom: -11px;
      left: -1px;
      transform: rotate(180deg) rotateY(180deg);
    }
  }
}
// Radio button

label {
  display: flex;
  margin-bottom: 4px;
  cursor: pointer;

  input {
    display: none;
    &:checked + span {
      &:before {
        box-shadow: inset 0 0 0 3px #fff;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    //border-radius: 14px;
    padding: 2px 12px 2px 2px;
    transition: 0.25s;

    &:before {
      display: flex;
      content: "";
      background-color: #07485e;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-right: 6px;
      transition: 0.25s;
      box-shadow: inset 0 0 0 20px #fff;
      border: 1px solid #bdbdbd;
    }
  }
}

// Button validation
.choice__validation {
  position: absolute;
  right: -11.2rem;
  background-color: $primary-color;
  border-radius: 4px;
  width: var(--width-button);
  height: 4rem;
  color: #fff;
  font-family: "Pacifico", Arial, Helvetica, sans-serif;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 100;
  &.inactive {
    visibility: hidden;
  }
  &.result {
    background-color: $spot-color;
    color: $primary-color;
  }
}

.spot {
  display: inline-block;
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #0c7193;
  outline: none;
  z-index: 50;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: inherit;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.25s ease-in-out;
    animation: beat 1.5s ease-in infinite;
  }
}

//transition

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  display: none;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes beat {
  $opacity: 0.2;
  0% {
    opacity: $opacity;
    transform: scale(1);
  }

  70% {
    opacity: $opacity;
    transform: scale(2);
  }

  100% {
    opacity: $opacity;
  }
}
</style>
