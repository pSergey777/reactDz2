import React,{useState} from "react"
import css from "./profile.css";
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'

const Profile = (props) => {
    const [name, setName] = useState(useSelector((store) => store.profile.name));
    
return (
    <Paper elevation={1} className={css.profile}>
    <div className={css.content}>
    <h1>Profile</h1>
         <p>Name:{name}</p>
    </div>
</Paper>
)
}

export default Profile