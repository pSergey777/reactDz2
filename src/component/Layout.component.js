import React from "react";
import Header from "./Header.component";
import css from "./layout.css";
import MessageField from "./MessageField.component";
import Profile from "./Profile.component";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const Layout = ()=>{
 
return(
<div className={css.container}>
    <Router>
        <Header profile = ""></Header> 

        <Switch>
            <Route path={"/profile"}>
                <Profile></Profile>
            </Route>
            <Route  path={"/"}>
                <MessageField></MessageField>
            </Route>
        </Switch>
    </Router>
</div>
)
}

export default Layout;