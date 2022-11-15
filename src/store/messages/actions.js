export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";

export const updateMessages = (updatedMessages) => ({
    type: UPDATE_MESSAGES,
    updatedMessages,
});