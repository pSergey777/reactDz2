import React, {useState, useEffect, useRef} from "react"
import css from "./styles.css"
import {AUTHORS} from "../../utils/constants";
import {IconButton, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Form = ({onAddMessage}) => {
    const [text, setText] = useState("");
    const input = useRef();

    const handleMessageChange = (changedMessage) => {
        setText(changedMessage.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({author: AUTHORS.HUMAN, text});
        setText('');
    }

    useEffect(() => {
        input.current.focus();
    }, []);

    useEffect(() => {
        return () => {
            console.log('unmounting');
        }
    }, []);

    return (
        <form className={css.messageBar} onSubmit={handleSubmit}>
            <TextField
                className={css.inputMessage}
                label="Message"
                onChange={handleMessageChange}
                fullWidth={true}
                value={text}
                inputRef={input}
            />
            <IconButton type="submit" aria-label="send">
                <SendIcon/>
            </IconButton>
        </form>
    )
}

export default Form