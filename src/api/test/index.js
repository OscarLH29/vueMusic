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

export {
    apiGetUser
}
