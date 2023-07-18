import React from "react";
import Logo from "../constants/img/tok_theme.PNG"
import { COMMON } from "../constants/common";
import TokIconButton from "./TokIconButton";
import Avatar from '@mui/material/Avatar';
import './navBar.css';
import { useNavigate } from 'react-router-dom';


const NavBar: React.FC = () => {
    const navigate = useNavigate();

    return <div className="nav-bar">
        <div className="nav-bar__logo" onClick={() => { return navigate('/') }}><img className="nav-bar__logo-img" src={Logo} alt="TOK" /><span className="nav-bar__logo-title">{COMMON.app_title}</span></div>
        <div className="nav-bar__actions">
            <TokIconButton icon="message" type="text" onClick={() => { return navigate('/inbox') }} />
            <Avatar sx={{ width: '32px', height: '32px', 'margin-left': '8px' }} />
        </div>

    </div>;
}

export default NavBar;