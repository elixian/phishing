<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail09.png"
        alt=""
        srcset=""
      />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en .email. Les services légitimes
          français sont généralement hébergés sur des domaines en
          <code>.fr</code> ou en <code>.com</code>
          (pour l’aspect international). Si vous voyez un domaine d’émission un
          peu particulier, même si ce n’est pas un critère discriminant, cela
          doit attirer votre attention.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          Pour vous inciter à cliquer rapidement &laquo;sans trop
          réfléchir&raquo; il est instauré un sentiment d’urgence dans le mail.
          Même si le sujet est urgent, prenez toujours le temps de la réflexion.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-3" positionSpot="position-3">
        <template v-slot:textinfo>
          Afin d’ajouter de la confiance au mail, les données (N° de facture,
          montant…) sont souvent très précises. Cependant dans les mails
          légitimes, aucune données précise n’est normalement indiquée, vous
          êtes généralement invité à vous connecter au service pour accéder aux
          informations précises
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-4" positionSpot="position-4">
        <template v-slot:textinfo>
          Attention au faux sentiment de sécurité. Pour rendre légitime et
          &laquo;sécurisé&raquo; un mail les pirates informatiques n’hésites pas
          à agréger les multiples logos &laquo;sécurité&raquo; qu’ils peuvent
          trouver. Soyez vigilant, un logo sécurité ne veut pas dire confiance
          aveugle au mail
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
  left: 19rem;
}
.position-2 {
  top: 2rem;
  left: 4rem;
}

.position-3 {
  top: 21rem;
  left: 42rem;
}
.position-4 {
  top: 37rem;
  left: 44rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    22.71% 100%,
    22.71% 12.77%,
    22.71% 7.36%,
    31.68% 7.36%,
    31.68% 12.77%,
    22.71% 12.77%,
    22.71% 100%,
    63.74% 100%,
    64% 58.34%,
    87.24% 58.39%,
    87.28% 64.44%,
    63.74% 64.68%,
    63.74% 100%,
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
    63.74% 100%,
    42.66% 77.06%,
    33.23% 77.02%,
    33.26% 72.75%,
    34.82% 50.81%,
    27.86% 50.77%,
    27.86% 46.71%,
    34.17% 46.7%,
    33.18% 72.82%,
    42.54% 72.82%,
    42.58% 77.36%,
    63.74% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    25.71% 100%,
    25.97% 45.45%,
    68.3% 45.93%,
    74.01% 45.93%,
    74.01% 51.31%,
    68.16% 51.31%,
    68.25% 45.7%,
    58.79% 45.71%,
    58.81% 51.19%,
    50.8% 51.07%,
    50.82% 45.48%,
    25.97% 45.22%,
    25.71% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-4 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    40.77% 100%,
    40.77% 77.31%,
    62.85% 77.31%,
    62.85% 88.53%,
    54.35% 88.53%,
    54.35% 77.31%,
    47.41% 77.31%,
    47.41% 89.08%,
    40.77% 89.08%,
    40.77% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
