import React from "react";
import TokButton from "../common/TokButton"
import TokTextfield from "../common/TokTextfield"
import { Auth } from "aws-amplify"
import './login.css';
import "../common/common.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { AuthenticatedContext } from "../App"

const Login: React.FC = () => {
    const authContext = useContext(AuthenticatedContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signIn(email: string, password: string) {
        try {
            await Auth.signIn(email, password);
            authContext.setIsAuthenticated(true);
            navigate("/");
        } catch (error) {
            authContext.setIsAuthenticated(false);
            console.log('error signing in', error);
        }
    }

    return (
        <div className="login">
            <div className="login__ad page__padding">
                <div>LOGO</div>
                <div className="login__ad-slogan">
                    <span>Unlock your</span>
                    <span className="login__ad-slogan-bold" >community as a guide</span>
                    <span>for your creative pursuits</span>
                </div>
                <div>footer</div>
            </div>
            <div className="login__form page__padding">
                <div className="login__form-container">
                    <div className="login__form-title">Login</div>
                    <TokTextfield
                        label="Email" type="email" value={email} onChange={(e) => { setEmail(e) }}
                        mb={2} />
                    <TokTextfield label="Password" type="password" value={password} onChange={(e) => { setPassword(e) }}
                        mb={6} />
                    <TokButton label="Login"
                        onClick={async () => { await signIn(email, password) }} />
                    <div className="login__form-explanation">
                        <div><span>Forgot password?</span><span className="link">Reset here</span></div>
                        <div>
                            <span>Don't have an account yet?</span>
                            <span className="link">Join now!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;