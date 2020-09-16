<template>
  <div class="wrapper--img">
    <div class="object">
      Tirage au sort N° 462845712345846: Lot IPHONE 11
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">N</span>
        <span class="mail ">
          Notifications <span class="tips-2">&lt;amazon@amaz0ne.eu
          &gt;</span></span
        >
        <img
          class="buttons-mail"
          src="@/assets/images/game/buttons-mail.png"
          alt=""
        />
      </div>
      <div>
<center>
<table border="0" cellpadding="0" cellspacing="0" width="603">
	<tbody>
		<tr>
		</tr>
		<tr>
			<td style="min-width:580px" width="580">
			<center><a @click.prevent title="https://www.amaz0ne.eu?rid=azoiufkj" href="https://www.amaz0ne.eu?rid=azoiufkj" rel="noreferrer" target="_blank"><img alt="Amazon" border="0" height="150" src="https://stock.microsoft-online.fr/images/o365/logo_gif_amazone.gif" style="display:block" width="500" /></a></center>
			</td>
		</tr>
	</tbody>
</table>
</center>
</div>

<table border="0" cellpadding="0" cellspacing="0" style="background-color:#ffffff" width="100%">
	<tbody>
		<tr>
			<td align="center" style="padding-top:0px" valign="top">
			<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="600">
				<tbody>
					<tr>
						<td bgcolor="#EEEEEE">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
							<tbody>
								<tr>
									<td style="padding:10px 20px">
									<table border="0" cellpadding="0" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td style="padding-top:10px" valign="top" width="460">
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tbody>
														<tr>
															<td style="padding-top:20px"><span style="font-size:15px;font-family:Arial,Verdana;color:#000000">Bonjour Franck,<br />
															<br />
															<span class="tips-1"> F&eacute;licitation Vous &ecirc;tes l&#39;heureux gagnant d&#39;un <b>IPHONE 11</b>.</span></span></td>
														</tr>
														<tr>
															<td style="min-width:580px" width="580">
															<center><a @click.prevent href="https://www.amaz0ne.eu?rid=azoiufkj" title="https://www.amaz0ne.eu?rid=azoiufkj" rel="noreferrer" target="_blank"><img alt="Amazon" border="0" height="137" src="https://stock.microsoft-online.fr/images/o365/logo_iphone.jpg" width="114" /></a></center>
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
									<td align="center" style="padding-bottom:15px"><span style="font-size:13px;font-family:Arial,Verdana;color:#323232"><b style="color:#e1372b">IMPORTANT :</b> <b>Pour recevoir votre lot, cliquez ci-dessous et compl&eacute;ter les informations demand&eacute;es </b><br />
									<br />
									<a class="tips-2" @click.prevent title="https://www.amaz0ne.eu?rid=azoiufkj" href="https://www.amaz0ne.eu?rid=azoiufkj" rel="noreferrer" style="font-size:20px" target="_blank"><b><u>&gt;&gt;&gt; Je clique et je re&ccedil;ois mon lot &lt;&lt;&lt; </u></b></a><b><u> </u></b> </span></td>
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
			<td align="center" height="49" style="min-width:580px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#999999;vertical-align:middle">Tirage au sort effectu&eacute; sous contr&ocirc;le d&#39;huissier.<br />
			Amazon.fr n&#39;est ni partenaire ni l&#39;organisateur de cette op&eacute;ration. Images non contractuelles.</td>
		</tr>
	</tbody>
</table>
    </div>
    <template v-if="currentGame.showSpot ">
     <Tooltip
        infoOverlay="overlay5-1"
        positionSpot="position5-1"
        spot-darken="true"
      >
        <template v-slot:textinfo>
          Un principe, général,
          <span class="emphasis"
            >méfiez-vous des services/documents gratuits</span
          >. A minima l’objectif est de récupérer votre adresse mail afin de
          vous envoyer des publicités. Qui plus est sur des sujets accrocheurs
          en lien avec l’actualité (contexte sanitaire, politique, soldes,
          périodes particulières..). Dans le cas présent rare sont les cas où un
          smartphone à près de 1000€ est offert gratuitement et de manière
          totalement aléatoire.
        </template>
      </Tooltip>
      <Tooltip infoOverlay="overlay5-2" positionSpot="position5-2"  spot-darken="true">
        <template v-slot:textinfo>
          L’adresse d’envoi et l’URL de redirection ressemble fortement à celle
          d’amazon, cependant en lieu et place du
          <span class="emphasis">&laquo;o&raquo;</span>, a été mise le chiffre
          <span class="emphasis">&laquo;0&raquo;</span>. Il s’agit d’une
          nouvelle pratique assez répandue pour faire croire à un site légitime.
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
a {
  color: #0072bc;
  text-decoration: none;
}
.position5-1 {
  top: 39.9rem;
  left: 32rem;
}
.position5-2 {
  top: 11rem;
  left: 22rem;
}

</style>
