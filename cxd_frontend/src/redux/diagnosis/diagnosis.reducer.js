import { 
    LOADING_DIAGNOSIS_RESULTS, 
    LOAD_DIAGNOSIS_RESULTS_SUCCESS,  
    LOAD_DIAGNOSIS_RESULTS_FAILURE
} from './diagnosis.type'

import HELPERS from 'utils/helpers';

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const DIAGNOSIS_REDUCER = (state=initialState, action) => {
    switch (action.type) {
        case LOADING_DIAGNOSIS_RESULTS:
            return {
                ...state,
                loading: true,
            }
        case LOAD_DIAGNOSIS_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.response,
            }
        case LOAD_DIAGNOSIS_RESULTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.response,
            }
        default:
            return state;
    }
}

export default DIAGNOSIS_REDUCER;