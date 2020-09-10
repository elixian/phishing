<template>
  <div class="wrapper--img">
    <div class="object">
      Mauvaise nouvelle !
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">NO</span>
        <span class="tips-1 mail">
          Notifications Office &lt;notifications@crosoft.online
          &gt;</span
        >
        <img
          class="buttons-mail"
          src="@/assets/images/game/buttons-mail.png"
          alt=""
        />
      </div>
      <div class="tips-3">
     <p>Bonjour,</p>

<p>&nbsp;</p>

<p>Et voil&agrave; !</p>

<p>&nbsp;</p>

<p ><a @click.prevent class="tips-2 tips-1 OWAAutoLink _3iLgzr8un7L5GebClucrpV _1qJHlPfY83WgqLBJTIZPj" contenteditable="false" data-ogsc="" href="https://www.crosoft.online?rid=mdlzpf" title="https://www.crosoft.online?rid=mdlzpf" id="OLK_Beautified_OWAc825fdd3-c469-cb7a-8b3c-43299f8628a2" style="pointer-events: auto; padding: 0px 1px; border-radius: 2px; user-select: all;"><img alt="pdf"  role="presentation" src="https://r2.res.outlook.com/owa/prem/images/pdf_16x16.png" style="width: 16px; height: 16px; vertical-align: middle; padding: 1px 2px 2px 0px;" />relevé_CHASSAIGNEAU.pdf</a></p>

<p>&nbsp;</p>

<p>merci</p>
</div>
<p>&nbsp;</p>
    </div>
    <template v-if="currentGame.showSpot ">
      <Tooltip
        infoOverlay="overlay4-1"
        positionSpot="position4-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes mais
          attention ce ne sont pas celles de microsoft. Regardez bien le domaine
          : <code class="emphasis">crosoft.online</code>.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay4-2"
        positionSpot="position4-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ce mail rappel les mails de factures reçus il y a quelques temps. Le
          principe de base, si je n’attends pas forcément de document, je suis
          vigilant.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay4-3"
        positionSpot="position4-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ici ce qui pose problème c’est le formalisme général du mail.
          Attendez-vous un document? Savez-vous qui vous met à disposition ce
          document?
        </template>
      </Tooltip>
    </template>
  </div>
</template>

<script>
// import Tooltip from "@/components/Utils/Tooltip";
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
@import "@/scss/game/_game.scss";
a {
  color: #0072bc;
  text-decoration: none;
}
.position4-1 {
  top: 9.8rem;
  left: 38rem;
}
.position4-2 {
  top: 25rem;
  left: 15rem;
}
.position4-3 {
  top: 28rem;
  left: 40rem;
}
</style>
