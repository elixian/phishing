<template>
  <div class="wrapper--img">
    <div class="object">
      <span class="tips-1">*SPAM*</span>: Le dossier Coronavirus de l'Assurance Maladie
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">NA</span>
        <span class="mail ">
          News Assurance Maladie 
          <span
            >&lt;<span class="tips-2">infos@covid-maladie.online</span
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
        <table border="0" cellpadding="0" cellspacing="0" width="603">
          <tbody>
            <tr></tr>
            <tr>
              <td>
                
                  <a @click.prevent href="https://www.covid-maladie.online?rid=sqlkjqsf" title="https://www.covid-maladie.online?rid=sqlkjqsf" rel="noreferrer" target="_blank"
                    ><img
                      alt="VANC"
                      border="0"
                      src="https://stock.microsoft-online.fr/images/o365/logo_am.png"
                      style="display:block"/></a
                >
              </td>
              <td style="padding-top:20px">
                <span
                  style="font-size:30px;font-family:Arial,Verdana;color:#000000"
                  ><b>Le Dossier Coronavirus</b></span
                >
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </center>

      &nbsp;

      <table
      class="tips-3"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="background-color:#ffffff; margin-top:20px;"
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
                                                >L&#39;assurance maladie vous
                                                propose de
                                                t&eacute;l&eacute;charger son
                                                livre blanc sur le coronavirus.
                                                Les chiffres, les
                                                derni&egrave;res informations,
                                                les derni&egrave;res mesures de
                                                protection sont
                                                pr&eacute;sent&eacute;es.</span
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
                                  >Ne tardez pas et inscrivez vous afin de
                                  t&eacute;l&eacute;charger le dossier complet
                                  GRATUIT!!!</b
                                ><br />
                                <br />
                                <a
                                class="tips-2"
                                @click.prevent
                                  href="https://www.covid-maladie.online?rid=sqlkjqsf"
                                  title="https://www.covid-maladie.online?rid=sqlkjqsf"
                                  rel="noreferrer"
                                  style="font-size:20px"
                                  target="_blank"
                                  ><b
                                    ><u
                                      >Je t&eacute;l&eacute;charge mon livre
                                      blanc gratuitement</u
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
        </tbody>
      </table>
    </div>
    <template v-if="currentGame.showSpot">
      <Tooltip infoOverlay="overlay7-1" positionSpot="position7-1" spot-darken="true">
        <template v-slot:textinfo>
          Lorsque les équipements de sécurité ont un doute sur un mail,
          <span class="emphasis"
            >le &laquo;TAG&raquo; SPAM est ajouté en objet du mail</span
          >. Par principe il est fort probable que le mail soit effectivement un
          SPAM.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay7-2" positionSpot="position7-2" spot-darken="true">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection sont cohérentes cependant on
          remarque qu’il s’agit d’un domaine en
          <code class="emphasis">.online</code> . Les services légitimes sont
          généralement hébergés sur des domaines en
          <code class="emphasis">.fr</code> ou en
          <code class="emphasis">.com</code> (pour l’aspect international). Si
          vous voyez un domaine d’émission un peu particulier, même si ce n’est
          pas un critère discriminant, cela doit attirer votre attention.
        </template>
      </Tooltip>
      <Tooltip
        infoOverlay="overlay7-3"
        positionSpot="position7-3"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Un principe, général,
          <span class="emphasis"
            >méfiez-vous des services/documents gratuits</span
          >. A minima l’objectif est de récupérer votre adresse mail afin de
          vous envoyer des publicités. Qui plus est sur des sujets accrocheurs
          en lien avec l’actualité (contexte sanitaire, politique, soldes,
          périodes particulières..)
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

.position7-1 {
  top: 3rem;
  left: 2rem;
}
.position7-2 {
  top: 40rem;
  left: 30rem;
}
.position7-3 {
  top: 41rem;
left: 43rem;
}
</style>
