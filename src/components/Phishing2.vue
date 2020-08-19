<template>
<div>
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
															<td style="padding-top:20px"><span style="font-size:15px;font-family:Arial,Verdana;color:#000000">Bonjour ,<br />
															<br />
															F&eacute;licitation Vous &ecirc;tes l&#39;heureux gagnant d&#39;un <b>IPHONE 11.</b></span></td>
														</tr>
														<tr>
															<td style="min-width:580px" width="580">
															<center><a href="" rel="noreferrer" target="_blank"><img alt="Amazon" border="0" height="137" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704" style="display:block" width="114" /></a></center>
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
									<div class="modal-feedback">
										<span class="modal-feedback_error"> ici on explique le pourquoi </span>		
									<a class="focus-error" href="http://grossearnarque.com" rel="noreferrer" style="font-size:20px" target="_blank"><b><u>&gt;&gt;&gt; Je clique et je re&ccedil;ois mon lot &lt;&lt;&lt; </u></b></a>
									</div>
									<b><u> </u></b> </span></td>
									
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
</template>

<script>
export default {
	props:["error"],
	mounted(){
	
			this.$store.state.isPhishing = false
			console.log('number 2',this.$store.state.isPhishing)
	}
}
</script>


<style scoped>

</style>
