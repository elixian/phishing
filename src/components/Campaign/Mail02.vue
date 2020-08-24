<template>
  <div>
    <div class="wrapper--img">
      <img src="@/assets/images/campaign/mail02.jpg" alt="" srcset="" />
      <Tooltip infoOverlay="overlay-1" positionSpot="position-1">
        <template v-slot:textinfo>
L’aspect confidentiel de l’accès doit attirer votre attention. Est-ce qu’on ne cherche pas à me faire cliquer rapidement?
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay-2" positionSpot="position-2">
        <template v-slot:textinfo>
            Todo manque url dans l'image avec le hover
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
  top: 17rem;
left: 52rem;
}
.position-2 {
  top: 48.7rem;
left: 47rem;
}

.overlay-1 {
clip-path: polygon(0% 0%, 0% 100%, 62.05% 100%, 62.05% 46.88%, 75.64% 46.88%, 75.64% 57.71%, 62.05% 57.71%, 62.05% 100%, 100% 100%, 100% 0%);}
.overlay-2 {
  clip-path: polygon(0% 0%, 0% 100%, 21.88% 100%, 21.88% 40.1%, 69.98% 40.1%, 69.98% 41.69%, 36.76% 41.8%, 36.83% 40.11%, 21.92% 40.09%, 21.71% 45.32%, 66.8% 45.37%, 66.76% 48.15%, 21.67% 48.26%, 21.75% 100.1%, 100% 100%, 100% 0%);
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
