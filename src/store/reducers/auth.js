import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    err: null,
    loading: false,
    redirectPath: '/',
    createdUser: false
};

const registerSucess = (state, action) => {
    return updateObject(state, { err: null, createdUser: true });
}

const registerFail = (state, action) => {
    return updateObject(state, { err: action.err });
}

const openRegister = (state, action) => {
    return updateObject(state, { createdUser: false});
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { redirectPath: action.path })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_SUCCESS: return registerSucess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.SET_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        case actionTypes.OPEN_REGISTER: return openRegister(state, action);
        default: return state;
    }
}

export default reducer;