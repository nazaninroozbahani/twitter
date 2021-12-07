import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import RightSide from "../RightSide/RightSide";
import {toggleDrawer, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";


const TwitterDrawer = () => {

    const {drawerOpen} = useLayoutState();
    const layoutDispatch = useLayoutDispatch();

    return (
        <Drawer anchor={'right'} open={drawerOpen} onClose={() => {toggleDrawer(layoutDispatch)}}>
            <RightSide/>
        </Drawer>
    );
};

export default TwitterDrawer;