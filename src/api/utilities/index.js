import axios from 'axios';

const apiGetIP =() => {
    return new Promise( (resolve, reject) => {
        axios.get('https://jsonip.com/')
            .then( (response) => {
                resolve(response);
            })
            .catch( (error) => {
                reject(error);
            })
    });

};

export {
    apiGetIP
}
