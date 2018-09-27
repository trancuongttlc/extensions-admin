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