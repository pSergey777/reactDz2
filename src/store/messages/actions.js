import {animateChat} from "../chats/actions";
import animations from "../animations.css"
import {AUTHORS} from "../../utils/constants";
import {chatBot} from "../../api";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    },
});

export const addMessageWithThunk = (newMessage, chatId) => async (dispatch) => {

    dispatch(addMessage(newMessage, chatId));

    if (newMessage.author !== AUTHORS.BOT) {
        dispatch(animateChat(chatId, newMessage.author, ""));
        dispatch(addMessageWithThunk({author: AUTHORS.BOT, text: await chatBot(chatId, newMessage)}, chatId))
    }

    if (newMessage.author === AUTHORS.BOT) {
        dispatch(animateChat(chatId, newMessage.author, animations.animateChat));
    }

};
