import {apiGetUser, apiGetUse, apiDeleteUser} from "../../../api/test";
import {apiPostUser, getLoggin} from "../../../api/test";
//----------------------------------------------------------------

//----------------------------------------------------------------

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

// esta yo la hice :v

const postUser = (context, user) => {
    apiPostUser(user)
        .then( (response) => {
            context.commit('POST_USERS', response);
        })
        .catch( (error) => {
            console.log(error);
        })

};

// ------------------------------------------------------------------------------------
const updateIsLoading = (context) =>{
    context.commit('UPDATE_IS_LOADING')
};

//const getLogin = (context, user) => {
//    getLoggin(user)
//        .then( () => {
//            context.commit('UPDATE_IS_LOADING');
//        })
//        .catch( (error) => {
//            console.log(error)
//        })
//};

const getLogin = (context, user) => {
    return new Promise( (resolve, reject) => {
         getLoggin(user)
             .then( (response) => {
                 resolve(response)
             }).catch( (error) => {
                 reject(error)
             })
    })
};

const getUser = (context, id) => {
    return new Promise((resolve, reject) => {
        apiGetUse(id)
            .then( (response) => {
                console.log('1',response.data.data);
                context.commit('GET_USER', response.data.data);
                resolve();
            })
            .catch( (error) => {
                console.log(error);
                reject()
            })
        ;
    });


};


const deleteUser = (context, id) => {
    return new Promise( (resolve, reject) => {
        apiDeleteUser(id)
            .then( (response) => {
                context.commit('DELETE_USER', response.status);
                resolve()
            })
            .catch( () => {
                reject()
            })
    });
};




// ------ ------------------------------------------------------------------------------

export default {
    getUsers,
    postUser,

    //
    updateIsLoading,
    getLogin,
    getUser,

    deleteUser

}
