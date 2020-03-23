import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    albumList: [
        {
            title: 'Title Album',
            year: 2008,
            brandCompany: 'MKit Rain',
            songs: [],
        },
        {
            title: 'Title Album 2',
            year: 2018,
            brandCompany: 'Universal',
            songs: [],
        }
    ]
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
