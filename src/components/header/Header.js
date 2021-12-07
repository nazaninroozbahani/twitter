import React from 'react';
import useStyle from "../../pages/home/styles";
import {IconButton, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer, useLayoutDispatch} from "../../context/LayoutContext";
import Grid from "@material-ui/core/Grid";

const Header = ({title, icon}) => {
    const classes = useStyle();
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));
    const layoutDispatch = useLayoutDispatch();

    return (
        <div className={classes.header}>

            <Grid container alignItems={"center"}>

                {isTabletSize &&
                <IconButton onClick={() => toggleDrawer(layoutDispatch)}><MenuIcon/></IconButton>
                }
                {icon}
                <Typography className={classes.headerTitle}>
                    {title}
                </Typography>
            </Grid>
        </div>
    );
};

export default Header;