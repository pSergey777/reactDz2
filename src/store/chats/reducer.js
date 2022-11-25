import {ADD_CHAT, ANIMATE_CHAT} from "./actions";

const initialState = {
    chatList: [
        {
            chatId: "brendon1",
            name: "Brendon Urie",
            picture: "https://pbs.twimg.com/media/EzHjJGOXAAIpTWb.jpg"
        },
        {
            chatId: "yoh1",
            name: "Yoh Asakura",
            picture: "https://s4.anilist.co/file/anilistcdn/character/large/b167-mVViZcSWQxDn.png"
        },
        {
            chatId: "marina1",
            name: "Marina Diamandis",
            picture: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Marina_Diamandis_%2814091068631%29_%28cropped%29_at_Fendi_close_crop.jpg"
        }
    ],
    animateChat: {}
};

export const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chatList, action.payload.newChat]
            }

        case ANIMATE_CHAT:
            return {
                ...state,
                animateChat: {
                    chatId: action.payload.chaId,
                    author: action.payload.author,
                    css:action.payload.css
                }
            }

        default:
            return state
    }
};