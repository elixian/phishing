<template>
  <div>
    <div class="wrapper--img">
      <img src="@/assets/images/campaign/mail05.jpg" alt="" srcset="" />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1" spot-darken=true>
        <template v-slot:textinfo>
          Un principe, général, méfiez-vous des services/documents gratuits. A
          minima l’objectif est de récupérer votre adresse mail afin de vous
          envoyer des publicités. Qui plus est sur des sujets accrocheurs en
          lien avec l’actualité (contexte sanitaire, politique, soldes, périodes
          particulières..). Dans le cas présent rare sont les cas où un
          smartphone à près de 1000€ est offert gratuitement et de manière
          totalement aléatoire.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection ressemble fortement à celle
          d’amazone, cependant en lieu et place du &laquo;o&raquo;, a été mise
          le chiffre &laquo;0&raquo;. Il s’agit d’une nouvelle pratique assez
          répandue pour faire croire à un site légitime.
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
  top: 23.9rem;
  left: 32rem;
}
.position-2 {
  top: 5rem;
  left: 15rem;
}

.overlay-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    26.58% 100%,
    26.58% 50.42%,
    60.24% 50.42%,
    60.24% 54.62%,
    26.58% 54.62%,
    26.58% 100%,
    100% 100%,
    100% 0%
  );
}

.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    54.45% 99.77%,
    54.31% 75.66%,
    26.07% 13.18%,
    12.84% 13.15%,
    12.87% 7.35%,
    25.96% 7.47%,
    26.03% 13.65%,
    54.31% 75.74%,
    72.92% 75.97%,
    72.92% 81.2%,
    54.31% 81.2%,
    54.45% 99.82%,
    100% 100%,
    100% 0%
  );
}

</style>
