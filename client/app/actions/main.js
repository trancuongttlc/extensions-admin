import localStorage from 'store';
import {ActionTypes, EVENT} from '../core';
import * as api from '../api';

export function getListFile() {
    return (dispatch) => {   
        api.getListFile().then((result) => {
            dispatch({
                type: ActionTypes.USER_GET_PROFILE_SUCCESS,
                result
            });
        });
    };
}

export function login(data) {
    return (dispatch) => {
        api.login(data).then((result) => {
            localStorage.set('viewer', result);
            dispatch({
                type: ActionTypes.USER_LOGIN_SUCCESS,
                viewer: result
            });
        }).catch(error => {
            dispatch({
                type: ActionTypes.USER_LOGIN_FAILED,
                error
            });
            signal.trigger(EVENT.USER_LOGIN_FAILED, error);
        });
    };
}