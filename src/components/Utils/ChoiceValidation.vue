<template>

  <div id="wrapper-choice">
    <div class="choices">
      <div :class="['choice choice__left', { active: isPhishing }]">
        <label for="phishing" @mouseup="setValue(true)">
          <input id="phishing" type="radio" name="choices" />
          <span>Phishing</span>
        </label>
      </div>
      <div
        :class="[
          'choice choice__right',
          { active: !isPhishing && isPhishing !== null },
        ]"
      >
        <label for="authentic" @mouseup="setValue(false)">
          <input id="authentic" type="radio" name="choices" />
          <span>Authentique</span>
        </label>
      </div>
      <span class="separator" v-if="isPhishing === null"></span>
    </div>
    <button class="choice__validation" type="button">Valider</button>  
  </div>
 
</template>

<script>
import { TimelineLite } from "gsap";
import {mapState} from 'vuex';
export default {
  mounted(){
const timeline = new TimelineLite({delay:0.5});
                timeline.fromTo('#wrapper-choice',0.5,{y:"200px"},{y:"0"});
  },
  data() {
    return {
      isPhishing: null, //default null no choice
    };
  },
  computed: {
    ...mapState("game", ["gameIsStarted"]),
    
  },
  watch:{
      gameIsStarted(v){
          console.log("new value",v);
          if(v){
              const timeline = new TimelineLite();
                timeline.to('#wrapper-choice',6,{y:"-100px"});
          }
      }
  },
  methods: {
    setValue(v) {
      this.isPhishing = v;
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper-choice {
  --width-button: 9.3rem;
  display: flex;
  align-items: center;
  margin-top: 3rem;

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

  margin-right: 2rem;
  margin-left: calc(2rem + var(--width-button));
  border-width: 1px;
  border-color: #bdbdbd;
  border-radius: 4px;
  border-style: solid;
  //overflow: hidden;
}
.choice {
  $border-color: #bdbdbd;
  width: 200px;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
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
    background: $border-color;
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
        box-shadow: inset 0 0 0 4px #fff;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    border-radius: 14px;
    padding: 2px 12px 2px 2px;
    transition: 0.25s;

    &:before {
      display: flex;
      content: "";
      background-color: hsl(205, 100%, 65%);
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
  background-color: #0c7193;
  border-radius: 4px;
  width: var(--width-button);
  height: 4rem;
  color: #fff;
  font-family: "Pacifico", Arial, Helvetica, sans-serif;
  border: none;
}

</style>
