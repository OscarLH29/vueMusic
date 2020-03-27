const GET_USERS = (state, user) => {
    state.userList = user;
};

const POST_USERS = (state, newUser) => {
    state.login = newUser;
};

// ---------------------------------------------------------------------
const UPDATE_IS_LOADING = (state) => {
    state.isLoading = !state.isLoading;
};

const GET_USER = (state, user) => {
    state.user = user;
};

const DELETE_USER = (state, user) => {
    state.user = user
};

// ---------------------------------------------------------------------

export default {
    GET_USERS,
    POST_USERS,


    //---------------
    UPDATE_IS_LOADING,
    GET_USER,

    DELETE_USER
}
