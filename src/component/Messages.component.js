import React from "react"
import css from "./messages.css";
import Message from "./Message.component";

const Messages = (props)=>{

return (
    <div className={css.messages}>
        {
            props.messages.map(
                (message, index) => <Message key={index} message={message} />
            )
        }
  </div>
)

}

export default Messages