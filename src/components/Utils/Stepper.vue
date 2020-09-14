<template>
  <div>

    <div class="step2" :style="{width:percentStage+'%'}"> </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
  
  computed:{
    ...mapState('stepper',['totalSteps','activePage']),
    ...mapGetters('stepper',['percentStage']),
  }
};
</script>

<style lang="scss" scoped>
.step2{
  position:absolute;
  top:0;
  left:0;
  height: 2px;
  width: 0%;
  background:#0C7193;
  transition: width 1s;
}

@keyframes fluidStep{
  100%{
    width: 100%;
  }
}
</style>
