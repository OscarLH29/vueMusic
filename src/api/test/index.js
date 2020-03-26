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

const apiPostUser = (json) => {
    return new Promise(  (resolve, reject) => {
       axios.post('https://reqres.in/api/login', json)
           .then( (response) => {
               resolve(response);
           })
           .catch( (error) => {
               console.log('error desde index')
               reject(error);
           })
    });
};

export {
    apiGetUser,
    apiPostUser
}
