export const ADD_CHAT = "CHATS::ADD_CHAT";
export const LATEST_MESSAGE = "CHATS::LATEST_MESSAGE";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload:newChat,
});

export const latestMessage = (chaId, author) => ({
    type: LATEST_MESSAGE,
    payload:{chaId,author},
});
