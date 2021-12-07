import React from "react";
import {getHashtags, loadTweets} from "../api/api-tweet";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function tweetReducer(state, action) {
    switch (action.type) {
        case "SET_TWEET_TEXT":
            return {...state, tweetText: action.payload};
        case "SET_TWEET_LIST":
            return {...state, tweetList: action.payload};
        case "LIKE_TWEET":
            // const tweetId = action.payload;
            // const index = state.tweetList.findIndex(item => item._id === tweetId);
            // return {
            //     ...state,
            //     tweetList: [...state.tweetList.slice(0, index), {
            //         ...state.tweetList[index],
            //         likes: state.tweetList[index].likes + 1
            //     }, ...state.tweetList.slice(index + 1)]
            // };
            return {...state, }
        case "UPDATE_TWEETS":
            return {...state, tweetList: action.payload};
        case "SET_HASHTAGS":
            return {...state, hashtags: action.payload};
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function TweetProvider({children}) {
    var [state, dispatch] = React.useReducer(tweetReducer, {
        tweetText: "",
        tweetList: [],
        hashtags: []
    });
    return (
        <TweetStateContext.Provider value={state}>
            <TweetDispatchContext.Provider value={dispatch}>
                {children}
            </TweetDispatchContext.Provider>
        </TweetStateContext.Provider>
    );
}

function useTweetState() {
    var context = React.useContext(TweetStateContext);
    if (context === undefined) {
        throw new Error("useTweetState must be used within a TweetProvider");
    }
    return context;
}

function useTweetDispatch() {
    var context = React.useContext(TweetDispatchContext);
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used within a TweetProvider");
    }
    return context;
}

export {
    TweetProvider,
    useTweetState,
    useTweetDispatch,
    setTweetText,
    setTweetList,
    likeTweet,
    updateTweets,
    setHashtags,
    updateHashtags
};

// ###########################################################
function setTweetText(dispatch, tweet) {
    dispatch({
        type: "SET_TWEET_TEXT",
        payload: tweet
    });
}

function setTweetList(dispatch, list) {
    dispatch({
        type: "SET_TWEET_LIST",
        payload: list
    });
}

function likeTweet(dispatch, id) {
    dispatch({
        type: "LIKE_TWEET",
        payload: id
    });
}

function updateTweets(dispatch) {
    loadTweets((isOk, data) => {
        if (isOk) {
            dispatch({
                type: "SET_TWEET_LIST",
                payload: data
            });
        }
    })
}

function setHashtags(dispatch, list) {
    dispatch({
        type: "SET_HASHTAGS",
        payload: list
    });
}

function updateHashtags(dispatch) {
    getHashtags((isOk, data) => {
        if (isOk) {
            dispatch({
                type: "SET_HASHTAGS",
                payload: data
            });
        }
    })
}