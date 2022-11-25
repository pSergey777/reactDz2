import axios from 'axios'

export async function chatBot(chatId, newMessage) {
    let response = await axios.get(`https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=${chatId}&msg=${newMessage.text}`, {
        headers: {
            "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
            "x-rapidapi-key": "18edf81068msh90ed868beeb69eep118634jsn934c9c3ee307"
        }
    });
    return response.data.cnt
}

export async function randomProfile() {
    return await axios.get(`https://randomuser.me/api/`);
}

