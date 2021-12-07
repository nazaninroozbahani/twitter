import React, {useEffect} from 'react';
import useStyle from './styles.js'
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from "@material-ui/icons/Home";
import {toast} from "react-toastify";
import {loadTweets} from "../../api/api-tweet";
import {setTweetList as setTweets, useTweetDispatch} from "../../context/TweetContext";


const Home = () => {
    const classes = useStyle();

    const tweetDispatcher = useTweetDispatch();

    useEffect(() => {
        loadTweets((isOk, data) => {
            if (!isOk)
                return toast.error(data);
            setTweets(tweetDispatcher, data);
        })
    }, []);

    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet />
            <TweetList />
        </div>
    );
}

export default Home;