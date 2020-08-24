<template>
  <div>
    <div class="wrapper--img">
      <img src="@/assets/images/campaign/mail04.jpg" alt="" srcset="" />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes et ressemble
          très fortement à des adresses légitimes. Cependant elles ne sont pas
          bonnes. Cet exemple vous illustre que même en étant vigilant il est
          possible d’aller assez loin dans l’usurpation des adresses d’envoi de
          messages.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          Un principe, général, méfiez-vous des gains financiers &laquo;trop
          faciles&raquo;. A minima l’objectif est de récupérer votre adresse
          mail afin de vous envoyer des publicités. Qui plus est sur des sujets
          accrocheurs en lien avec l’actualité (contexte sanitaire, politique,
          soldes, périodes particulières..).
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
  top: 12.8rem;
  left: 35rem;
}
.position-2 {
  top: 19rem;
  left: 15rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    21.84% 100%,
    21.84% 39.81%,
    19.38% 23.11%,
    19.38% 17.24%,
    42.93% 17.24%,
    42.8% 23.11%,
    19.32% 23.13%,
    21.9% 40.06%,
    48.06% 40.06%,
    48.03% 45.82%,
    21.84% 45.82%,
    21.84% 100%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    6.24% 100%,
    6.24% 56.33%,
    31.9% 56.33%,
    31.9% 66.53%,
    6.24% 66.53%,
    6.24% 99.82%,
    100% 100%,
    100% 0%
  );
}

span[class^="overlay"] {
  width: 100%;
  display: block;
  height: 100%;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  display: none;
}
</style>
