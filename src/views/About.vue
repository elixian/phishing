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

    <img v-if="answer === false" class="img-result" src="@/assets/homer.png" alt="" />
    <img v-if="answer === true" class="img-result" src="@/assets/homer-succes.gif" alt="" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      nextPhishing: 1,
      answer: null,

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
