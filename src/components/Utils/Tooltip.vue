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
      if (this.tipsMemory.length > 0) {
        [...g].forEach((f) => {
          f.style.position = "relative";
          f.style.backgroundColor = "#fff";
        });
      }
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
