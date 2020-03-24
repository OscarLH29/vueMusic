const getArtists = (context) => {
    context.commit('GET_ARTISTS');
};

const addArtist = (context, artist) => {
    context.commit('ADD_ARTIST', artist)
};

const updateArtist = (context, artist) => {
    context.commit('UPDATE_ARTIST', artist);
};

const deleteArtist = (context, id) => {
    context.commit('DELETE_ARTIST', id);
};

export default {
    getArtists,
    addArtist,
    updateArtist,
    deleteArtist
}
