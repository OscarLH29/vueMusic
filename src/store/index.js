import Vue from 'vue';
import Vuex from 'vuex';

import albumModule from './modules/album';
import artistModule from './modules/artist';
import songModule from './modules/song';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        album: albumModule,
        artist: artistModule,
        song: songModule,
    }
})