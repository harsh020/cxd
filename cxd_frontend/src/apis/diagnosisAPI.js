import HELPERS from 'utils/helpers';

const DIAGNOSIS_API = {
    getDiagnosisDetails: () => {
        return HELPERS.request({
            url: `/diagnosis/details/`,
            method: 'GET',
        })
    },

    createDiagnosis: (data) => {
        return HELPERS.request({
            url: `/diagnosis/create/`,
            method: 'POST',
            data: data,
        })
    }
}

export default DIAGNOSIS_API;
