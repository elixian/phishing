<template>
  <div class="wrapper--img">
    <div class="object">
      <span class="tips-2">URGENT</span>: Facture N°461643726
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">SC</span>
        <span class="mail ">
          Service Créance
          <span
            >&lt;<span class="tips-1">service-creance@vanc.email</span
            >&gt;</span
          ></span
        >
        <img
          class="buttons-mail"
          src="@/assets/images/game/buttons-mail.png"
          alt=""
        />
      </div>

      <center>
        <table border="0" cellpadding="0" cellspacing="0" width="603" style="margin-bottom:20px;">
          <tbody>
            <tr></tr>
            <tr>
              <td>
                <a @click.prevent href="https://www.vanc.email?rid=qsflkjqsfi" rel="noreferrer" target="_blank"
                    ><img
                      alt="VANC"
                      border="0"
                      src="https://stock.microsoft-online.fr/images/o365/logo_vanc.png"
                      style="display:block"/></a
                >
              </td>
              <td style="padding-top:20px">
                <span
                  style="font-size:30px;font-family:Arial,Verdana;color:#000000"
                  ><b>VANC Recouvrement</b></span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </center>

      &nbsp;

      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="background-color:#ffffff ;margin-bottom:20px;"
        width="100%"
      >
        <tbody>
          <tr>
            <td align="center" style="padding-top:0px" valign="top">
              <table
                bgcolor="#FFFFFF"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="600"
              >
                <tbody>
                  <tr>
                    <td bgcolor="#EEEEEE">
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td style="padding:10px 20px">
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="padding-top:10px"
                                      valign="top"
                                      width="460"
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td style="padding-top:20px">
                                              <span
                                                style="font-size:15px;font-family:Arial,Verdana;color:#000000"
                                                ><b style="color:#e1372b" class="tips-2"
                                                  >URGENT :</b
                                                >
                                                Le r&eacute;glement pour la
                                                <span class="tips-3">facture N&deg;461643726</span>,
                                                d&#39;un montant de<span class="tips-3"> 377,54&euro;</span>
                                                TTC <span class="tips-5">n&#39;ait toujours pas
                                                arriv&eacute; &agrave;
                                                nous</span>.</span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding-bottom:15px">
                              <span
                                style="font-size:13px;font-family:Arial,Verdana;color:#323232"
                                ><b
                                  >Malgr&eacute; plusieurs relances de notre
                                  part, nous n&#39;avons toujours pas
                                  re&ccedil;u le paiement. Pour mettre fin
                                  &agrave; ce contentieux, nous vous
                                  recommandons vivement de r&eacute;gler votre
                                  d&ucirc; en cliquant sur le lien ci-dessous</b
                                ><br />
                                <br />
                                <a
                                @click.prevent
                                  href="https://www.vanc.email?rid=qsflkjqsfi"
                                  rel="noreferrer"
                                  style="font-size:20px"
                                  target="_blank"
                                  ><b
                                    ><u
                                      >&gt;&gt;&gt; Cliquez ici pour
                                      r&eacute;gler votre facture
                                      &lt;&lt;&lt;</u
                                    ></b
                                  ></a
                                ><b><u> </u></b> </span
                              ><br />
                              &nbsp;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:15px">
              <span
                style="font-size:13px;font-family:Arial,Verdana;color:#323232;margin-top:20px;"
                ><b
                  ><span class="tips-5">A d&eacute;faut de r&eacute;glement de ta part</span> <span class="tips-2">dans les 8
                  jours</span>, nous nous verrons dans l&#39;obligation de poursuivre
                  ce recouvrement par voie judiciaire.</b
                ></span
              >
            </td>
          </tr>
          <tr>
            <td>
              <center>
                <a @click.prevent class="tips-4" href="https://www.vanc.email?rid=qsflkjqsfi" rel="noreferrer" target="_blank"
                  ><img
                    alt="VANC"
                    border="0"
                    height="20%"
                    src="https://stock.microsoft-online.fr/images/o365/logo_vanc_bas.png"
                    style="display:block"
                    width="25%"
                /></a>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-if="currentGame.showSpot">
      
      <Tooltip infoOverlay="overlay8-1" positionSpot="position8-1" spot-darken=true>
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en
          <code class="emphasis">.email</code> . Les services légitimes français
          sont généralement hébergés sur des domaines en
          <code class="emphasis">.fr</code> ou en
          <code class="emphasis">.com</code>
          (pour l’aspect international). Si vous voyez un domaine d’émission un
          peu particulier, même si ce n’est pas un critère discriminant, cela
          doit attirer votre attention.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay8-2" positionSpot="position8-2" spot-darken=true>
        <template v-slot:textinfo>
          Pour vous inciter à cliquer rapidement &laquo;sans trop
          réfléchir&raquo;
          <span class="emphasis"
            >il est instauré un sentiment d’urgence dans le mail</span
          >. Même si le sujet est urgent, prenez toujours le temps de la
          réflexion.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay8-3"
        positionSpot="position8-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Afin d’ajouter de la confiance au mail, les données (N° de facture,
          montant…) sont souvent très précises.
          <span class="emphasis"
            >Cependant dans les mails légitimes, aucune donnée précise n’est
            normalement indiquée</span
          >, vous êtes généralement invité à vous connecter au service pour
          accéder aux informations précises
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay8-4"
        positionSpot="position8-4"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Attention au faux sentiment de sécurité. Pour rendre légitime et
          &laquo;sécurisé&raquo; un mail les pirates informatiques n’hésitent
          pas à agréger les multiples logos &laquo;sécurité&raquo; qu’ils
          peuvent trouver. Soyez vigilant,
          <span class="emphasis"
            >un logo sécurité ne veut pas dire confiance aveugle au mail</span
          >
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay8-5"
        positionSpot="position8-5"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Soyez vigilants aux formulations des mails. Un ton trop familier, des
          fautes d’orthographe ou des phrases mal formulées sont des indices qui
          doivent vous alerter.
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
@import "@/scss/game/_game.scss";
.position8-1 {
  top: 10rem;
  left: 23rem;
}
.position8-2 {
  top: 4rem;
  left: 4rem;
}

.position8-3 {
  top: 27.5rem;
left: 59rem;
}
.position8-4 {
  top: 51rem;
left: 44rem;
}
.position8-5 {
 top: 43rem;
left: 10rem;
}
</style>
