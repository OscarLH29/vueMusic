import axios from 'axios';

const apiGetUser =() => {
    return new Promise( (resolve, reject) => {
        axios.get('https://reqres.in/api/users/')
            .then( (response) => {
                resolve(response);
            })
            .catch( (error) => {
                reject(error);
            })
    });

};

const apiPostUser = (data) => {
    return new Promise(  (resolve, reject) => {
       axios.post('https://reqres.in/api/login', data)
           .then( (response) => {
               resolve(response);
           })
           .catch( (error) => {
               reject(error);
           })
    });
};

//----------------------------------------------------------------------------------------
const baseUrl = 'https://reqres.in';

const getLoggin = (user) => {
    return new Promise( (resolve, reject) => {
        axios.post(`${baseUrl}/api/login`, user)
            .then( (response) => {
                resolve(response);
            })
            .catch( (error) => {
                reject(error);
            })
    })
};

const apiGetUse = (id) => {
    return new Promise( (resolve, reject) => {
        axios.get(`${baseUrl}/api/users/${id}`)
            .then( (response) => {
                resolve(response);
            })
            .catch( (error) => {
                reject(error);
            })
    });

};

const apiDeleteUser = (id) => {
    return new Promise( (resolve, reject) => {
       axios.delete(`${baseUrl}/api/users/${id}`)
           .then( (response) => {
              resolve(response)
           })
           .catch( (error) => {
              reject(error)
           })
    });
};

//----------------------------------------------------------------------------------------
export {
    apiGetUser,
    apiPostUser,


    //---------------
    getLoggin,
    apiGetUse,

    apiDeleteUser
}
