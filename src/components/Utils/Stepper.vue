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
        width:20px;
        height:1px;
        border:none;
        outline:none;
        list-style: none;
        background-color:#C4C4C4;
        &:not(:first-child){
          margin-left:3px;
        }
        &.active{
          background-color:#0C7193;
        }
    }
}
</style>
