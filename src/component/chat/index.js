import React, {useEffect} from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {animateChat} from "../../store/chats/actions";


const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
    },
    lastMessage: {
        fontSize: "12px",
        opacity: "0.6"
    }
}));

const Chat = (props) => {

    const classes = useStyles();
    const chatAnimate = useSelector(store => store.chats.animateChat);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(animateChat("", "", ""))
    }, [])

    return (
        <ListItem className={chatAnimate.chatId === props.chat.chatId ? chatAnimate.css : ""} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={props.chat.picture}/>
            </ListItemAvatar>
            <ListItemText
                className={classes.root}
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.root}
                            color="initial"
                        >
                            {props.chat.name}
                        </Typography>
                        <Typography
                            component="span"
                            className={classNames(classes.root, classes.lastMessage)}
                        >
                            {" — I'll be in your neighborhood doing errands this…"}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default Chat