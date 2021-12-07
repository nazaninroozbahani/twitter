import {getAxiosInstanceApi, getAxiosInstanceAuth} from "./api";

export const loginApi = (user,callback) => {
    getAxiosInstanceAuth().post("login",user)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error.response.data.message);
        });
};

export const registerApi = (user,callback) => {
    getAxiosInstanceAuth().post("register",user)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error.response.data.message);
        });
};

export const uploadUserPhoto = (photo,callback) => {
    getAxiosInstanceApi().post("uploadUserPhoto",photo)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error.response.data.message);
        });
};

export const getProfile = (callback) => {
    getAxiosInstanceApi().get("getProfile")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error.response.data.message);
        });
};

