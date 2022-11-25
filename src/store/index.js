import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {messagesReducer} from "./messages/reducer";
import {profileReducer} from "./profile/reducer";
import {chatListReducer} from "./chats/reducer";
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { apiMiddleware } from 'redux-api-middleware';
const persistConfig = {
    key: "marinaMessanger",
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

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk,apiMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export const persistor = persistStore(store);
