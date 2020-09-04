
export default{
    namespaced: true,
    state:{
        gameIsStarted:false,
        currentGame:{
            isPhishing:null
        }
    },
    mutations:{
        SET_CURRENT_STATUS_PHISHING(state,isPhishing){
            state.currentGame.isPhishing = isPhishing;
        },
        SET_GAME_STARTED(state){
            state.gameIsStarted = true;
        }
    },
    actions:{
        setCurrentStatus({commit},isPhishing){
            commit('SET_CURRENT_STATUS_PHISHING',isPhishing);
        },
        startGame({commit}){
            commit('SET_GAME_STARTED');
        }
    },   
}