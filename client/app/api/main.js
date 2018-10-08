import request from './request';

export function showAll(params = {}) {
    return request({
        method: 'GET',
        url: "api/showAllFile",
        params
    });
}

export function removeId(_id) {
    return request({
        method: 'DELETE',
        url: `api/remove/${_id}`
    });
}

export function getId(_id) {
    return request({
        method: 'GET',
        url: `api/detailPage/${_id}`
    });
}

export function register(data) {
    return request({
        method: 'POST',
        url: `api/register`,
        data
    });
}

export function login({email, password} = {}) {
    return Promise.resolve().then(() => {
        let message;
        if (!email && !password) {
            message = 'Thiếu tên đăng nhập và mật khẩu';
        } else if (!email) {
            message = 'Thiếu tên đăng nhập';
        } else if (!password) {
            message = 'Thiếu mật khẩu';
        } else {
            return;
        }

        return Promise.reject({
            code: -1,
            message
        });
    }).then(() => {
        return request({
            method: 'POST',
            url:'api/login',
            data: {
                email,
                password
            }
        });
    });  
}