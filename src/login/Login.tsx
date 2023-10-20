import React from "react";
import TokButton from "../common/TokButton"
import TokTextfield from "../common/TokTextfield"
import { Auth, API } from "aws-amplify"
import './login.css';
import "../common/common.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { MyProfileContext } from "../App";
import { GraphQLQuery } from '@aws-amplify/api';


const Login: React.FC = () => {
    const myProfileContext = useContext(MyProfileContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signIn() {
        try {
            await Auth.signIn(email, password);
            
            // set up myProfile
            const session = await Auth.currentSession();
            myProfileContext.setEmail(session.getIdToken().payload.email);
            // get profile id
            // const profile = await API.graphql<GraphQLQuery<>>({query: })
            localStorage.setItem("myProfileId","f610046a-45f1-469e-a482-04c497a5502a" )
            navigate("/");
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const onKeyDown = (e: any) => {
        if (e.key == "Enter") {
            signIn();
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
                    <TokTextfield label="Password" type="password"
                        value={password}
                        onChange={(e) => { setPassword(e) }}
                        onKeyDown={(e) => { onKeyDown(e) }}
                        mb={6} />
                    <TokButton label="Login"
                        onClick={async () => { await signIn() }} />
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