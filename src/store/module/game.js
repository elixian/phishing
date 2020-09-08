
export default{
    namespaced: true,
    state:{
        gameIsStarted:false,
        currentGame:{
            isPhishing:null,
            showSpot:true, //TODO
        }
    },
    mutations:{
        SET_CURRENT_STATUS_PHISHING(state,isPhishing){
            state.currentGame.isPhishing = isPhishing;
        },
        SET_GAME_STARTED(state){
            state.gameIsStarted = true;
        },
        TOGGLE_SHOW_SPOT(state,payload){
            state.currentGame.showSpot = payload
        }
    },
    actions:{
        setCurrentStatus({commit},isPhishing){
            commit('SET_CURRENT_STATUS_PHISHING',isPhishing);
        },
        startGame({commit}){
            commit('SET_GAME_STARTED');
        },
        setShowSpot({commit},isVisible){
            commit('TOGGLE_SHOW_SPOT', isVisible);
        }
    },   
}