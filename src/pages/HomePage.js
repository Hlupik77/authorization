import React from 'react';
import {Redirect} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

export const HomePage = () => {
    const {isAuth, email}= useAuth()
    const dispatch = useDispatch();
    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button
            onClick={() => dispatch(removeUser())}
            >
                log out from {email}
            </button>

        </div>) :
        (

  <Redirect to='/login'/>
    );
};

