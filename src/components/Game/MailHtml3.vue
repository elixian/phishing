<template>
  <div class="wrapper--img">
    <div class="object">
      *spam?* <span>mamatih@yahoo.comHiya</span>
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
      <div class="tips-2">
        <a class="tips-3" @click.prevent href="https://bit.ly/3m9i654">https://bit.ly/3m9i654</a>
        <br>
        <br>
      
        <a @click.prevent href="mailto:mamamith@yahoo.com">mamamith@yahoo.com</a>
        <br>
        <br>

        <!-- <div class="post-info">NEWS: The coal-pots fuelling Antigua's ghost stories and folk tales
In generations past, Antiguans would gather around a coal-pot not only to cook but also to socialise.
'Oracle just completely saved the day': TikTok users react to looming deal
As news spread that Oracle had reached an agreement to become TikTok's partner in the United States, in a deal that could keep the app alive in the country, some TikTokers started posting celebratory videos calling the enterprise software giant the platform's "savior."
Campaigners win fight to stop Maldives islands becoming luxury resort
Local residents in the Maldives have won a campaign against developers and the government who wanted to turn two islands into a luxury resort.
</div> -->
      </div>
    </div>
    <template v-if="currentGame.showSpot">
      <Tooltip
        infoOverlay="overlay3-1"
        positionSpot="position3-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’expéditeur possède une adresse particulière hébergée chez <code class="emphasis">hotmail</code> qui doit attirer votre attention
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay3-2"
        positionSpot="position3-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Le mail ne présente aucune information, seulement un lien ce qui semble très suspect
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay3-3"
        positionSpot="position3-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Attention aux lien de type <span class='emphasis'>bit.ly</span> qui sont généralement utilisés pour avoir des URLs raccourcies mais qui peuvent également servir à cacher le vrai site visé.
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
  top: 8.8rem;
  left: 29rem;
}
.position3-2 {
  top: 24rem;
  left: 36rem;
}

.position3-3 {
  top: 16.4rem;
  left: 12rem;
}

.tips-2{
  padding: 2px;
}
</style>
