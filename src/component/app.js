import React from "react";
import Header from "./header";
import css from "./app.css";
import MessageField from "./messagefield";
import ChatList from "./chatlist";
import Profile from "./profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <div className={css.container}>
            <Router>
                <Header profile=""/>
                <Switch>
                    <Route path={"/profile"}>
                        <Profile/>
                    </Route>
                    <Route path="/chats/:chatId?">
                        <MessageField />
                    </Route>
                    <Route path={"/"}>
                        <ChatList/>
                    </Route>
                    <Route path="*">
                        <div>Not Found 404</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;