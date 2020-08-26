<template>
  <div>
    <div class="wrapper--img">
      <img class="img-phishing" src="@/assets/images/campaign/mail01.jpg" alt="" srcset="" />
      <Tooltip
        infoOverlay="overlay-1"
        positionSpot="position-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Afin d’ajouter de la confiance au mail, des détails techniques, ainsi
          qu’une référence factice ont été ajoutés. Ici même si l’explication
          technique ne veut rien dire elle apporte du crédit et de la pertinence
          au mail. Cependant il s’agit d’un leurre.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-2"
        positionSpot="position-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Pour vous inciter à cliquer rapidement &laquo;sans trop
          réfléchir&raquo; il est instauré un sentiment d’urgence dans le mail.
          Même si le sujet est urgent, prenez toujours le temps de la réflexion.
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
  top: 37rem;
  left: 44rem;
}
.position-2 {
  top: 48.7rem;
  left: 47rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    21.88% 100%,
    21.5% 16.35%,
    32.03% 16.35%,
    32.03% 18.34%,
    21.5% 18.34%,
    21.45% 24.32%,
    82.31% 24.37%,
    82.4% 37.16%,
    21.54% 37.17%,
    21.75% 100.1%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0 0,
    0 100%,
    21.88% 100%,
    21.88% 40.1%,
    69.98% 40.1%,
    69.98% 41.69%,
    36.76% 41.69%,
    36.76% 40.01%,
    21.88% 40.01%,
    21.88% 45.32%,
    66.8% 45.32%,
    66.76% 48.15%,
    21.88% 48.26%,
    21.88% 100.1%,
    100% 100%,
    100% 0
  );
}

</style>
