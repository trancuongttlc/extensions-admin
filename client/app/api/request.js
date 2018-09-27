
import axios from 'axios';

let debug;

let headers = {};

let baseURL = "http://localhost:3000/";

// if (process.env.NODE_ENV === 'localhost') {
//     baseURL = 'http://localhost:3000/';
// }else if (process.env.NODE_ENV === 'production') {
//     baseURL = 'http://exam.ceosoftware.vn:3000/'
// }


export default function (options) {
    if (debug) {
        options.params = options.params || {};
        options.params.debug = true;
    }

    return new Promise((resolve, reject) => {
        axios({
            ...options,
            headers,
            baseURL
        }).then(({data}) => {
            if (data.error) {
                reject(data.error);
                return;
            }

            resolve(data);
        }).catch((error) => {
            let {response} = error;

            if (response && response.data && response.data.error) {
                reject(response.data.error);
                return;
            }

            reject({
                code: 0,
                message: 'Có lỗi xảy ra, bạn vui lòng thử lại'
            });
        });
    });
	
}

window.setDebugApi = function(enable) {
    debug = !!enable;
};