import React, { useState, useEffect } from "react";
import css from "./layout.css";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import ChatList from "./ChatList.component";
import TextField from '@material-ui/core/TextField';
import Messages from "./Messages.component";
import { useDispatch,connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { updateMessages } from "../store/messages/actions";

const MessageField = (props) => {
    const [latestMessage, setLatestMessage] = useState({});
    const [messageValue, setMessageValue] = useState("");
    const [chatMessages, setChatMessages] = useState(props.chatMessages);
    const dispatch = useDispatch();
 
    const submitMessage = (event, chatId, newAuthor) => {
      event.preventDefault()
      const message = {
        value: messageValue,
        author: newAuthor
      }

      addMessage(chatId, newAuthor,message)
    }

    const botMessage = ()=>{
      const message = {
        value: "Beep Boop",
        author: "Bot"
      }
      
    setTimeout(()=>{
      addMessage(latestMessage.chatId,"Bot", message)
    },1000)
    }

    const addMessage = (chatId, newAuthor, message) => {
      let newChatMessage = chatMessages.find(chatMessage => chatMessage.chatId == chatId).messages.push(message)
      let chatMessage = chatMessages.filter(chatMessage => chatMessage.chatId !== chatId)
       chatMessage.push(newChatMessage)

      dispatch(updateMessages(chatMessages))

      setMessageValue(" ")
      setLatestMessage({
        author: newAuthor,
        chatId: chatId
      })
    }

    const changeMessage = (changedMessage) => {
      const newMessageValue = changedMessage.target.value
      setMessageValue(newMessageValue)
    }

    const isEmptyObject = (emptyObject) => {
      if (Object.keys(emptyObject).length === 0) {
        return true
      } else {
        return false
      }
    }

    useEffect(() => {
      if (!isEmptyObject(latestMessage) && latestMessage.author !== "Bot") {
       botMessage()
      }
    }, [latestMessage]);

  return (
    <>
      <Paper elevation={1} className={css.chatBox}>
      <Router>
      <ChatList chatMessages={chatMessages} />
        <div className={css.messageField}>
        <Switch>
          {chatMessages.map((chatMessage,index)=> 
          <Route key={index} path={"/chat/" + chatMessage.chatId}>
          <Messages messages={chatMessage.messages}></Messages>
          <form className={css.messageBar} onSubmit={(e)=>submitMessage(e,chatMessage.chatId,"You")}>
            <TextField
              className={css.inputMessage}
              label="Message"
              onChange={changeMessage}
              fullWidth={true}
              value={messageValue}
            />
            <IconButton type="submit" aria-label="send">
              <SendIcon />
            </IconButton>
          </form>
        </Route>
          )}  
        </Switch>
        </div>
        </Router>
      </Paper>
    </>
  )
}


const mapStateToProps = store => ({
  chatMessages: store.chatMessages.messages,
});


export default connect(mapStateToProps)(MessageField);
