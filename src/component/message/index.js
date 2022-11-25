import React from "react";
import css from "./styles.css"
import classNames from 'classnames'
import {AUTHORS} from "../../utils/constants";
const Message = (props) => {
    if (props.message.author !== AUTHORS.BOT) {
        return (
            <div className={classNames(css.messageContainer, css.youContainer)}>
                <img alt={"profile-img"} className={css.messageImg} height="50px" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Damon_cropped.jpg"/>
                <p className={css.yourMessage}>{props.message.author}: {props.message.text}</p>
            </div>
        )
    } else {
        return (
            <div className={classNames(css.messageContainer, css.botContainer)}>
                <p className={css.botMessage}>{props.message.author}: {props.message.text}</p>
                <img alt={"bot-img"} className={css.messageImg} height="50px" width="50px" src="https://images-na.ssl-images-amazon.com/images/G/01/toys/detail-page/B001E95SQ2-1-lg.jpg"/>
            </div>
        )
    }
}
export default Message; 