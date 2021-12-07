import React from 'react';
import useStyle from "../styles";
import {Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from "@material-ui/core/Typography";
import {setTweetText, updateTweets, useTweetDispatch} from "../../../context/TweetContext";
import {likeRequest} from "../../../api/api-tweet";
import {toast} from "react-toastify";

const Tweet = ({data}) => {
    const classes = useStyle();

    const tweetDispatch = useTweetDispatch();

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color: blue'>$&</a>")};
    }

    const getImage = () => {
        if (data.user.image)
            return data.user.image;
        else return "/images/person.png";
    }

    const handleLikeChange = () => {
        likeRequest(data._id, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            // likeTweet(tweetDispatch, data._id);
            updateTweets(tweetDispatch);
        })
    }

    return (
        <div className={classes.tweet}>
            <Grid container>
                <img src={getImage()} style={{width: 60, height: 60, borderRadius: '50%'}}/>
                <Grid item direction={"column"} style={{flex: 1}}>
                    <Grid item container alignItems={"center"}>
                        <Typography className={classes.tweeterName}>{data.user.name}</Typography>
                        <Typography className={classes.tweeterId}>{data.user.username + '@'}</Typography>
                    </Grid>
                    <Typography className={classes.tweetText}
                                dangerouslySetInnerHTML={renderTweet(data.text)}></Typography>
                    {data.image &&
                    <div>
                        <div style={{backgroundImage: `url(${data.image})`}} className={classes.tweetImg}/>
                    </div>
                    }
                </Grid>
            </Grid>
            <Grid container direction={"row-reverse"} alignItems={"center"} style={{marginTop: '1rem'}}>
                <IconButton className={classes.newTweetImgBtn} onClick={() => setTweetText(tweetDispatch, data.text)}>
                    <img src={"/images/retweet.png"} style={{borderRadius: '50%'}}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn} onClick={handleLikeChange}>
                    <FavoriteIcon/>
                </IconButton>
                <Typography className={classes.likeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    );
};

export default Tweet;