const GET_ARTISTS = (state) => {
    state.artistList = [];
    let newArtists = [
        {
            id: 1,
            name: 'Loopy',
            country: 'Korea',
            age: 32
        },
        {
            id: 2,
            name: 'Azcino',
            country: 'México',
            age: 28
        },
        {
            id: 3,
            name: 'Nach',
            country: 'Spain',
            age: 45
        },
    ];
    state.artistList = newArtists;
};

const ADD_ARTIST = (state, artist) => {
    let totalItems = state.artistList.length;
    artist.id = totalItems + 1;
    state.artistList.push(artist);
};

const UPDATE_ARTIST = (state, artist) => {
    let indexArtist = state.artistList.findIndex( (foundArtist) => foundArtist.id === artist.id );
    state.artistList[indexArtist].name = artist.name ;
    state.artistList[indexArtist].country = artist.country ;
    state.artistList[indexArtist].age = artist.age ;

};

const DELETE_ARTIST = (state, id) => {
    let indexArtist = state.artistList.findIndex( (foundArtist) => foundArtist.id === id );
    state.artistList.splice(indexArtist, 1);
};

export default {
    GET_ARTISTS,
    ADD_ARTIST,
    UPDATE_ARTIST,
    DELETE_ARTIST
}
