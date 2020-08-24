<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail07.jpg"
        alt=""
        srcset=""
      />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
          Lorsque les équipements de sécurité ont un doute sur un mail, le
          &laquo;TAG&raquo; SPAM est ajouté en objet du mail. Par principe il
          est fort probable que le mail soit effectivement un SPAM.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en <code>.online</code> . Les
          services légitimes français sont généralement hébergés sur des
          domaines en .fr ou en .com (pour l’aspect international). Si vous
          voyez un domaine d’émission un peu particulier, même si ce n’est pas
          un critère discriminant, cela doit attirer votre attention.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-3" positionSpot="position-3">
        <template v-slot:textinfo>
          Le mails présente des erreur dans l’interprétation des caractères.
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
  top: 3rem;
  left: 2rem;
}
.position-2 {
  top: 5rem;
  left: 19rem;
}
.position-3 {
  top: 29rem;
  left: 33rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    54.45% 99.77%,
    0.79% 6.71%,
    0.79% 1.06%,
    06.78% 1.06%,
    6.78% 6.71%,
    0.79% 6.71%,
    54.45% 99.82%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    22.71% 100%,
    22.71% 12.77%,
    22.71% 7.36%,
    34.68% 7.36%,
    34.68% 12.77%,
    22.71% 12.77%,
    22.71% 100%,
    63.74% 100%,
    63.74% 56.19%,
    81.34% 56.24%,
    81.39% 64.68%,
    63.74% 64.68%,
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
    25.71% 42.82%,
    72.22% 42.82%,
    72.22% 73.72%,
    25.71% 73.72%,
    25.71% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
