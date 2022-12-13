import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import "./styles.css";
import Divider from "@material-ui/core/Divider";
import {AUTHORS} from "../../utils/constants";

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF"
    },
    lastMessage: {
        fontSize: "12px",
        opacity: "0.6"
    },
    pictureMobile: {
        width: "30px",
        height: "30px",
        marginRight: "8px"
    },
    pictureDesktop: {
        width: "50px",
        height: "50px",
        marginRight: "16px"
    }
}));

const Chat = (props) => {

    const classes = useStyles();
    const latestMessageData = useSelector(store => store.chats.latestMessage);

    return (
        <ListItem
            className={latestMessageData !== undefined && latestMessageData.chatId === props.chat.chatId && latestMessageData.author === AUTHORS.BOT ? "animateChat" : ""}
            alignItems="flex-start">
            <div className="mobile">

                <Avatar className={classes.pictureMobile} alt={props.chat.name} src={props.chat.picture}/>
                <Typography
                    component="p"
                    variant="caption"
                    color="initial"
                >
                    {props.chat.name}
                </Typography>
            </div>

            <div className="desktop">
                <Avatar className={classes.pictureDesktop} alt={props.chat.name} src={props.chat.picture}/>
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
            </div>
            <Divider variant="inset" component="hr"/>
        </ListItem>
    )
}
export default Chat