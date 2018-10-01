// import {ActionTypes} from '../type';
const initialState = {
    viewer: null
};


export default function(state = initialState, action) {
    return state
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return loginSuccess(state, action)
        case "USER_LOGIN_FAILED":
            return loginFailed(state, action);
        case "USER_LOGOUT":
            return logout(state, action);
        default:
            return state;
    }
}

function loginSuccess(state, action) {
    const {viewer} = action;
    return {
        ...state,
        viewer
    };
}

function loginFailed(state) {
    return {
        ...state
    }
}

function logout(state) {
    return {
        ...state,
        viewer: null
    }
}
