<template>
  <div class="wrapper-game">
    <app-introduction v-if="!gameIsStarted"/>
    <transition name="fade">
      <div id="game" v-if="gameIsStarted && !gameIsFinished">
       
          <header class="header">
          <div id="logo-quizz">
            <img
              src="@/assets/images/game/LOGO-quizz.png"
              alt="logo Quizz"
              srcset=""
            />
          </div>
          <p class="rules">Analysez soigneusement le mail ci-dessous, et dites si c’est un mail authentique ou si c’est un mail de phishing.</p>
          </header>

          <app-stepper class="app-stepper" />
          <div class="app-choice">
            <app-choice-validation />
          </div>

          <div class="visual-report">
            <router-view />
            <div v-if="overlay" class="overlay-off" @click.self="hideOverlay"></div>
          </div>
      
      </div>
    </transition>
    <transition name="fade">
    <app-end-game v-if="gameIsFinished"/>
    </transition>
     <footer>
      <img
        class="logo-AR"
        src="@/assets/images/AR.png"
        alt="logo Assurance retraite"
      />
    </footer>
  </div>
</template>

<script>
document.addEventListener('contextmenu', event => event.preventDefault());

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

<style lang="scss" >
@import "@/scss/game/_game";

#game {
   --footer-size: 6rem;
   width:100vw;
  background-color: #f2f2f2;
  min-height: calc(100vh - var(--footer-size));
  .visual-report{
    background: none;
    // height: calc(100vh - 120px);
        margin: 0 auto;
        margin-top: 5rem;
        padding-bottom: 20rem;
  }
  .header{
    height:12.4rem;
    background-color: #fff;
    margin:0;
    padding-top: 2rem;
  }
  .rules{
    width:52rem;
    text-align: center;
    margin:1rem auto 2rem;
    line-height: $f-R * 1.4;
  }
}
#logo-quizz {
  width: 7.8rem;
  margin: 0rem auto ;

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
