import React, {useEffect} from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/TweetList";
import {loadTweetsByHashtag} from "../../api/api-tweet";
import {toast} from "react-toastify";
import {setTweetList, useTweetDispatch, useTweetState} from "../../context/TweetContext";
import {useLocation} from 'react-router-dom';

const TweetsByHashtag = (props) => {
    const classes = useStyle();

    const {tweetList : tweets} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    const location = useLocation();

    useEffect(() => {
        loadTweetsByHashtag(props.match.params.hashtag,(isOk,data) => {
            if(!isOk)
                return toast.error(data);
            setTweetList(tweetDispatch,data);
        })
    }, [location]);

    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"}/>}/>
            <Divider className={classes.divider}/>
            <TweetList tweets={tweets}/>
        </div>
    );
}

export default TweetsByHashtag;