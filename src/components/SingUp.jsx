import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {useHistory} from "react-router-dom";


export const SingUp = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
            console.log(user)
                dispatch(setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                }));
                push('/');



        }).catch(console.error)

    }

    return (
       <Form
            title= 'register'
            handleClick={handleRegister}
       />
    );
};

