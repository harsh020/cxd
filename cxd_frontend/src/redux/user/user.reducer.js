import { 
    LOADING_USER_DETAILS, 
    LOAD_USER_DETAILS_SUCCESS,  
    LOAD_USER_DETAILS_FAILURE
} from './user.type'


const initialState = {
    loading: false,
    data: {},
    error: '',
}

const USER_REDUCER = (state=initialState, action) => {
    switch (action.type) {
        case LOADING_USER_DETAILS:
            return {
                ...state,
                loading: true,
            }
        case LOAD_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {...action.response},
            }
        case LOAD_USER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {...action.response},
            }
        default:
            return state;
    }
}

export default USER_REDUCER;