<template>
  <div>
    <div class="wrapper--img">
      <img
        class="img-phishing"
        src="@/assets/images/campaign/mail09.png"
        alt="image campagne phishing"
        srcset=""
      />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1" spot-darken=1>
        <template v-slot:textinfo>
          Attention aux sujets alléchants… Souvent ils sont la pour vous inciter à cliquer.

        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-2"
        positionSpot="position-2"
        spot-darken="1"
      >
        <template v-slot:textinfo>
          Même si c’est subtil, l’adresse mail et le nom ne correspondent pas.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-3"
        positionSpot="position-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en <code class="emphasis">.info</code>. Les services légitimes
          français sont généralement hébergés sur des domaines en <code class="emphasis">.fr</code> ou en <code class="emphasis">.com</code>
          (pour l’aspect international). Si vous voyez un <span class="emphasis">domaine d’émission un
          peu particulier</span>, même si ce n’est pas un critère discriminant dans cet
          exemple (car plutôt plausible), cela <span class="emphasis">doit attirer votre attention</span>.
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
.position-1 {
  top: 32rem;
  left: 33rem;
}

.position-2 {
  top: 48rem;
  left: 34rem;
}
.position-3 {
  top: 38rem;
  left: 42rem;
}

.overlay-1 {
 clip-path: polygon(0% 0%, 0% 100%, 19.5% 100%, 19.5% 38.73%, 78.54% 38.73%, 78.54% 52%, 19.5% 52%, 19.5% 100%, 100% 100%, 100% 0%);
}


.overlay-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    26.71% 100%,
    26.71% 29.35%,
    42.44% 29.35%,
    42.44% 33%,
    26.71% 33%,
    26.71% 73.35%,
    52.55% 73.35%,
    52.55% 76.89%,
    34.96% 76.89%,
    34.96% 73.35%,
    26.71% 73.35%,
    26.71% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    25.6% 100%,
    25.6% 11.58%,
    25.6% 7.33%,
    51.98% 7.33%,
    51.98% 11.58%,
    25.6% 11.58%,
    25.6% 57.87%,
    59.24% 57.87%,
    59.24% 62.24%,
    35.28% 62.24%,
    35.28% 57.87%,
    25.6% 57.87%,
    25.6% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
