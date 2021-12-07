import {getAxiosInstanceApi} from "./api";

export const loadTweets = (callback) => {
    getAxiosInstanceApi().post("getAllTweet")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const loadTweetsByHashtag = (hashTag,callback) => {
    getAxiosInstanceApi().post("getAllTweet",{hashTag})
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            callback(false, error)
        });
}

export const loadTweetsByUser = (user,callback) => {
    getAxiosInstanceApi().post("getAllTweet",{user})
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            callback(false, error)
        });
}

// export const loadTweetsFromJsonServer = (callback) => {
//     getAxiosInstanceJsonServer().get("tweets")
//         .then(response => {
//             const data = response.data;
//             callback(true, data)
//         })
//         .catch(error => {
//             callback(false, error)
//         });
// }

export const getHashtags = (callback) => {
    getAxiosInstanceApi().get("getAllHashTags")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const getUsers = (callback) => {
    getAxiosInstanceApi().get("getAllUser")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const newTweetRequest = (data,callback) => {
    getAxiosInstanceApi().post("newTweet",data)
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}

export const likeRequest = (tweetId,callback) => {
    getAxiosInstanceApi().get(`likeTweet/${tweetId}`)
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}