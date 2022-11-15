import {UPDATE_MESSAGES} from "./actions";
import YohAsakuraImg from "../../assets/img/io-asakura.jpg"
import AbnormalGuyImg from "../../assets/img/unnormal-guy.jpg"
import MarinaNotGuyImg from "../../assets/img/marina.jpg"

const initialState = {
    messages: [{
            chatId: "brendon1",
            name: "Brendon Urie",
            picture: AbnormalGuyImg,
            messages: []
        },
        {
            chatId: "yoh1",
            name: "Yoh Asakura",
            picture: YohAsakuraImg,
            messages: []
        },
        {
            chatId: "marina1",
            name: "Marina Diamandis",
            picture: MarinaNotGuyImg,
            messages: []
        }
    ],
};

export const chatMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGES: {
            return {
                ...state,
                messages: action.updatedMessages
            };
        }
        default:
            return state;
    };
};