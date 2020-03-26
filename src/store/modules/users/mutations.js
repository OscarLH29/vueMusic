const GET_USERS = (state, user) => {
    state.userList = user;
};

const POST_USERS = (state, newUser) => {
    state.login = newUser;
};

const GET_LOGIN = (state, res) => {
    state.login = res;
};

export default {
    GET_USERS,
    POST_USERS,
    GET_LOGIN
}
