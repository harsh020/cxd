import HELPERS from 'utils/helpers';

const USER_API = {
    getUserDetails: () => {
        return HELPERS.request({
            url: `/users/details/`,
            method: 'GET',
        })
    },

    createUser: (data) => {
        return HELPERS.request({
            url: `/users/create/`,
            method: 'POST',
            data: data,
        })
    }
}

export default USER_API;
