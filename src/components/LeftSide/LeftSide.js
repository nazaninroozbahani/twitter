import React, {useEffect, useRef, useState} from 'react';
import useStyle from './styles'
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {uploadUserPhoto} from "../../api/api-auth";
import {toast} from "react-toastify";
import {getUsers} from "../../api/api-tweet";
import {useTweetDispatch} from "../../context/TweetContext";


const User = (props) => {
    const classes = useStyle();

    const getImage = () => {
        if (props.image)
            return props.image;
        return "/images/person.png";
    }

    return (
        <ButtonBase style={{width: '100%'}}>
            <Grid container alignItems={"center"} className={classes.userItems}>
                <img src={getImage()} className={classes.twitterImg}/>
                <Grid item container direction={"column"} alignItems={"flex-start"} style={{width: 'max-content'}}>
                    <Typography className={classes.userName}>{props.name}</Typography>
                    <Typography className={classes.userId}>{props.id}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    );
}

const LeftSide = () => {
    const classes = useStyle();

    const [users, setUsers] = useState([]);
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const [anchorMenu , setAnchorMenu] = useState();
    const inputRef = useRef();

    const tweetDispatch = useTweetDispatch();

    useEffect(() => {
        getUsers((isOk,data) => {
            if(!isOk)
                return toast.error("ناموفق در گرفتن لیست یوزرها");
            setUsers(data);
        })
    }, []);

    const handleToggleMenu = (e) => {
        if(anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(e.currentTarget);
    };

    const getImage = () => {
        if(imagePath)
            return imagePath;
        if(localStorage.getItem("image") && localStorage.getItem("image") !== "undefined")
            return localStorage.getItem("image");
        return "/images/user-profiles.png";
    }

    const handleAvatarChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append("image",e.target.files[0])
            uploadUserPhoto(formData , (isOk,data) => {
                if(!isOk)
                    return toast.error(data);
                toast.success("عکس شما با موفقیت آپلود شد.");
                localStorage.setItem("image",data.imagePath);
            })
        }
    }

    return (
        <div className={classes.root}>
            <Grid container style={{direction: 'ltr' , cursor : "pointer"}} alignItems={"center"} onClick={handleToggleMenu} >
                <img src={getImage()} style={{width: 50, height: 50, borderRadius : '50%'}}/>
                <Grid item container direction={"column"} style={{width: 'max-content'}}>
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{'@'+localStorage.getItem("username")}</Typography>
                </Grid>
                <input ref={inputRef} type={'file'} style={{display : 'none'}} onChange={handleAvatarChange}/>
            </Grid>
            <Grid container direction={"column"} className={classes.userList}>
                <Typography className={classes.best}>بهترین خبرنگاران</Typography>
                <Divider style={{marginLeft: -14, marginRight: -14}}/>
                {
                    users.map((item, index) => {
                        return (<Link to={`/users/${item._id}/${item.name}`} style={{width : '100%'}} >
                            <User image={item.image} name={item.name} id={item.username+'@'}/>
                            {index !== users.length - 1 && <Divider style={{marginLeft: -14, marginRight: -14}}/>}
                        </Link>)
                    })
                }
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={()=>setAnchorMenu(null)} anchorEl={anchorMenu} >
                <MenuItem onClick={() => {inputRef.current.click() }}>ویرایش عکس پروفایل</MenuItem>
                <MenuItem onClick={() => {localStorage.clear(); window.location.reload(); }}>خروج</MenuItem>
            </Menu>
        </div>
    );
};

export default LeftSide;
