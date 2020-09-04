<template>
  <div>
    <transition name="fade">
      <div id="game" v-if="gameIsStarted">
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
                <app-choice-validation  />
            </div>
           

          <div class="visual-report">
            <router-view />
          </div>
        </span>
      </div>
    </transition>
    <app-introduction/>
  </div>
</template>

<script>
import Stepper from "@/components/Utils/Stepper";
import ChoiceValidation from "@/components/Utils/ChoiceValidation";
import Introduction from "@/components/Game/Introduction";
import { mapGetters,mapState } from "vuex";

export default {


  computed: {
    ...mapGetters("presentation", ["overlay"]),
    ...mapState("game", ["gameIsStarted"]),
    
  },
  components: {
    appStepper: Stepper,
    appChoiceValidation: ChoiceValidation,
    appIntroduction : Introduction
  },
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
.fadevalidate-enter-active,
.fade-leave-active {
  transition: opacity 2.5s;
}
.fadevalidate-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.visual-report {
  background: none;
}
</style>
