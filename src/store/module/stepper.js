
export default {
    namespaced: true,
    state:{
        totalSteps: 5,
        activePage:1
    },
    getters:{
        isLastPage(state){
            return state.totalSteps === state.activePage;
        }
    },
    mutations:{
        SET_ACTIVE_PAGE(state){
            state.activePage = state.activePage + 1; 
        }
    },
    actions:{
        incrementStepper({commit}){
            commit('SET_ACTIVE_PAGE');
        }
    }
}