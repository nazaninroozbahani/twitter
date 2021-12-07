import React, {useEffect} from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/TweetList";
import PersonIcon from '@material-ui/icons/Person';
import {useLocation} from 'react-router-dom';
import {loadTweetsByUser} from "../../api/api-tweet";
import {toast} from "react-toastify";
import {setTweetList, useTweetDispatch, useTweetState} from "../../context/TweetContext";
import Typography from "@material-ui/core/Typography";


const TweetsByUser = (props) => {
    const classes = useStyle();

    const {tweetList: tweets} = useTweetState();

    const tweetDispatch = useTweetDispatch();

    const location = useLocation();

    useEffect(() => {
        loadTweetsByUser(props.match.params.id, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            setTweetList(tweetDispatch, data);
        })
    }, [location]);


    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            {
                tweets.length === 0 && <Typography >این کاربر تا کنون هیچ توییتی نداشته است.</Typography>
            }
            <TweetList tweets={tweets}/>
        </div>
    );
}

export default TweetsByUser;