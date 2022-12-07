import { 
    LOADING_USER_DETAILS, 
    LOAD_USER_DETAILS_SUCCESS,  
    LOAD_USER_DETAILS_FAILURE
} from './user.type';
import USER_API from 'apis/userAPI';
// import TOKEN_API from 'api/TOKEN_API';
// import HELPERS from 'utils/helpers';


export const loadingUserDetails = () => {
    return {
        type: LOADING_USER_DETAILS,
    }
}

export const loadUserDetailsSuccess = user => {
    return {
        type: LOAD_USER_DETAILS_SUCCESS,
        response: user.data,
    }
}

export const loadUserDetailsFailure = error => {
    return {
        type: LOAD_USER_DETAILS_FAILURE,
        response: error.message
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch(loadingUserDetails)
        return USER_API.getUserDetails()
                .then(response => {
                    const user = response
                    dispatch(loadUserDetailsSuccess(user))
                    return user
                })
                .catch(error => {
                    const err = error
                    dispatch(loadUserDetailsFailure(err))
                    return err
                })
    }
}
