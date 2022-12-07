import { 
    LOADING_DIAGNOSIS_RESULTS, 
    LOAD_DIAGNOSIS_RESULTS_SUCCESS,  
    LOAD_DIAGNOSIS_RESULTS_FAILURE
} from './diagnosis.type'

import DIAGNOSIS_API from 'apis/diagnosisAPI';


export const loadingDiagnosisResults = () => {
    return {
        type: LOADING_DIAGNOSIS_RESULTS,
    }
}

export const loadDiagnosisResultSuccess = result => {
    return {
        type: LOAD_DIAGNOSIS_RESULTS_SUCCESS,
        response: result,
    }
}

export const loadDiagnosisResultFaliure = error => {
    return {
        type: LOAD_DIAGNOSIS_RESULTS_FAILURE,
        response: error.message
    }
}

export const getDiagnosis = () => {
    return (dispatch) => {
        dispatch(loadingDiagnosisResults)
        return DIAGNOSIS_API.getDiagnosisDetails()
                .then(response => {
                    const history = response
                    dispatch(loadDiagnosisResultSuccess(history))
                    return history
                })
                .catch(error => {
                    const err = error
                    dispatch(loadDiagnosisResultFaliure(err))
                    return err
                })
    }
}