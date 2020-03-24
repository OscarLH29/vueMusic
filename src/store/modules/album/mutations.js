const GET_ALBUMS = (state) => {
    state.albumList = [];
    let newAlbums = [
        {
            id: 1,
            title: 'Title Album',
            year: 2008,
            brandCompany: 'MKit Rain',
            songs: [],
        },
        {
            id: 2,
            title: 'Title Album 2',
            year: 2018,
            brandCompany: 'Universal',
            songs: [],
        }
    ];
    state.albumList = newAlbums;
};

const ADD_ALBUM = (state, album) => {
    let totalItems = state.albumList.length;
    album.id = totalItems + 1;
    state.albumList.push(album);
};

const UPDATE_ALBUM = (state, album) => {
    let indexAlbum = state.albumList.findIndex( (findAlbum) => findAlbum.id === album.id );
    state.albumList[indexAlbum].title = album.title;
    state.albumList[indexAlbum].year = album.year;
    state.albumList[indexAlbum].brandCompany = album.brandCompany;
};

const DELETE_ALBUM = (state, id) => {
    let indexAlbum = state.albumList.findIndex( (findAlbum) => findAlbum.id === id );
    state.albumList.splice(indexAlbum, 1);
};

const GET_IP = (state, ip) => {
  state.IP = ip;
};

export default {
    GET_ALBUMS,
    ADD_ALBUM,
    UPDATE_ALBUM,
    DELETE_ALBUM,

    GET_IP
}
