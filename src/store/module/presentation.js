import { gsap} from "gsap";

const state = ()=>({
    overlay:{
        currentOverlay:null,
        infoTooltip: null,
        isOverlay : false,
        tips : null
      }
})

const getters = {
    overlay: state =>{
        return state.overlay.isOverlay;
      }
}
const mutations = {
    TOGGLE_OVERLAY(state){
        state.overlay.isOverlay = !state.overlay.isOverlay;
     },
     SET_OVERLAY(state,overlay){
       state.overlay.currentOverlay = overlay.overlay;
       state.overlay.infoTooltip = overlay.tooltipInfo;
       state.overlay.tips = overlay.tips;
     }
}

const actions = {
    showOverlay({commit,state},payload){
        commit('TOGGLE_OVERLAY');
        commit('SET_OVERLAY',payload);
        const tl = new gsap.timeline();
        tl
          .to(event.target.nextSibling, 0.5, { opacity: 1, display: "block" })
          .to(".spot", 0.8, { visibility: "hidden", opacity:0 }, "-= 0.5")
          .to(state.overlay.currentOverlay, 0.5, { opacity: 1, display: "block" }, "-= .3")
          .to(`.${state.overlay.tips}` ,0.5, { zIndex:300, position: "relative",backgroundColor:"#fff" }, "-= .3");
      },
      hideOverlay({commit,state}){
        
        if(getters.overlay){
          commit('TOGGLE_OVERLAY');
          const tl = new gsap.timeline();
          tl
            .to(state.overlay.infoTooltip,  { opacity: 0, display: "none",duration:0.5 })
            .to(".spot", { visibility: "visible",opacity:1 , duration:0.5 })
            .to(state.overlay.currentOverlay,  { opacity: 0, display: "none",duration:0.5 },"-=1")
            .to(`.${state.overlay.tips}` , {zIndex:0, position: "inherit",backgroundColor:"inherit",duration:0.5 },"-=1");
        }
        
      }
}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }