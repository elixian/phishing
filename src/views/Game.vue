<template>
    <div id="game">
        <div id="logo-quizz">
            <img src="@/assets/images/game/LOGO-quizz.png" alt="logo Quizz" srcset="">
        </div>
        <app-stepper class='app-stepper'/>
        <app-choice-validation/>
    </div>
</template>

<script>
import Stepper from '@/components/Utils/Stepper';
import ChoiceValidation from '@/components/Utils/ChoiceValidation';
export default {
    components:{
        appStepper : Stepper,
        appChoiceValidation: ChoiceValidation
    }
}
</script>

<style lang="scss" scoped>
#game{
    background-color:#F2F2F2;
    height: 100vh;
    padding-top: 2rem;
}
    #logo-quizz{
        width:7.8rem;
        margin:0 auto 2rem ;
    }
    
</style>