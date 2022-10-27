import "./style.scss";

export const Messages = ({ messagesList }) => {
    return (
        <div className="messages-block">
            {messagesList.map((mes) => (
                <div className={mes.author + " message"} key={mes.id}>
                    <span className="message__author">{mes.author}</span>
                    <p className="message__text">{mes.message}</p>
                </div>
            ))}
        </div>
    );
};
