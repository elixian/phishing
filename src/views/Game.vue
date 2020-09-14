<template>
  <div>
    <app-introduction v-if="!gameIsStarted"/>
    <transition name="fade">
      <div id="game" v-if="gameIsStarted && !gameIsFinished">
        <span>
          <div id="logo-quizz">
            <img
              src="@/assets/images/game/LOGO-quizz.png"
              alt="logo Quizz"
              srcset=""
            />
          </div>

          <app-stepper class="app-stepper" />
          <div class="app-choice">
            <app-choice-validation />
          </div>

          <div class="visual-report">
            <router-view />
            <div v-if="overlay" class="overlay-off" @click.self="hideOverlay"></div>
          </div>
        </span>
      </div>
    </transition>
    <transition name="fade">
    <app-end-game v-if="gameIsFinished"/>
    </transition>
  </div>
</template>

<script>
import Stepper from "@/components/Utils/Stepper";
import ChoiceValidation from "@/components/Utils/ChoiceValidation";
import Introduction from "@/components/Game/Introduction";
import EndGame from "@/components/Game/EndGame";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("presentation", ["overlay"]),
    ...mapState("game", ["gameIsStarted","gameIsFinished"]),
  },
  components: {
    appStepper: Stepper,
    appChoiceValidation: ChoiceValidation,
    appIntroduction: Introduction,
    appEndGame :EndGame
  },
  methods:{
    ...mapActions('presentation',{hideOverlay: 'hideOverlay'})
  }
};
</script>

<style lang="scss" scoped>
#game {
  background-color: #f2f2f2;
  padding-top: 2rem;
  min-height: 100vh;
}
#logo-quizz {
  width: 7.8rem;
  margin: 0 auto 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.visual-report {
  background: none;
}
.overlay-off {
  position: fixed;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  z-index: 9;
}
</style>
