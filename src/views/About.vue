<template>
  <div class="about">
    <div class="navigation">
      <div class="navigation--items">
        <div class="left">
      <button class="btn isPhishing" @click="checkAnsw(true)">
        Is Phishing
      </button>
      <button class="btn isNotPhishing" @click="checkAnsw(false)">
        Is not Phishing
      </button>
        </div>
        <div class="right">
      <router-link :to="{ name: 'Phishing' + nextPhishing }" v-if="answer !== null"
        ><span @click="nextStep">Next</span></router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view :error="answer"/>
    </div>

    <!-- <img v-if="answer === false" class="img-result" src="@/assets/homer.png" alt="" />
    <img v-if="answer === true" class="img-result" src="@/assets/homer-succes.gif" alt="" /> -->

  </div>
</template>

<script>
import {gsap, Power2} from 'gsap';
export default {
  mounted(){
    console.log(this.$route.path)
    if(this.$route.path !== '/test/1'){
      this.$router.push('/test/1');
    }
  
  },
  data() {
    return {
      nextPhishing:2,
      answer: null,
      tl: gsap.timeline()

    };
  },
  methods: {
    nextStep() {
      this.nextPhishing++;
      this.answer = null;
    },
    checkAnsw(v) {
      console.log(v);
      this.answer = v == this.$store.state.isPhishing;
      if(!this.answer){
        let panError = '.modal-feedback_error'
        gsap.set(panError,{display:'block'})
        this.tl
        .to('.focus-error',0.8,{ background:'white', transform:"scale(1.2)", display:'block',y:10, boxShadow:'0px 0px 5px #c2c2c2', padding:'1rem'})
        .from(panError,0.9, { display:'block',opacity:0, height:30, width:0, ease: Power2.easeOut})
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  
  .navigation--items{
    display: flex;
    width:50%;
    position: relative;
    .left{
      flex: 1 0 auto;
    }
    .right{
        position:absolute;
        right:10%;
    }
  }

  .btn {
    height: 5rem;
    background: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    outline: 0;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 15rem;
    text-transform: uppercase;
    transition:all 0.2s ease-in-out;
    cursor: pointer;
    &.isPhishing {
      background: hsl(34, 100%, 66%);
      border-color: hsl(34, 100%, 42%);
      &:hover{
        transition:all 0.2s ease-in-out;
      background:hsl(34, 100%, 56%);
      }
    }
    &.isNotPhishing {
      background: hsl(150, 50%, 50%);
      border-color: hsl(150, 50%, 35%);
      &:hover{
        transition:all 0.2s ease-in-out;
      background:hsl(150, 50%, 40%);
      }
    }

    
  }
}

.content{
  margin-top:5%;
}
.img-result {
  position: absolute;
  right: 15rem;
  height: 40%;
  bottom: 0;
}
</style>
