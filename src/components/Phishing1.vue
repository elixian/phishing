<template>
<div>
  <div class="phishing--tile">
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
															<td style="padding-top:20px"><span style="font-size:15px;font-family:Arial,Verdana;color:#000000"><b style="color:#e1372b">URGENT :</b> Le r&eacute;glement pour la facture N&deg;461643726, d&#39;un montant de 377,54&euro; TTC ne nous est toujours pas parvenu.</span></td>
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
									<td align="center" style="padding-bottom:15px"><span style="font-size:13px;font-family:Arial,Verdana;color:#323232"><b>Malgré plusieurs relances de notre part, nous n&#39;avons toujours pas re&ccedil;u le paiement. Pour mettre fin &agrave; ce contentieux, nous vous recommandons vivement de r&eacute;gler votre d&ucirc; en cliquant sur le lien ci-dessous</b><br />
									<br />
									<div class="modal-feedback" >
									<span class="modal-feedback_error"> ici on explique le pourquoi </span>
									<a href="" rel="noreferrer" style="font-size:20px" target="_blank"><b><u> Cliquez ici pour régler votre facture </u></b></a></div><b><u> </u></b> </span><br />
									&nbsp;</td>
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
			<td align="center" style="padding-bottom:15px"><span style="font-size:13px;font-family:Arial,Verdana;color:#323232"><b>A d&eacute;faut de r&eacute;glement de votre part dans les 8 jours, nous nous verrons dans l&#39;obligation de poursuivre ce recouvrement par voie judiciaire.</b></span></td>
		</tr>
		<tr>
			<td>
			<center><a href="" rel="noreferrer" target="_blank"><img alt="VANC" border="0" height="20%" src="https://zupimages.net/up/20/17/x7d0.png" style="display:block" width="20%" /></a></center>
			</td>
		</tr>
	</tbody>
</table>
</div>
<!-- <div v-if="!error" class="feedback">
	<h1>A retenir</h1>
</div> -->
</div>
</template>

<script>

export default {
	props:['error'],

	mounted(){
		this.$store.state.isPhishing = true;
		
	}
}
</script>


<style lang="scss" >

</style>
