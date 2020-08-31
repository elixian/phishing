<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail06.png"
        alt=""
        srcset=""
      />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes et ressemble
          très fortement à des adresses légitimes. Cependant elles ne sont pas
          bonnes.
          <span class="emphasis"
            >La véritable adresse est lassuranceretraite.fr</span
          >. Avez-vous vu la différence?
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          Pour vous inciter à cliquer rapidement
          <span class="emphasis">&laquo;sans trop réfléchir&raquo;</span> il est
          instauré un sentiment d’urgence dans le mail. Même si le sujet est
          important, prenez toujours le temps de la réflexion.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3"
        positionSpot="position-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Le mail présente des erreurs dans l’interprétation des caractères.
          Soyez vigilants lorsque des mails présentent des problèmes de
          formulation, des fautes d’orthographe ou des erreurs dans la
          présentation des caractères.
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
  top: 6rem;
  left: 25rem;
}
.position-2 {
  top: 3rem;
  left: 7rem;
}
.position-3 {
  top: 41rem;
  left: 33rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    47.06% 100%,
    47.06% 11.36%,
    19.41% 11.36%,
    19.41% 7.35%,
    46.99% 7.3%,
    47.06% 11.33%,
    47.06% 100%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    54.45% 99.77%,
    0.79% 4.71%,
    0.79% 1.06%,
    13.78% 1.06%,
    13.78% 4.71%,
    0.79% 4.71%,
    54.45% 99.82%,
    100% 100%,
    100% 0%
  );
}
.overlay-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    14.71% 100%,
    14.71% 54.82%,
    84.22% 54.82%,
    84.22% 67.72%,
    14.71% 67.72%,
    14.71% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
