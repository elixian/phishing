<template>
  <div class="wrapper--img">
    <div class="object">
      L'administrateur a répondu à votre demande !
    </div>

    <div class="mail-wrapper">
      <div class="exp-info">
        <span class="accro">NO</span>
        <div>
        <span class="mail">
          Notifications Office &lt;notifications@crosoft.online
          &gt;</span
        >
        <div class="time-zone">le 01/02/2020 à 17:05</div>
        </div>
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
      <div class="wrapper--tooltip positionSpot" v-if="!understood">
        <div class="tooltip--info_start" role="tooltip">
          <p>
            Découvrez les indices en cliquant sur les points bleus.
          </p>
          <button class="validationInfo_start" @mouseup="hideInfo">
            Compris
          </button>
      </div>
    </div>
      <Tooltip
        infoOverlay="overlay2"
        positionSpot="position2-1"
        spot-darken="true"
        :inactive="understood"
      >
        <template v-slot:textinfo>
          L’aspect confidentiel de l’accès doit attirer votre attention. Est-ce
          qu’on ne cherche pas à me faire cliquer rapidement?
        </template>
      </Tooltip>
      <template v-if="understood">
  
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
  data(){
    return{
      understood : false
    }
  },
  computed: {
    ...mapState("game", ["currentGame"]),
  },
  methods: {
    ...mapActions("game", ["setCurrentStatus"]),
    hideInfo(){
        this.understood= true;
    },
    handler(event){
      if(!this.understood){
          event.stopPropagation();
      }  
      
    }
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

.wrapper--tooltip {
  position: absolute;
  z-index: 10;
  height: 0;// hide wrapper
}
.validationInfo_start {
  display: block;
  border: none;
  outline: none;
  background: $primary-color;
  color: #fff;
  border-radius: 6px;
  height: 24px;
  width: 74px;
  margin: 0 auto;
  cursor: pointer;
}
.tooltip--info_start {
  display: block;
  border-radius: 6px;
  opacity: 0;
  position: relative;
  width: 230px;
  background: white;
  border:1px solid $primary-color;
  left: 216%;
  bottom:211px;
  font-size: $f-S;
  line-height: 1.5 * $f-S;
  padding-bottom: 1.5rem;
  animation: fadeIn 0.5s 1.2s ease-in-out forwards;
  text-align: center;
  &::before {
    
    left: 50%;
    top:100%;
    content: " ";
    height: 15px;
    width: 15px;
    position: absolute;
    pointer-events: none;
    border:inherit;
    border-right-width: 0;
border-bottom-width:0 ;
    background: #fff;
    border-top-left-radius: 3px;
    transform: translate(-50%,-50%) rotate(225deg);
    transform-origin: center center;
  }
  p {
    padding-top: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
}

@keyframes fadeIn{
  100%{
    opacity: 1;
    transform: translateY(-25px);
  }
}
</style>
