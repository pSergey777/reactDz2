import React from "react";
import css from "./message.css"
import NormalGuyImg from "../assets/img/normalGuy.jpg"
import BotImg from "../assets/img/bot.jpg"
import classNames from 'classnames'
 
const Message = (props) =>{
    if(props.message.author !== "Bot") {
        return (
            <div className={classNames(css.messageContainer,css.youContainer)}>
                <img className={css.messageImg} height="50px" width="50px" src={NormalGuyImg}/>
                <p className={ css.yourMessage}>{props.message.author}: {props.message.value}</p>
            </div>
        )
    } else{
        return (
            <div  className={classNames(css.messageContainer, css.botContainer)}>
                <p className={css.botMessage}>{props.message.author}: {props.message.value}</p>
                <img className={css.messageImg} height="50px" width="50px" src={BotImg}/>
            </div>
        )
    }   
} 
export default Message; 