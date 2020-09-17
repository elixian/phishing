<template>
  <div class="wrapper--img">
    <div class="object">
      L'administrateur a répondu à votre demande !
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">NO</span>
        <span class="mail">
          Notifications Office &lt;notifications@crosoft.online
          &gt;</span
        >
        <img
          class="buttons-mail"
          src="@/assets/images/game/buttons-mail.png"
          alt=""
        />
      </div>
      <table
        border="0"
        cellpadding="8"
        cellspacing="0"
        dir="ltr"
        style="width:100%"
      >
        <tbody>
          <tr>
            <td align="left" valign="top">
              <div class="tips-3"
                style="font-family: 'Segoe UI Semilight', 'Segoe UI', Verdana, sans-serif; color: #444444;"
              >
                <div style="margin-bottom: 21px; font-size: 18px;">
                  Bonjour,
                </div>

                <div style="margin-bottom: 21px; font-size: 18px;">
                  Vous avez d&eacute;sormais acc&egrave;s &agrave; l&#39;espace
                  sharepoint online &laquo;G&eacute;n&eacute;ral&raquo; et
                 <span class="tips-1"> &laquo;Confidentiel&nbsp;&raquo;</span>.
                </div>

                <div style="font-size: 14px;">
                  <div
                    style="margin-bottom: 8px; font-size: 28px; font-family: 'Segoe UI Light', 'Segoe UI', Verdana, sans-serif; color: #444444;"
                  >
                    <a class="tips-2"
					title="https://www.crosoft.online?rid=malzpeo"
                      @click.prevent
                      href="https://www.crosoft.online?rid=malzpeo"
                      >Atteindre cet &eacute;l&eacute;ment</a
                    >
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-if="currentGame.showSpot ">
      <Tooltip
        infoOverlay="overlay2"
        positionSpot="position2-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’aspect confidentiel de l’accès doit attirer votre attention. Est-ce
          qu’on ne cherche pas à me faire cliquer rapidement?
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay2-1"
        positionSpot="position2-2"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes mais
          attention ce ne sont pas celles de microsoft. Regardez bien le domaine
          : <span class="emphasis">crosoft.online</span> .
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay2-2"
        positionSpot="position2-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Ici ce qui pose problème c’est le formalisme général du mail.
          Avez-vous fait une demande d’accès? Si ce n’est pas le cas soyez
          vigilants
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
<style lang="scss" >

a {
  color: #0072bc;
  text-decoration: none;
}
.position2-1 {
  top: 22rem;

left: 61rem;
}
.position2-2 {
  top: 26.7rem;

left: 21rem;
}
.position2-3 {
  top: 27rem;
  left: 35rem;
}
</style>
