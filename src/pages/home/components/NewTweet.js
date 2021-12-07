import React, {useRef, useState} from 'react';
import useStyle from "../styles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {newTweetRequest} from "../../../api/api-tweet";
import {toast} from "react-toastify";
import {
    setTweetText as setTweet,
    updateHashtags,
    updateTweets,
    useTweetDispatch,
    useTweetState
} from "../../../context/TweetContext";

const NewTweet = () => {
    const classes = useStyle();

    const {tweetText: tweet} = useTweetState();
    const {tweetList} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const inputImg = useRef();

    const onClickBtn = () => {
        if (!tweet)
            return;

        const formData = new FormData();
        formData.append("text", tweet);
        if (imageFile)
            formData.append("image", imageFile);

        newTweetRequest(formData, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            toast.success("توییت شما ارسال شد.");
            setTweet(tweetDispatch, "");
            setImagePath();
            setImageFile();
            updateTweets(tweetDispatch);
            if (tweet.includes("#"))
                updateHashtags(tweetDispatch);
        })
    };

    const getImage = () => {
        if (localStorage.getItem('image') && localStorage.getItem('image') !== 'undefined')
            return localStorage.getItem('image');
        else
            return "/images/person.png";
    };

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} style={{width: 60, height: 60, borderRadius: '50%'}}/>
                <textarea onChange={e => setTweet(tweetDispatch, e.target.value)} placeholder={"توییت کن ..."}
                          className={classes.input}
                          value={tweet}/>
            </Grid>
            {imagePath &&
            <div>
                <div style={{backgroundImage: `url(${imagePath})`}} className={classes.tweetImg}/>
            </div>
            }
            <Grid container direction={"row-reverse"} style={{marginTop: '1rem'}}>
                <Button onClick={onClickBtn} variant={"contained"} color={"primary"}
                        className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn} onClick={() => inputImg.current.click()}>
                    <img src={"/images/tweetpic.png"} style={{borderRadius: '50%'}}/>
                </IconButton>
                <input type={'file'} style={{display: 'none'}} ref={inputImg} onChange={handleImgChange}/>
            </Grid>
        </div>
    );
};

export default NewTweet;