const addAlbum = (context, album) => {
    context.commit('ADD_ALBUM', album)
};

export default {
    addAlbum
}
