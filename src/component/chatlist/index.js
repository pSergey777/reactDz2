import React from "react";
import css from "./styles.css";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Chat from "../chat";

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
    },
    lastMessage: {
        fontSize: "12px",
        opacity: "0.6"
    }
}));

const Index = () => {

    const classes = useStyles();
    const chats = useSelector(store => store.chats.chatList);

    return (
        <List className={classNames(css.chatList, classes.root)}>
            {chats.map(
                (chat, index) =>
                    <div key={index}>
                        <Link to={`/chats/${chat.chatId}`}>
                            <Chat chat={chat}/>
                            <Divider variant="inset" component="li"/>
                        </Link>
                    </div>
            )}
        </List>
    )
}

export default Index;