import { GET_OTP_FAIL, GET_OTP_REQUEST, GET_OTP_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }

}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}


export const generateOtpReducer=(state = {message:{}},action)=>{
    switch (action.type) {
        case GET_OTP_REQUEST:
            return { loading: true };
        case GET_OTP_SUCCESS:
            return { loading: false, message: action.payload };
        case GET_OTP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_REQUEST:
            return { loading: true };
        case UPDATE_SUCCESS:
            return { loading: false, success: true };
        case UPDATE_FAIL:
            return { loading: false, error: action.payload };
       
        default:
            return state;
    }
}
