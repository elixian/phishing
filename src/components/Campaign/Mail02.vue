<template>
  <div>
    <div class="wrapper--img">
      <img src="@/assets/images/campaign/mail02.jpg" alt="" srcset="" class="img-phishing"/>
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1" spot-darken=true>
        <template v-slot:textinfo>
L’aspect confidentiel de l’accès doit attirer votre attention. Est-ce qu’on ne cherche pas à me faire cliquer rapidement?
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2" spot-darken=true>
        <template v-slot:textinfo>
            L’adresse d’envoi et l’URL de redirection sont cohérentes et ressemble très fortement à des adresses légitimes. Cependant elles ne sont pas bonnes. Cet exemple vous illustre que même en étant vigilant il est possible d’aller assez loin dans l’usurpation des adresses d’envoi de. messages
        </template>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from "@/components/Utils/Tooltip";
export default {
  components: {
    Tooltip,
  },
};
</script>
<style lang="scss">
.position-1 {
  top: 17rem;
left: 52rem;
}
.position-2 {
  top: 6.7rem;
  left: 14rem;
}

.overlay-1 {
clip-path: polygon(0% 0%, 0% 100%, 62.05% 100%, 62.05% 46.88%, 75.64% 46.88%, 75.64% 57.71%, 62.05% 57.71%, 62.05% 100%, 100% 100%, 100% 0%);}
.overlay-2 {
clip-path: polygon(0% 0%, 0% 100%, 20.39% 100%, 20.39% 23.33%, 20.39% 16.71%, 41.88% 16.71%, 41.88% 23.33%, 20.39% 23.33%, 20.39% 59.54%, 62% 59.54%, 62% 75%, 34.5% 75%, 34.5% 59.54%, 20.39% 59.54%, 20.39% 100%, 100% 100%, 100% 0%);
}


</style>
