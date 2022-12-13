import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer} from "./messages/reducer";
import {profileReducer} from "./profile/reducer";
import {chatListReducer} from "./chats/reducer";
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {apiMiddleware} from 'redux-api-middleware';

const persistConfig = {
    key: "marinaMessenger",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chats: chatListReducer,
        messages: messagesReducer,
        profile: profileReducer
    })
);

export const store = createStore(persistedReducer, applyMiddleware(thunk, apiMiddleware));

export const persist = persistStore(store);
