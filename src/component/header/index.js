import React from "react";
import   "./styles.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import {Link} from "react-router-dom";
import { useSelector} from 'react-redux'

const Header = () => {
    const name = useSelector(store => store.profile.name);

    return (
        <div>
            <AppBar position="static" className="navBar">
                <Toolbar>
                    <Link to="/profile">
                        <IconButton edge="start" color="inherit">
                            <AccountCircleIcon/>
                        </IconButton>
                    </Link>

                    <span className="name">{name} </span>

                    <Link to="/">
                        <IconButton edge="start" color="inherit">
                            <ChatIcon/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header;