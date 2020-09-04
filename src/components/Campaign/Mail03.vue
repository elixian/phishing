<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail03.jpg"
        alt="mail phishing"
        srcset=""
      />
      <Tooltip
        infoOverlay="overlay-3-1"
        positionSpot="position-3-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en <code class="emphasis">.info</code>. Les services légitimes
          sont généralement hébergés sur des domaines en <code class="emphasis">.fr</code> ou en <code class="emphasis">.com</code>
          (pour l’aspect international). Si vous voyez un domaine d’émission un
          peu particulier, même si ce n’est pas un critère discriminant dans cet
          exemple (car plutôt plausible), cela doit attirer votre attention
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3-2"
        positionSpot="position-3-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Un principe, général, méfiez-vous des gains financiers <span class="emphasis">&laquo;trop
          faciles&raquo;</span>. A minima l’objectif est de récupérer votre adresse
          mail afin de vous envoyer des publicités. Qui plus est sur des sujets
          accrocheurs en lien avec l’actualité (contexte sanitaire, politique,
          soldes, périodes particulières..).
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3-3"
        positionSpot="position-3-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Généralement lors de remboursements, les dispositions d’applications
          sont précisées dans les mails. Ici aucune information sur les
          dispositions en questions.
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
<style lang="scss" >
.position-3-1 {
  top: 6.8rem;
  left: 29rem;
}
.position-3-2 {
  top: 3rem;
  left: 15rem;
}

.position-3-3 {
  top: 26.4rem;
  left: 55rem;
}

.overlay-3-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    23.29% 100%,
    23.29% 8.5%,
    48.82% 8.5%,
    48.82% 12.74%,
    23.29% 12.85%,
    23.29% 54.07%,
    56.2% 54.07%,
    56.2% 48.4%,
    81.4% 48.4%,
    81.4% 54.07%,
    23.29% 54.07%,
    23.29% 100%,
    100% 100%,
    100% 0%
  );
}

.overlay-3-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    11.36% 99.82%,
    10.6% 2.25%,
    31.9% 2.25%,
    31.77% 6.67%,
    10.47% 6.78%,
    11.37% 99.82%,
    100% 100%,
    100% 0%
  );
}
.overlay-3-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    61.62% 99.64%,
    61.12% 44%,
    82.41% 44%,
    82.41% 48.24%,
    61.11% 48.35%,
    61.63% 99.64%,
    100% 100%,
    100% 0%
  );
}

</style>
