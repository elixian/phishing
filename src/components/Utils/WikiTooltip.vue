<template>
  <div class="inline">
      <span
          class="bold wrapper-tooltip"
          @mouseover="showTip"
          @mouseleave="hideTip"
          @mouseout="hideTip"
          ><slot name="text"/></span
        >
  </div>
</template>

<script>
export default {
    props:["definition"],
  methods: {
    showTip(event) {
      let tooltip = document.getElementById("Tooltips");
      if (tooltip === null) {
        event.target.innerHTML =
          event.target.innerHTML +
          `<div id='Tooltips' role="tooltip"><p class="box-tip" @mouseleave.self="hideTip">${this.definition}</p></div>`;
      }
    },
    hideTip() {
      let tooltip = document.getElementById("Tooltips");
      tooltip !== null ? tooltip.remove() : null;
    },
  },
};
</script>

<style lang="scss">
.inline{
  display: inline-block;
}
.wrapper-tooltip {
  position: relative;
  color: $primary-color;
  cursor: help;
  &::before{
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    border-bottom: 2px dashed currentColor;
  }
}

#Tooltips {
  display: block;
  height: 50px;
  position: absolute;
  top: 20px;
  left: -50%;
  z-index: 5;

  .box-tip {
    color: initial;
    font-size: $f-R;
    font-weight: normal;
    position: relative;
    width: 385px;
    padding: 1rem;
    opacity: 0;
    background: #fff;
    border: 1px solid $primary-color;
    border-radius: 5px;
    animation: fade-in 0.3s forwards ease-in-out;
    &::before {
      content: "";
      position: absolute;
      top: -7px;
      left: calc(385px / 2);
      transform: rotate(44deg);
      width: 11px;
      height: 11px;
      background-color: #fff;
      border-left: 1px solid $primary-color;
      border-right: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-top: 1px solid $primary-color;
    }
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
</style>
