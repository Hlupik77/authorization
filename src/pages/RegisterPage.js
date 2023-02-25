import React from 'react';
import {Link} from "react-router-dom";
import {SingUp} from "../components/SingUp";

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
                <SingUp/>
            <p>
               Already have in account <Link  to='/login'> Register Please</Link>
            </p>
        </div>
    );
};

