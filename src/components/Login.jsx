import React from 'react';
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {Form} from "./Form";
import {useHistory} from "react-router-dom";
import {setUser} from "../store/slices/userSlice";


export const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Invalid User!!!'))

    }
    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
};

