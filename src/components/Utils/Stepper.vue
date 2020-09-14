<template>
  <div>
    <ul id="stepper">
      <li 
        v-for="(step,index) in totalSteps"
        :class="['step',{active: (index +1) === activePage}]"
       :key='index'></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  
  computed:{
    ...mapState('stepper',['totalSteps','activePage'])
  }
};
</script>

<style lang="scss" scoped>
#stepper{
    display: flex;
    margin:0 auto;
    width:min-content;
    padding:0;
    .step{
      position:relative;
        width:20px;
        height:1px;
        border:none;
        outline:none;
        list-style: none;
        background-color:#C4C4C4;
        &:not(:first-child){
          margin-left:3px;
        }
        &.active::before{
          background-color:#0C7193;
          background: linear-gradient(to right,#0C7193,#0C7193);
          position: absolute;
          width: 0%;
          height: 100%;
          z-index: 10000;
          content: "";
          animation: fluidStep 0.5s ease-in-out forwards;
        }
        
        
    }
}
@keyframes fluidStep{
  100%{
    width: 100%;
  }
}
</style>
