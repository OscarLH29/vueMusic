import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    title: null,
    year: null,
    brandCompany: null,
    songs: [],
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}