import React from "react";
import Avatar from '@mui/material/Avatar';
import './profile.css';
import '../common/common.css';
import Chip from "@mui/material/Chip";
import TokButton from "../common/TokButton";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetProfileQuery } from "../API"
import { getProfile } from "../graphql/queries"
import { ProfileDetail as ProfileDetailInterface, Skill } from "../interfaces/common";
import { COMMON } from "../constants/common"

const ProfileDetail: React.FC = () => {
    let { id } = useParams();
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        backgroundImageSrc: "",
        profileImageSrc: "",
        bio: "",
        location: {
            region: "",
            country: ""
        },
        languages: [] as string[],
        skills: [] as Skill[],
        isAccepting: false
    } as ProfileDetailInterface);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        setIsLoading(true);
        const fetchProfile = async () => {
            try {
                const json = await API.graphql<GraphQLQuery<GetProfileQuery>>({ query: getProfile, variables: { id: id } })
                if (!ignore) {
                    console.log(json)
                    setIsLoading(false);
                    // validate data
                    // if (validateLisProfileResponse(json)) {
                    //     // set data
                    const data = json.data.getProfile;
                    const convertedProfile = {
                        firstName: data.first_name ?? "",
                        lastName: data.last_name ?? "",
                        profileImageSrc: "",
                        backgroundImageSrc: "",
                        bio: data.bio ?? "",
                        location: {
                            region: data.region_location ?? "",
                            country: data.country_location ?? ""
                        },
                        languages: [data.primary_language, data.secondary_language, data.tetrary_language],
                        skills: data.skills.items.map((skill) => ({
                            name: skill.skillMasterSkillsId,
                            years: 0
                        })),
                        isAccepting: data.accepting ?? false
                    };
                    setProfile(convertedProfile)
                } else {
                    setErrorMessage("Server Side Error Please contact webpage owner")
                }

            } catch (e) {
                console.log(e);
                // TODO: show error message
            }
        }
        fetchProfile();
        // cleanup functionn
        return () => {
            ignore = true
        }
    }, [id])

    return <div className="page__padding profile-detail__container">
        <div>
            <div className="profile-detail__abstract">
                <div className="profile-detail__abstract-image-section">
                    <div className="profile-detail__abstract-background-image"></div>
                    <Avatar sx={{ width: '212px', height: '212px', position: 'absolute', top: '24px', left: '24px' }} />
                </div>
                <div className="profile-detail__abstract-name-section">
                    <span className="font__headline-small">{profile.firstName} {profile.lastName}</span>
                    <div className="profile-detail__status">
                        <div className={`profile-detail__status-icon ${profile.isAccepting ? 'profile-detail__status-icon-active' : 'profile-detail__status-icon-inactive'}`}></div>
                        <span className={`${profile.isAccepting ? 'profile-detail__status-active' : 'profile-detail__status-inactive'}`}>
                            {profile.isAccepting ? "accepting mentorship" : "inactive"}</span>
                    </div>
                </div>
                <div className="profile-detail__abstract-padding font__body-large">{profile.bio}</div>
                <div className="profile-detail__abstract-padding">
                    {profile.skills.map((skill) => (
                        <Chip label={skill.name} variant="outlined" size="small" color="primary" sx={{ 'margin-right': '4px' }} />))
                    }
                </div>
                <div className="profile-detail__abstract-padding profile-detail__abstract-locale font__body-medium font__color-sub-text">
                    <div>{profile.location.region}, {profile.location.country}</div>
                    <div className="profile-detail__abstract-language" >{profile.languages.map((lang) => (lang + ","))}</div>
                </div>
                <div className="profile-detail__abstract-padding">
                    <TokButton label={COMMON.message_button} type="outlined" onClick={() => { alert("Request a Session") }} />
                </div>
            </div>
        </div>
    </div >
}

export default ProfileDetail;