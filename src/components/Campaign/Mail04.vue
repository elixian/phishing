<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail04.jpg"
        alt=""
        srcset=""
      />
      <Tooltip
        infoOverlay="overlay-1"
        positionSpot="position-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes et ressemble
          très fortement à des adresses légitimes. Cependant elles ne sont pas
          bonnes. Cet exemple vous illustre que même en étant vigilant il est
          possible d’aller assez loin dans l’usurpation des adresses d’envoi de
          messages.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-2"
        positionSpot="position-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ce mail rappel les mails de factures reçus il y a quelques temps. Le
          principe de base, si je n’attends pas forcément de document, je suis
          vigilant.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3"
        positionSpot="position-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ici ce qui pose problème c’est le formalisme général du mail.
          Attendez-vous un document? Savez-vous qui vous met à disposition ce
          document?
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
.position-3 {
  top: 22rem;
left: 40rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    21.84% 100%,
    21.97% 38.45%,
    19.38% 23.11%,
    19.38% 17.24%,
    46.77% 17.58%,
    46.64% 23.45%,
    19.32% 23.13%,
    21.9% 38.37%,
    48.06% 38.37%,
    48.03% 44.8%,
    21.84% 44.8%,
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
.overlay-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    6% 100%,
    6% 32%,
    73% 32%,
    73% 75%,
    6% 75%,
    6% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
