<template>
  <div>
  <div class="wrapper--img">
    <img src="@/assets/images/campaign/mail03.jpg" alt="" srcset="" />
      <Tooltip  infoOverlay="overlay-1" positionSpot="position-1">
            <template v-slot:textinfo> 
                L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on remarque qu’il s’agit d’un domaine en .info. Les services légitimes français sont généralement hébergés sur des domaines en .fr ou en .com (pour l’aspect international). Si vous voyez un domaine d’émission un peu particulier, même si ce n’est pas un critère discriminant dans cet exemple (car plutôt plausible), cela doit attirer votre attention
            </template>
        </Tooltip>
    <Tooltip  infoOverlay="overlay-2" positionSpot="position-2">
            <template v-slot:textinfo> 
Un principe, général, méfiez-vous des gains financiers «trop faciles». A minima l’objectif est de récupérer votre adresse mail afin de vous envoyer des publicités. Qui plus est sur des sujets accrocheurs en lien avec l’actualité (contexte sanitaire, politique, soldes, périodes particulières..).
            </template>
        </Tooltip>
</div>

     

  </div>
</template>

<script>

import Tooltip from '@/components/Utils/Tooltip';
export default {
components:{
    Tooltip
}

};
</script>
<style lang="scss" >
.position-1 {
  top: 6.8rem;
    left: 38rem;
}
.position-2 {
  top: 3rem;
    left: 15rem;
}

.overlay-1 {
    
  clip-path: polygon(
    0% 0%,
    0% 100%,
    23.29% 100%,
    23.29% 8.5%,
    48.82% 8.5%,
    48.82% 12.74%,
    23.29% 12.85%,
    23.29% 100%,
    100% 100%,
    100% 0%
  );
  
}

.overlay-2{
    clip-path: polygon(0% 0%, 0% 100%, 11.36% 99.82%, 10.60% 2.25%, 31.9% 2.25%, 31.77% 6.67%, 10.47% 6.78%, 11.37% 99.82%, 100% 100%, 100% 0%);
}
span[class^="overlay"]{
    width: 100%;
  display: block;
  height: 100%;
  top: 0;
    position:absolute;
  background: rgba(0, 0, 0, 0.4);
   display:none;
}
</style>
