const addArtist = (context, artist) => {
    context.commit('ADD_ARTIST', artist)
};

export default {
    addArtist
}
