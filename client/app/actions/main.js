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
