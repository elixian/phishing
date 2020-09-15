
export default{
    namespaced: true,
    state:{
        gameIsStarted:false,
        gameIsFinished:false,
        currentGame:{
            isPhishing:null,
            showSpot:false, 
        },
        scoring:0
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
        },
        SET_SCORING(state){
            state.scoring ++;
        },
        SET_END_GAME(state){
            state.gameIsFinished=true;
        },
        RESTART_GAME(state){
            state.gameIsFinished= false;
            state.scoring= 0;
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
        },
        setScore({commit}){
            commit('SET_SCORING');
        },
        setEndGame({commit}){
            commit('SET_END_GAME');
        },
        restartGame({commit}){
            commit('RESTART_GAME');
        }
    },   
}