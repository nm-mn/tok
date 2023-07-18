import React from "react";
import TokButton from "../common/TokButton";
import Avatar from '@mui/material/Avatar';
import Chip from "@mui/material/Chip";
import { ProfileCard as ProfileCardInterface } from "../interfaces/common"
import { useNavigate } from 'react-router-dom';
import { COMMON } from "../constants/common";
import './profile.css';
const ProfileCard: React.FC<ProfileCardInterface> = ({
    id, firstName, lastName, profileImageSrc = "", backgroundImageSrc = "", skills, location
}) => {
    const navigate = useNavigate();
    return <div className="profile-card" onClick={() => { return window.open(`/profile/${id}`, '_blank', 'noreferrer') }}>
        <div className="profile-card__background"></div>
        <Avatar sx={{ width: '212px', height: '212px', position: 'absolute', top: '20px', left: '69px' }} />
        <div className="profile-card__detail">
            <div className="profile-card__detail-name"><span>{firstName}</span><span> {lastName} </span></div>
            <div className="profile-card__detail-skills">
                {skills.map((skill) => (
                    <Chip label={skill.name} variant="outlined" size="small" color="primary" sx={{ 'margin-right': '4px' }} />))
                }
            </div>
            <div className="profile-card__detail-location">{location.region}, {location.country}</div>
            <TokButton label={COMMON.message_button} type="outlined" onClick={(e) => { e.stopPropagation(); alert("Request a Session"); }} />
        </div>
    </div>;
}

export default ProfileCard;