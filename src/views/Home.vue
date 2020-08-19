<template>
  <div class="home">
    <div>
      <h1>Page Accueil</h1>
        <div ref="box" class="box" @click="animate"></div>
    </div>
    <router-link :to="{name :'Phishing'+ $store.state.currentPhishing}">Accéder au test</router-link>
        <router-view />

  </div>
</template>

<script>
// @ is an alias to /src
import { TimelineLite, Back } from 'gsap'


export default {
  mounted() { 
    
   
  },
  name: 'Home',
  methods:{
    animate(){
const { box } = this.$refs
    const timeline = new TimelineLite()
     
    timeline.to(box, 3, {
   
      borderRadius:50,
      rotation: 90,
      ease: Back.easeInOut, // Specify an ease
    });
    timeline.to(box, 0.5, {
      width:250,
      rotation: -90,
      background: 'green',
      ease: Back.easeInOut, // Specify an ease
    },
    '-=0.5' // Run the animation 0.5s early
    );
    }
  }
}
</script>
<style lang="scss">

  .box { 
  height: 60px; 
  width: 60px; 
  background: red; 
}
</style>