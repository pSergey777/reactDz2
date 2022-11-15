import { createStore, combineReducers } from "redux";
import { chatMessageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
  chatMessages: chatMessageReducer,
  profile:profileReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
