import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

export const openRegister = () => {
    return {
        type: actionTypes.OPEN_REGISTER
    }
}

export const registerSuccess = (userId) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        userId: userId
    }
}

export const registerFail = (err) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        err: err
    }
}

export const signUp = (name, username, email, password, phone, consumerType, push) => {
    console.log(push);
    return dispatch => {
        const userForm = {
            name: name,
            username: username,
            email: email,
            password: password,
            phone: phone,
            consumerType: consumerType
		}
        
		axios.post("http://localhost:5000/auth/signup/",userForm)
        .then(res => {
			if (res.status === 422) {
				throw new Error(
					"Validation failed. Make sure the email address isn't used yet!"
				);		
            }
            dispatch(registerSuccess());
        })
        .catch(err => {
            dispatch(registerFail(err.response.data.data[0].msg));
        })
    }
}