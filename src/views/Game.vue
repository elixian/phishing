yarn<template>
    <div>
        <div id="logo-quizz">
            <img src="@/assets/images/game/LOGO-quizz.png" alt="logo Quizz" srcset="">
        </div>
       <h2>Quizz</h2>
       <hr>
       <app-stepper/>
    </div>
</template>

<script>
import Stepper from '@/components/Utils/Stepper';
export default {
    components:{
        appStepper : Stepper
    }
}
</script>

<style lang="scss" scoped>

    
</style>