//
import {apiGetIP} from "@/api/utilities";

const getIP = (context) => {
    apiGetIP()
        .then( (response) => {
            context.commit('GET_IP', response.data.ip);
        })
        .catch( (error) => {
            console.log(error);
        })
    ;
};

//
const getAlbums = (context) => {
    context.commit('GET_ALBUMS');
};

const addAlbum = (context, album) => {
    context.commit('ADD_ALBUM', album);
};

const updateAlbum = (context, album) => {
    context.commit('UPDATE_ALBUM', album);
};

const deleteAlbum = (context, id) => {
    context.commit('DELETE_ALBUM', id);
};

export default {
    getAlbums,
    addAlbum,
    updateAlbum,
    deleteAlbum,


    getIP
}
