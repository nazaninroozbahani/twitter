import React from 'react';
import Tweet from "./Tweet";
import {useTweetState} from "../../../context/TweetContext";

const TweetList = () => {

    const {tweetList : tweets} = useTweetState();

    return (
        <div>
            {
                tweets.map(item => <Tweet data={item} />)
            }
        </div>
    );
};

export default TweetList;