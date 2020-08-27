<template>
  <div>
    <span :class="infoOverlay"></span>

    <div :class="['wrapper--tooltip', positionSpot]">
      <div :class="['spot', {darken:spotDarken} ]" @click="showInfo"></div>
      <div class="tooltip--info">
        <p>
          <slot name="textinfo"></slot>
        </p>
        <button class="validationInfo" @click="hideInfo">Compris</button>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  props: ["infoOverlay", "positionSpot","spotDarken"],
  methods: {
    showInfo(event) {
      const timeline = new TimelineLite();
      const overlay = document.getElementsByClassName(this.infoOverlay);

      timeline
        .to(event.target.nextSibling, 0.5, { autoAlpha: 1, display: "block" })
        .to(".spot", 0.8, { visibility: "hidden", opacity:0 }, "-= 0.5")
        .to(overlay, 0.5, { opacity: 1, display: "block" }, "-= .3");
    },
    hideInfo(event) {
      const timeline = new TimelineLite();
      const overlay = document.getElementsByClassName(this.infoOverlay);

      timeline
        .to(event.target.parentElement, 0.5, { autoAlpha: 0, display: "none" })
        .to(overlay, 0, { opacity: 1, display: "none" }, "-= .8")
        .to(".spot", 0, { visibility: "visible",opacity:1  }, "-= .8");
    },
  },
};
</script>

<style lang="scss" scoped>
.validationInfo {
  display: block;
  border: none;
  outline: none;
  background: #0c7193;
  color: #fff;
  border-radius: 6px;
  height: 24px;
  width: 74px;
  margin: 0 auto;
  cursor: pointer;
}

.wrapper--tooltip {
  position: absolute;
  z-index: 10;
}
.spot {
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: $spot-color;
  cursor: pointer;
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
    animation: social-button-beat 1.5s ease-out infinite;
  }
  &.darken{
    background-color: $spot-color-darken;
   
  }
 
}

.tooltip--info {
  display: none;
  border-radius: 6px;
  opacity: 0;
  position: relative;
  width: 230px;
  background: white;
  right: 50%;
  font-size: $f-S;
  padding-bottom: 1.5rem;
  box-shadow: 0px 3px 2px #0000003d;
  top: -15px;
  &::before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #ffffff;
    border-width: 10px;
    margin-left: -10px;
  }
  p {
    padding-top: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
}

// Animation
@keyframes social-button-beat{
    0%{opacity: .0;
        transform: scale(1);
    } 

    70%{
        opacity: .4;
        transform: scale(2);
    }
        
    100%{
        opacity: .4;
    }
        
}
</style>
