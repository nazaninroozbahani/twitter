import React, {useEffect, useState} from 'react';
import useStyle from './styles.js'
import RightSide from '../RightSide/RightSide.js'
import LeftSide from '../LeftSide/LeftSide.js'
import Divider from '@material-ui/core/Divider';
import {getProfile} from "../../api/api-auth";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography, useMediaQuery, useTheme} from "@material-ui/core";
import TwitterDrawer from "../drawer/TwitterDrawer";

const Layout = (props) => {
    const classes = useStyle();
    const history = useHistory();

    const [wait, setWait] = useState(true);

    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        getProfile((isOk, data) => {
            if (!isOk) {
                toast.error(data);
                localStorage.clear();
                return history.push("/login");
            }
            setWait(false);
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
        })
    }, []);

    if (wait)
        return <div className={classes.waitParent}>
            <CircularProgress className={"uni_m_b_small"}/>
            <Typography>شکیبا باشید ...</Typography>
        </div>;
    else
        return (
            <div className={classes.root}>
                {isTabletSize ? <TwitterDrawer/> : <RightSide/>}
                <Divider orientation={"vertical"} className={classes.divider}/>
                <div className={classes.content}>
                    {props.children}
                </div>
                <Divider orientation={"vertical"} className={classes.divider}/>
                <LeftSide/>
            </div>
        );
}

export default Layout;