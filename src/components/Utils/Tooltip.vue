<template>
  <div>
    <span :class="infoOverlay"></span>

    <div :class="['wrapper--tooltip', positionSpot]">
      <div
        :class="['spot', { darken: spotDarken }]"
        @mouseup="showInfo"
        @keyup.enter="showInfo"
        tabindex="1"
        role="button"
        aria-label="tooltip phishing"
      ></div>
      <div class="tooltip--info" role="tooltip">
        <p>
          <slot name="textinfo"></slot>
        </p>
        <button class="validationInfo" @mouseup="hideInfo">
          Compris
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["infoOverlay", "positionSpot", "spotDarken"],
  data() {
    return {
      tipsMemory: null,
    };
  },
  methods: {
    ...mapActions("presentation", ["showOverlay", "hideOverlay"]),
    showInfo(event) {
      let tipnumber = this.positionSpot.split("-")[1];
      this.showOverlay({
        overlay: `.${this.infoOverlay}`,
        tooltipInfo: event.target.nextSibling,
        tips: `tips-${tipnumber}`,
      });
      let g = document.getElementsByClassName(`tips-${tipnumber}`);

      this.tipsMemory = [...g];

    },
    hideInfo() {
      this.tipsMemory.forEach((f) => {
        f.style.position = "initial";
        f.style.backgroundColor = "inherit";
        this.tipsMemory = null;
      });
      this.hideOverlay();
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
  outline: none;
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
  &.darken {
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
  line-height: 1.5 * $f-S;
  padding-bottom: 1.5rem;
  box-shadow: 0px 3px 2px hsla(0, 0%, 0%, 0.239);
  top: -15px;
  &::before {
    
    //@at-root
    left: 50%;
    content: " ";
    height: 15px;
    width: 15px;
    position: absolute;
    pointer-events: none;
    background: #fff;
    border-top-left-radius: 3px;
    transform: translate(-50%,-50%) rotate(45deg);
    transform-origin: center center;
  }
  p {
    padding-top: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
}

// Animation
@keyframes social-button-beat {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  70% {
    opacity: 0.4;
    transform: scale(2);
  }

  100% {
    opacity: 0.4;
  }
}
</style>
