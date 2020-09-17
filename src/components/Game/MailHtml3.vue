<template>
  <div class="wrapper--img">
    <div class="object">
      *spam?* <span class="tips-2">mamatih@yahoo.comHiya</span>
    </div>
    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">MC</span>
        <div>
          <span class="tips-1 mail ">
            Meriwether Colpitts &lt;meriwethercolpitts1999@hotmail.com
            &gt;</span>
          <div class="time-zone">le 05/09/2020 à 06:56</div>
        </div>

        <img
          class="buttons-mail"
          src="@/assets/images/game/buttons-mail.png"
          alt=""
        />
      </div>
      <div>
        <a @click.prevent href="https://bit.ly/3m9i654">https://bit.ly/3m9i654</a>
        <br>
        <br>
        <hr>
        <a @click.prevent href="mailto:mamamith@yahoo.com">mamamith@yahoo.com</a>
        <br>
        <br>

        <div class="post-info">NEWS: The coal-pots fuelling Antigua's ghost stories and folk tales
In generations past, Antiguans would gather around a coal-pot not only to cook but also to socialise.
'Oracle just completely saved the day': TikTok users react to looming deal
As news spread that Oracle had reached an agreement to become TikTok's partner in the United States, in a deal that could keep the app alive in the country, some TikTokers started posting celebratory videos calling the enterprise software giant the platform's "savior."
Campaigners win fight to stop Maldives islands becoming luxury resort
Local residents in the Maldives have won a campaign against developers and the government who wanted to turn two islands into a luxury resort.
</div>
      </div>
    </div>
    <template v-if="currentGame.showSpot">
      <Tooltip
        infoOverlay="overlay3-1"
        positionSpot="position3-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en
          <code class="emphasis">.info</code>. Les services légitimes sont
          généralement hébergés sur des domaines en
          <code class="emphasis">.fr</code> ou en
          <code class="emphasis">.com</code>
          (pour l’aspect international). Si vous voyez un domaine d’émission un
          peu particulier, même si ce n’est pas un critère discriminant dans cet
          exemple (car plutôt plausible), cela doit attirer votre attention
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay3-2"
        positionSpot="position3-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Un principe, général, méfiez-vous des gains financiers
          <span class="emphasis">&laquo;trop faciles&raquo;</span>. A minima
          l’objectif est de récupérer votre adresse mail afin de vous envoyer
          des publicités. Qui plus est sur des sujets accrocheurs en lien avec
          l’actualité (contexte sanitaire, politique, soldes, périodes
          particulières..).
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay3-3"
        positionSpot="position3-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Généralement lors de remboursements, les dispositions d’applications
          sont précisées dans les mails. Ici aucune information sur les
          dispositions en questions.
        </template>
      </Tooltip>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Tooltip from "@/components/Utils/Tooltip";
export default {
  created() {
    this.setCurrentStatus(true);
  },
  computed: {
    ...mapState("game", ["currentGame"]),
  },
  methods: {
    ...mapActions("game", ["setCurrentStatus"]),
  },
  components: {
    Tooltip,
  },
};
</script>
<style lang="scss">
.position3-1 {
  top: 39.8rem;
  left: 29rem;
}
.position3-2 {
  top: 3rem;
  left: 15rem;
}

.position3-3 {
  top: 33.4rem;
  left: 55rem;
}
</style>
