import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    artistList: [
        {
            name: 'Loopy',
            country: 'Korea',
            age: 32
        },
        {
            name: 'Azcino',
            country: 'México',
            age: 28
        },
        {
            name: 'Nach',
            country: 'Spain',
            age: 45
        },
    ]
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
