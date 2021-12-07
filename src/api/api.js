import Axios from 'axios'

export const getAxiosInstanceJsonServer = () => {

    return Axios.create({
        baseURL: "http://localhost:3001/",
        headers: {
            //API_KEY: "hggkjdffjkllhfdswdfhjlliutewsdfhllhy"
        }
    });
};

export const getAxiosInstanceAuth = () => {

    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            //API_KEY: "hggkjdffjkllhfdswdfhjlliutewsdfhllhy"
        }
    });
};

export const getAxiosInstanceApi = () => {

    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            'x-auth-token' : localStorage.getItem('x-auth-token')
        }
    });
};
