import React from "react"
import {useEffect, useState} from "react"
import css from "./styles.css";
import Paper from '@material-ui/core/Paper';
import {randomProfile} from "../../api";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        picture: {
            medium: "",
            large: ""
        },
        name: {
            first: "",
            last: ""
        }
    });

    useEffect(() => {
        randomProfile().then(newProfileData => {
            setProfileData(newProfileData.data.results[0]);
        })
    }, []);
    return (
        <Paper elevation={1} className={css.profile}>
            <div className={css.content}>
                <h1>Profile</h1>
                <img className={css.img} src={profileData.picture.large} alt=""/>
                <p>Name: {profileData.name.first}</p>
                <p>Last Name: {profileData.name.last}</p>
            </div>
        </Paper>
    )
};

export default Profile