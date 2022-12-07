import { message } from 'antd';
import * as tf from '@tensorflow/tfjs';

import axios from 'axios';
import Cookies from 'js-cookie';

import TOKEN_API from 'apis/tokenAPI';

axios.defaults.baseURL = '/';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';

axios.interceptors.request.use(config => {
    const token = HELPERS.localStorageServices.getAccessToken();
    if(token) {
        config.headers = {
            'Authorization': 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'
        }
    }
    return config;
    },
    error => {
        return error.response;
});

axios.interceptors.response.use(response => {
    return response;
},
function(error) {
    const originalRequest = error.config;
    console.log(originalRequest);
    if(error.response.status === 401 && 
       originalRequest.url == "/api/token/refresh/") {
        return error
    }
    if(error.response.status === 401 && !error.config.__isRetryRequest ) {
        originalRequest._retry = true;
        const refresh_token = HELPERS.localStorageServices.getRefreshToken()
        HELPERS.localStorageServices.clearData('access_token');
        return TOKEN_API.refreshToken(refresh_token)
        .then(res => {
            if(res.status === 200) {
                HELPERS.localStorageServices.storeTokens(res.data)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + HELPERS.localStorageServices.getAccessToken();
                // HELPERS.request(originalRequest)
                return axios(originalRequest)
            }
        })
    }
    return error;
});

let HELPERS = {
    isLoggedIn: () => {
        return localStorage.getItem('isLoggedIn');
    },

    request: config => {
        console.log(config);
        return axios.request(config)
            .then(response => {
                console.log(response);
                return response
            })
            .catch(error => {
                return error
            })
    },

    localStorageServices: {
        storeTokens: (tokens) => {
            if(tokens['access']) {
                localStorage.setItem("access_token", tokens["access"]);
            }
            if(tokens['refresh']) {
                localStorage.setItem("refresh_token", tokens["refresh"]);
            }
        },
    
        getAccessToken: () => {
            return localStorage.getItem("access_token");
        },
    
        getRefreshToken: () => {
            return localStorage.getItem("refresh_token");
        },

        clearToken: () => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        },

        storeData: (key, value, json=true) => {
            if (json) {
                localStorage.setItem(key, JSON.stringify(value));
            }
            else {
                localStorage.setItem(key, value);
            }
        },

        getData: (key, json=true) => {
            if (json) {
                return JSON.parse(localStorage.getItem(key));
            }
            return localStorage.getItem(key);
        },

        clearData: (key) => {
            localStorage.removeItem(key);
        }
    },

    image: {
        getBase64: (buff, callback) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result));
            reader.readAsDataURL(buff);
          },

        checkFormat: file => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        },

        dataURL2Tensor: (dataURL) => {
            return new Promise((resolve, reject) => {    
                const img = new Image();    
                img.src = dataURL;    
                img.onload = () => {
                    resolve(tf.browser.fromPixels(img));
                }    
                img.onerror = (err) => {
                    reject(err);
                }  
            });
        }
    }
}

export default HELPERS;