/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  email: string,
  accepting: boolean,
  region_location?: string | null,
  country_location?: string | null,
  primary_language?: string | null,
  secondary_language?: string | null,
  tetrary_language?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type ModelProfileConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  accepting?: ModelBooleanInput | null,
  region_location?: ModelStringInput | null,
  country_location?: ModelStringInput | null,
  primary_language?: ModelStringInput | null,
  secondary_language?: ModelStringInput | null,
  tetrary_language?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  accepting: boolean,
  region_location?: string | null,
  country_location?: string | null,
  primary_language?: string | null,
  secondary_language?: string | null,
  tetrary_language?: string | null,
  bio?: string | null,
  skills?: ModelProfileSkillConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProfileSkillConnection = {
  __typename: "ModelProfileSkillConnection",
  items:  Array<ProfileSkill | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProfileSkill = {
  __typename: "ProfileSkill",
  id: string,
  profileId: string,
  skillId: string,
  profile: Profile,
  skill: Skill,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  name: string,
  accounts?: ModelProfileSkillConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProfileInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  accepting?: boolean | null,
  region_location?: string | null,
  country_location?: string | null,
  primary_language?: string | null,
  secondary_language?: string | null,
  tetrary_language?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type DeleteProfileInput = {
  id: string,
  _version?: number | null,
};

export type CreateSkillInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSkillInput = {
  id: string,
  _version?: number | null,
};

export type CreateProfileSkillInput = {
  id?: string | null,
  profileId: string,
  skillId: string,
  _version?: number | null,
};

export type ModelProfileSkillConditionInput = {
  profileId?: ModelIDInput | null,
  skillId?: ModelIDInput | null,
  and?: Array< ModelProfileSkillConditionInput | null > | null,
  or?: Array< ModelProfileSkillConditionInput | null > | null,
  not?: ModelProfileSkillConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProfileSkillInput = {
  id: string,
  profileId?: string | null,
  skillId?: string | null,
  _version?: number | null,
};

export type DeleteProfileSkillInput = {
  id: string,
  _version?: number | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  accepting?: ModelBooleanInput | null,
  region_location?: ModelStringInput | null,
  country_location?: ModelStringInput | null,
  primary_language?: ModelStringInput | null,
  secondary_language?: ModelStringInput | null,
  tetrary_language?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProfileSkillFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  skillId?: ModelIDInput | null,
  and?: Array< ModelProfileSkillFilterInput | null > | null,
  or?: Array< ModelProfileSkillFilterInput | null > | null,
  not?: ModelProfileSkillFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  accepting?: ModelSubscriptionBooleanInput | null,
  region_location?: ModelSubscriptionStringInput | null,
  country_location?: ModelSubscriptionStringInput | null,
  primary_language?: ModelSubscriptionStringInput | null,
  secondary_language?: ModelSubscriptionStringInput | null,
  tetrary_language?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProfileSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  profileId?: ModelSubscriptionIDInput | null,
  skillId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProfileSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileSkillFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProfileSkillMutationVariables = {
  input: CreateProfileSkillInput,
  condition?: ModelProfileSkillConditionInput | null,
};

export type CreateProfileSkillMutation = {
  createProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProfileSkillMutationVariables = {
  input: UpdateProfileSkillInput,
  condition?: ModelProfileSkillConditionInput | null,
};

export type UpdateProfileSkillMutation = {
  updateProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProfileSkillMutationVariables = {
  input: DeleteProfileSkillInput,
  condition?: ModelProfileSkillConditionInput | null,
};

export type DeleteProfileSkillMutation = {
  deleteProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProfilesQueryVariables = {
  id?: string | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfilesQuery = {
  syncProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSkillsQueryVariables = {
  id?: string | null,
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillsQuery = {
  syncSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProfileSkillQueryVariables = {
  id: string,
};

export type GetProfileSkillQuery = {
  getProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProfileSkillsQueryVariables = {
  filter?: ModelProfileSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfileSkillsQuery = {
  listProfileSkills?:  {
    __typename: "ModelProfileSkillConnection",
    items:  Array< {
      __typename: "ProfileSkill",
      id: string,
      profileId: string,
      skillId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        accepting: boolean,
        region_location?: string | null,
        country_location?: string | null,
        primary_language?: string | null,
        secondary_language?: string | null,
        tetrary_language?: string | null,
        bio?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProfileSkillsQueryVariables = {
  filter?: ModelProfileSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfileSkillsQuery = {
  syncProfileSkills?:  {
    __typename: "ModelProfileSkillConnection",
    items:  Array< {
      __typename: "ProfileSkill",
      id: string,
      profileId: string,
      skillId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        accepting: boolean,
        region_location?: string | null,
        country_location?: string | null,
        primary_language?: string | null,
        secondary_language?: string | null,
        tetrary_language?: string | null,
        bio?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProfileSkillsByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileSkillsByProfileIdQuery = {
  profileSkillsByProfileId?:  {
    __typename: "ModelProfileSkillConnection",
    items:  Array< {
      __typename: "ProfileSkill",
      id: string,
      profileId: string,
      skillId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        accepting: boolean,
        region_location?: string | null,
        country_location?: string | null,
        primary_language?: string | null,
        secondary_language?: string | null,
        tetrary_language?: string | null,
        bio?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProfileSkillsBySkillIdQueryVariables = {
  skillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileSkillsBySkillIdQuery = {
  profileSkillsBySkillId?:  {
    __typename: "ModelProfileSkillConnection",
    items:  Array< {
      __typename: "ProfileSkill",
      id: string,
      profileId: string,
      skillId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        accepting: boolean,
        region_location?: string | null,
        country_location?: string | null,
        primary_language?: string | null,
        secondary_language?: string | null,
        tetrary_language?: string | null,
        bio?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    accepting: boolean,
    region_location?: string | null,
    country_location?: string | null,
    primary_language?: string | null,
    secondary_language?: string | null,
    tetrary_language?: string | null,
    bio?: string | null,
    skills?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelProfileSkillConnection",
      items:  Array< {
        __typename: "ProfileSkill",
        id: string,
        profileId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProfileSkillSubscriptionVariables = {
  filter?: ModelSubscriptionProfileSkillFilterInput | null,
};

export type OnCreateProfileSkillSubscription = {
  onCreateProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProfileSkillSubscriptionVariables = {
  filter?: ModelSubscriptionProfileSkillFilterInput | null,
};

export type OnUpdateProfileSkillSubscription = {
  onUpdateProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProfileSkillSubscriptionVariables = {
  filter?: ModelSubscriptionProfileSkillFilterInput | null,
};

export type OnDeleteProfileSkillSubscription = {
  onDeleteProfileSkill?:  {
    __typename: "ProfileSkill",
    id: string,
    profileId: string,
    skillId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      first_name: string,
      last_name: string,
      email: string,
      accepting: boolean,
      region_location?: string | null,
      country_location?: string | null,
      primary_language?: string | null,
      secondary_language?: string | null,
      tetrary_language?: string | null,
      bio?: string | null,
      skills?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      accounts?:  {
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
