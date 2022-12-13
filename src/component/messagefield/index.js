import React, {useCallback} from "react";
import "./styles.css";
import Paper from '@material-ui/core/Paper';
import ChatList from "../chatlist";
import Form from "../form"
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, useParams} from "react-router-dom";
import {addMessageWithThunk} from "../../store/messages/actions";
import Message from "../message";

const MessageField = () => {
    const messages = useSelector(store => store.messages.messageList);
    const {chatId} = useParams();
    const dispatch = useDispatch();

    const handleAddMessage = useCallback(
        (newMessage) => {
            dispatch(addMessageWithThunk(newMessage, chatId));
        },
        [chatId, dispatch]
    );

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/"/>;
    }

    return (
        <Paper elevation={1} className="chatBox">
            <ChatList/>
            <div className="messageField">
                <div className="messages">
                    {messages[chatId].map((message, index) =>
                        <Message key={index} message={message}/>
                    )}
                </div>
                <Form onAddMessage={handleAddMessage}/>
            </div>

        </Paper>
    )
}

export default MessageField;
