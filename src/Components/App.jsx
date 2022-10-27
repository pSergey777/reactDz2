import fake from "faker/locale/ru";
import { useCallback, useEffect, useState } from "react";
import { AUTHOR } from "../consts";
import "./App.scss";
import { FormFields } from "./FormFields/FormFields";
import { Messages } from "./Messages";

function App() {
    const [messagesList, setMessagesList] = useState([]);

    const handleSendMessage = useCallback(
        (newMessage) => {
            setMessagesList([...messagesList, newMessage]);
        },
        [messagesList]
    );

    useEffect(() => {
        if (
            messagesList.length &&
            messagesList[messagesList.length - 1].author !== AUTHOR.BOT
        ) {
            const roboMessage = {
                author: AUTHOR.BOT,
                message: fake.lorem.sentence(),
                id: Date.now() + Math.floor(Math.random(10, 1000) * 1000),
            };
            setTimeout(
                () => setMessagesList([...messagesList, roboMessage]),
                1500
            );
        }
    }, [messagesList]);

    return (
        <div className="app">
            <header className="app-header center">
                <Messages messagesList={messagesList} />
                <FormFields onSendMessage={handleSendMessage} />
            </header>
        </div>
    );
}

export default App;
