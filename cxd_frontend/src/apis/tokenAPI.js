import HELPERS from 'utils/helpers';

const TOKEN_API = {
    getTokens: (data) => {
        return HELPERS.request({
            url: `/api/token/`,
            method: 'POST',
            data: data, 
        })
    },

    refreshToken: (refresh_token) => {
        return HELPERS.request({
            url: `/api/token/refresh/`,
            method: 'POST',
            data: {refresh: refresh_token},
        })
    },
}

export default TOKEN_API;