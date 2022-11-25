export const ADD_CHAT = "CHATS::ADD_CHAT";
export const ANIMATE_CHAT = "CHATS::ANIMATE_CHAT";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload:newChat,
});

export const animateChat = (chaId,author,css) => ({
    type: ANIMATE_CHAT,
    payload:{chaId,author,css},
});
