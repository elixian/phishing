<template>

<div >

        <span :class="infoOverlay"></span>
   
      <div :class="['wrapper--tooltip',positionSpot]">
        <div class="spot" @click="showInfo"></div>
        <div class="tooltip--info" >
            <p>
                <slot name="textinfo"></slot>
            </p>
            <button @click="hideInfo">j'ai compris</button>
        </div>
        
      </div>
</div>

</template>

<script>
import { TimelineLite } from 'gsap'
export default {
props:['infoOverlay','positionSpot'],
methods:{
    showInfo(event){
        const timeline = new TimelineLite();
        const overlay = document.getElementsByClassName(this.infoOverlay);
        console.log(this.positionSpot)
        timeline.to(event.target.nextSibling , 0.5, {autoAlpha: 1,display:'block'})
                .to(overlay,0.5, {autoAlpha: 1,display:'block'}, '-= 0.5')
                .to('.spot',0, {visibility:'hidden'});
    },
    hideInfo(event){
        const timeline = new TimelineLite();
        const overlay = document.getElementsByClassName(this.infoOverlay);
        console.log(event.target.parentElement);
        timeline.to(event.target.parentElement , 0.5, {autoAlpha: 0,display:'none'})
                        .to(overlay,0, {autoAlpha: 1,display:'none'}, '-= 3')
                        .to('.spot',0, {visibility:'visible'});
    }
}

};
</script>

<style lang="scss">

    
</style>