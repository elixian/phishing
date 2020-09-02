<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail08.png"
        alt="mail phishing"
        srcset=""
      />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en
          <code class="emphasis">.email</code> . Les services légitimes français
          sont généralement hébergés sur des domaines en
          <code class="emphasis">.fr</code> ou en
          <code class="emphasis">.com</code>
          (pour l’aspect international). Si vous voyez un domaine d’émission un
          peu particulier, même si ce n’est pas un critère discriminant, cela
          doit attirer votre attention.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          Pour vous inciter à cliquer rapidement &laquo;sans trop
          réfléchir&raquo;
          <span class="emphasis"
            >il est instauré un sentiment d’urgence dans le mail</span
          >. Même si le sujet est urgent, prenez toujours le temps de la
          réflexion.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3"
        positionSpot="position-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Afin d’ajouter de la confiance au mail, les données (N° de facture,
          montant…) sont souvent très précises.
          <span class="emphasis"
            >Cependant dans les mails légitimes, aucune donnée précise n’est
            normalement indiquée</span
          >, vous êtes généralement invité à vous connecter au service pour
          accéder aux informations précises
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-4"
        positionSpot="position-4"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Attention au faux sentiment de sécurité. Pour rendre légitime et
          &laquo;sécurisé&raquo; un mail les pirates informatiques n’hésitent
          pas à agréger les multiples logos &laquo;sécurité&raquo; qu’ils
          peuvent trouver. Soyez vigilant,
          <span class="emphasis"
            >un logo sécurité ne veut pas dire confiance aveugle au mail</span
          >
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-5"
        positionSpot="position-5"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Soyez vigilants aux formulations des mails. Un ton trop familier, des
          fautes d’orthographe ou des phrases mal formulées sont des indices qui
          doivent vous alerter.
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
  top: 5rem;
  left: 23rem;
}
.position-2 {
  top: 2rem;
  left: 4rem;
}

.position-3 {
  top: 20rem;
  left: 55rem;
}
.position-4 {
  top: 37rem;
  left: 44rem;
}
.position-5 {
  top: 32rem;
  left: 18rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    27.5% 100%,
    27.5% 9.5%,
    34.4% 9.5%,
    34.4% 14.33%,
    27.5% 14.33%,
    27.5% 100%,
    67.71% 100%,
    67.71% 62.51%,
    87.24% 62.51%,
    87.24% 65.98%,
    67.71% 65.98%,
    67.71% 100%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    22.71% 100%,
    0.53% 6.79%,
    0.53% 2.1%,
    8.01% 2.1%,
    8.01% 6.78%,
    0.53% 6.79%,
    22.71% 100%,
    38.48% 100%,
    38.48% 83.83%,
    31.69% 83.79%,
    31.69% 51.55%,
    23.25% 51.55%,
    23.25% 46.71%,
    30.17% 46.71%,
    30.17% 72.82%,
    30% 79.86%,
    38.48% 79.97%,
    38.48% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    50.56% 100%,
    50.56% 47.56%,
    74.01% 47.56%,
    74.01% 52%,
    69% 52%,
    69% 47.26%,
    58% 47.56%,
    58% 52%,
    50.56% 52%,
    50.56% 47.56%,
    50.56% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-4 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    39.23% 100%,
    39.23% 85.13%,
    60% 85.13%,
    60% 97.53%,
    52.8% 97.53%,
    52.8% 77.31%,
    45.5% 77.31%,
    45.5% 97.53%,
    39.23% 97.53%,
    39.23% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-5 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    39.23% 100%,
    28.82% 83.34%,
    9.16% 83.29%,
    9.18% 78.63%,
    28.92% 78.75%,
    26.82% 55.72%,
    26.84% 51.35%,
    46.81% 51.57%,
    46.83% 55.79%,
    26.84% 55.77%,
    28.86% 78.57%,
    28.83% 85.16%,
    39.23% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
