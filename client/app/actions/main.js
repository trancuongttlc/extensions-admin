import localStorage from 'store';
// import {ActionTypes} from '../type';
import * as api from '../api';

export function login(data) {
    return (dispatch) => {
        api.login(data).then((result) => {
            localStorage.set('viewer', result);
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                viewer: result
            });
        }).catch(error => {
            dispatch({
                type: "USER_LOGIN_FAILED",
                error
            });
        });
    };
}