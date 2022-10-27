import { useState } from "react";
import { AUTHOR } from "../../consts";
import "./style.scss";

export const FormFields = ({onSendMessage}) => {
    const [message, setMessage] = useState("");

    const handleChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSendMessage({
            author: AUTHOR.ME,
            message: message,
            id: Date.now() + Math.floor(Math.random(10,1000)*1000),
        });
        setMessage('');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChangeInput}
                />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};
