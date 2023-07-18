import React from "react";
import { useState, useEffect } from "react";
import { ProfileCard as ProfileCardInterface, Label } from "../interfaces/common"
import ProfileCard from "./ProfileCard"
import CircularProgress from '@mui/material/CircularProgress'
import "../common/common.css"
import NoData from "../common/NoData"
import { API, graphqlOperation, } from 'aws-amplify';
import { listProfiles } from "../graphql/custom/custom_queries"
import { GraphQLQuery } from '@aws-amplify/api';
import { ListProfilesQuery } from "../interfaces/API"

const validateLisProfileResponse = (response: any) => {
    if (response.data == undefined || response.data.listProfiles == undefined || response.data.listProfiles.items == undefined) {
        return false;
    }
    return true;
}
const ProfileList: React.FC = () => {
    const [profiles, setProfiles] = useState([] as ProfileCardInterface[]);
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        setIsLoading(true);
        const fetchProfile = async () => {
            try {
                const json = await API.graphql<GraphQLQuery<ListProfilesQuery>>({ query: listProfiles })
                if (!ignore) {
                    setIsLoading(false);
                    // validate data
                    if (validateLisProfileResponse(json)) {
                        console.log("in Profile List");
                        console.log(json)
                        // set data
                        const convertedProfiles =
                            json.data!.listProfiles!.items!
                                .map((item) => ({
                                    id: item.id ?? "",
                                    firstName: item.first_name ?? "",
                                    lastName: item.last_name ?? "",
                                    profileImageSrc: "",
                                    backgroundImageSrc: "",
                                    skills: item.skills ? item.skills.items.map((skill) => ({
                                        value: skill.skill.id,
                                        name: skill.skill.name
                                    })) : [] as Label[],
                                    location: { region: item.region_location, country: item.country_location }
                                }))
                        setProfiles(convertedProfiles)
                    } else {
                        setErrorMessage("Server Side Error: Please contact webpage owner")
                    }
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
    }, [query])

    if (isLoading) {
        return <CircularProgress />
    }

    if (errorMessage.length > 0) {
        return <div>{errorMessage}</div>
    }

    if (profiles.length > 0) {
        return <div className="page__padding">
            <div className="profile-list__list">
                {
                    profiles.map((profile) => (
                        <ProfileCard
                            key={profile.id}
                            id={profile.id}
                            firstName={profile.firstName}
                            lastName={profile.lastName}
                            profileImageSrc={profile.profileImageSrc}
                            backgroundImageSrc={profile.backgroundImageSrc}
                            skills={profile.skills}
                            location={profile.location} />))
                }
            </div>
        </div>;
    }

    return <div className="page__padding"><NoData /></div>;
}

export default ProfileList;