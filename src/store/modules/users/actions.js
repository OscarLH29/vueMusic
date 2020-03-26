//
import {apiGetUser} from "../../../api/test";
import {apiPostUser} from "../../../api/test";

const getUsers = (context) => {
    apiGetUser()
        .then( (response) => {
            console.log(response.data.data);
            context.commit('GET_USERS', response.data.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    ;
};

//

const postUser = (context, user) => {
    apiPostUser(user)
        .then( (response) => {
            context.commit('POST_USERS', response);
        })
        .catch( (error) => {
            console.log(error);
        })

};

const getResponse = (context) => {
    context.commit('GET_LOGIN');
};


export default {
    getUsers,
    postUser,
    getResponse
}
