
export default {
    namespaced: true,
    state:{
        totalSteps: 10,
        activePage:1
    },
    getters:{
        isLastPage(state){
            return state.totalSteps === state.activePage;
        },
        percentStage(state){
            return (state.activePage * 100) / state.totalSteps;
        }
    },
    mutations:{
        SET_ACTIVE_PAGE(state){
            state.activePage = state.activePage + 1; 
        },
        RESET_PAGE(state){
            state.activePage = 1;
        }
    },
    actions:{
        incrementStepper({commit}){
            commit('SET_ACTIVE_PAGE');
        },
        resetPage({commit}){
            commit('RESET_PAGE');
        }
    }
}