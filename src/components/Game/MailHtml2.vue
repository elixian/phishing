<template>
  <div class="wrapper--img">
    <div class="object">
      Mauvaise nouvelle !
    </div>
    

<div class="mail-wrapper">
<div class="exp-info">
      <span class="accro">SR</span>
      <span class="mail">
        Service Remboursement &lt;service-remboursement@train-tgv.info
        &gt;</span
      >
      <img class="buttons-mail" src="@/assets/images/game/buttons-mail.png" alt="">
    </div>


</div>
<template v-if="true ">
       
</template>

<script>
import Tooltip from "@/components/Utils/Tooltip";
import {mapActions,mapState} from 'vuex';
export default {
  created(){
 this.setCurrentStatus(true);
  
  },
  computed:{
    ...mapState('game',['currentGame']),
    
  },
  methods:{
    ...mapActions('game',['setCurrentStatus']),
  },
  components: {
    Tooltip,
  },
};
</script>
<style lang="scss">
@import "@/scss/game/_game.scss";
.position-1 {
	top: 45rem;
  left: 44rem;
}
.position-2 {
  top: 57.7rem;
  left: 47rem;
}


</style>
