import {ADD_MESSAGE} from "./actions";
import {AUTHORS} from "../../utils/constants"

const initialState = {
   messageList:{
       brendon1: [
           {author: AUTHORS.HUMAN, text: "Hello"},
           {author: AUTHORS.BOT, text: "Hey yow!"}],
       yoh1: [
           {author: AUTHORS.HUMAN, text: "Hello"},
           {author: AUTHORS.BOT, text: "Hola q tal"}
       ],
       marina1: [
           {author: AUTHORS.HUMAN, text: "Hello"},
           {author: AUTHORS.BOT, text: "My name is Marina"}
       ]
   }
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...state.messageList[action.payload.chatId],
                        action.payload.message,
                    ],
                },
            };
        }
        default:
            return state;
    }
};