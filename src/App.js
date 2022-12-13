import React, {useEffect} from 'react';
import Header from "./component/header";
import "./App.css";
import MessageField from "./component/messagefield";
import ChatList from "./component/chatlist";
import PopUp from "./component/popup";
import Profile from "./component/profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {latestMessage} from "./store/chats/actions";

const App = () => {

    //reset lastMessage
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(latestMessage("", ""))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container">
            <Router>
                <Header profile=""/>
                <Switch>
                    <Route path={"/profile"}>
                        <Profile/>
                    </Route>
                    <Route path="/chats/:chatId?">
                        <MessageField/>
                    </Route>
                    <Route path={"/"}>
                        <ChatList/>
                    </Route>
                    <Route path="*">
                        <div>Not Found 404</div>
                    </Route>
                </Switch>
            </Router>
            <PopUp/>
        </div>
    )
}
export default App;
