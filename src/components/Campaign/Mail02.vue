<template>
  <div>
    <div class="wrapper--img">
      <img
        src="@/assets/images/campaign/mail02.jpg"
        alt="mail phishing"
        srcset=""
        class="img-phishing"
      />
      <Tooltip
        infoOverlay="overlay-2-1"
        positionSpot="position-2-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’aspect confidentiel de l’accès doit attirer votre attention. Est-ce
          qu’on ne cherche pas à me faire cliquer rapidement?
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-2-2"
        positionSpot="position-2-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes mais
          attention ce ne sont pas celles de microsoft. Regardez bien le domaine
          : <span class="emphasis">crosoft.online</span> .
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay-2-3"
        positionSpot="position-2-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ici ce qui pose problème c’est le formalisme général du mail.
          Avez-vous fait une demande d’accès? Si ce n’est pas le cas soyez
          vigilants
        </template>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from "@/components/Utils/Tooltip";
import {mapActions} from "vuex";
export default {
  created(){
 this.setCurrentStatus(true);
  
  },
  methods:{
    ...mapActions('game',['setCurrentStatus'])
  },
  components: {
    Tooltip,
  },
};
</script>
<style lang="scss" >
.position-2-1 {
  top: 17rem;
  left: 52rem;
}
.position-2-2 {
  top: 19.7rem;
  left: 29rem;
}
.position-2-3 {
  top: 23rem;
  left: 35rem;
}

.overlay-2-1 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    62.05% 100%,
    62.05% 45%,
    75.64% 45%,
    75.64% 52%,
    62.05% 52%,
    62.05% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-2-2 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    20.39% 100%,
    20.39% 23.33%,
    20.39% 15.71%,
    45.88% 15.71%,
    45.88% 23.33%,
    20.39% 23.33%,
    20.39% 50%,
    64% 50%,
    64% 62%,
    34.5% 62%,
    34.5% 50%,
    20.39% 50%,
    20.39% 100%,
    100% 100%,
    100% 0%
  );
}
.overlay-2-3 {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    7% 100%,
    7% 31%,
    77.3% 31%,
    77.59% 69%,
    7% 69%,
    7% 100%,
    100% 100%,
    100% 0%
  );
}
</style>
