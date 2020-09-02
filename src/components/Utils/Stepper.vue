<template>
  <div>
    {{totalSteps}}
    <ul id="stepper">
      <li v-for="(step,index) in totalSteps" :key='index'></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  
  computed:{
    ...mapState('stepper',['totalSteps'])
  }
};
</script>

<style lang="scss" scoped>
#stepper{
    display: flex;
    width:227px;
    margin:0;
    li{
        width:20px;
        height:1px;
        border:none;
        outline:none;
        list-style: none;
        background-color:#C4C4C4;
        &:not(:first-child){
          margin-left:3px;
        }
    }
}
</style>
