import { Dayjs } from "dayjs"

export interface Label {
    value: string;
    name: string;
}

export interface Location {
    region: string;
    country: string;
}

export interface ProfileCard {
    id: string;
    firstName: string;
    lastName: string;
    profileImageSrc: string;
    backgroundImageSrc: string;
    skills: Label[];
    location: Location;
}

export interface ProfileDetail {
    firstName: string;
    lastName: string;
    backgroundImageSrc: string;
    profileImageSrc: string;
    bio: string;
    location: Location;
    languages: string[];
    skills: Skill[]
    isAccepting: boolean;
}

export interface Skill {
    name: string;
    years: number;
    mentorshipType?: string[];
    credential?: string;
    explanation?: string;
}

export interface Inbox {
    id: string;
    status: string; // TODO: to enum read, unread, selected
    sender: string;
    date: Dayjs;
    message: string;
    skills: Label[]
}