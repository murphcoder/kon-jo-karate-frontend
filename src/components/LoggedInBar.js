import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedInBar = (props) => {
    return (
        <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to={{pathname: "/locations"}}>Locations</NavLink>
            <NavLink to={{pathname: "/instructors"}}>Instructors</NavLink>
            <NavLink className="logout" to="/" onClick={event => logout(props)}>Logout</NavLink>
        </div>
    )
};

export default LoggedInBar;