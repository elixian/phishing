<template>
    <div id="noAccess">
        <img src="@/assets/images/campaign/Kodama-min.gif" alt="ma" srcset="">
        <a href="https://fr.wikipedia.org/wiki/Hame%C3%A7onnage"  class="goaway">Next Tree .</a>
    </div>
</template>




<style lang="scss" scoped>

#noAccess{
    background-color:#060607;
    overflow: hidden;
    position: relative;
    font-family: 'Gingerbread House',Arial, Helvetica, sans-serif;
}
img{
    width:50%;
    margin: 0 auto;
    background-color:#060607;
}
.goaway{
    color:transparent;
    position:absolute;
    top:50%;
    left:50%;
    font-size:10rem;
    text-decoration:none;
    background: linear-gradient(to right, #FFF 20%, rgb(154, 216, 54) 40%, rgb(49, 212, 27) 60%, #FFF 80%);
  background-size: 200% auto;
  background-clip: text;
  animation: shine 10s linear infinite;
}

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
</style>