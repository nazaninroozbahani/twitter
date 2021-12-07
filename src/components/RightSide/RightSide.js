import React, {useEffect} from 'react';
import useStyle from './styles.js'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {getHashtags} from "../../api/api-tweet";
import {toast} from "react-toastify";
import {setHashtags, useTweetDispatch, useTweetState} from "../../context/TweetContext";

const RightSide = () => {
    const classes = useStyle();

    const {hashtags} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    useEffect(() => {
        getHashtags((isOk,data) => {
            if(!isOk)
                return toast.error("ناموفق در گرفتن هشتگ ها");
            setHashtags(tweetDispatch,data);
        })
    }, []);


    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={'center !important'}>
                    <Grid item>
                        <img src={"/images/logo.png"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} style={{marginBottom : '5rem'}}>
                {
                    hashtags.map(item => (
                        <ButtonBase className={classes.hashtagParent} >
                            <Link to={"/hashtags/" + item.text} style={{width: '100%'}}>
                                <Grid item container alignItems={'center'}>
                                    <img src={"/images/hashtag.png"}/>
                                    <Typography className={classes.hashtag}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>
                    ))
                }

            </Grid>
        </div>
    );
}

export default RightSide;