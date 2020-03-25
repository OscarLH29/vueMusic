//
import {apiGetUser} from "../../../api/test";

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


export default {
    getUsers,
}
