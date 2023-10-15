/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChannelInput = {
  channel_id: string,
  _version?: number | null,
};

export type ModelChannelConditionInput = {
  and?: Array< ModelChannelConditionInput | null > | null,
  or?: Array< ModelChannelConditionInput | null > | null,
  not?: ModelChannelConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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


export type Channel = {
  __typename: "Channel",
  channel_id: string,
  profiles?: ModelChannelProfileConnection | null,
  messages?: ModelMessageConnection | null,
  readStatus?: ModelReadStatusConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelChannelProfileConnection = {
  __typename: "ModelChannelProfileConnection",
  items:  Array<ChannelProfile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ChannelProfile = {
  __typename: "ChannelProfile",
  id: string,
  channelChannel_id: string,
  profileId: string,
  channel: Channel,
  profile: Profile,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
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
  skills?: ModelSkillInstanceConnection | null,
  channels?: ModelChannelProfileConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSkillInstanceConnection = {
  __typename: "ModelSkillInstanceConnection",
  items:  Array<SkillInstance | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SkillInstance = {
  __typename: "SkillInstance",
  id: string,
  years?: number | null,
  description?: string | null,
  skill?: SkillMaster | null,
  profile?: Profile | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  profileSkillsId?: string | null,
  skillMasterSkillsId?: string | null,
};

export type SkillMaster = {
  __typename: "SkillMaster",
  id: string,
  name: string,
  skills?: ModelSkillInstanceConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  channel_id: string,
  message: string,
  profile_id: string,
  date: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelReadStatusConnection = {
  __typename: "ModelReadStatusConnection",
  items:  Array<ReadStatus | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ReadStatus = {
  __typename: "ReadStatus",
  id: string,
  channel_id: string,
  profile_id: string,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateChannelInput = {
  channel_id: string,
  _version?: number | null,
};

export type DeleteChannelInput = {
  channel_id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  channel_id: string,
  message: string,
  profile_id: string,
  date: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  channel_id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  profile_id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
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

export type UpdateMessageInput = {
  id: string,
  channel_id?: string | null,
  message?: string | null,
  profile_id?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateReadStatusInput = {
  id?: string | null,
  channel_id: string,
  profile_id: string,
  date?: string | null,
  _version?: number | null,
};

export type ModelReadStatusConditionInput = {
  channel_id?: ModelIDInput | null,
  profile_id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelReadStatusConditionInput | null > | null,
  or?: Array< ModelReadStatusConditionInput | null > | null,
  not?: ModelReadStatusConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateReadStatusInput = {
  id: string,
  channel_id?: string | null,
  profile_id?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteReadStatusInput = {
  id: string,
  _version?: number | null,
};

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

export type CreateSkillInstanceInput = {
  id?: string | null,
  years?: number | null,
  description?: string | null,
  _version?: number | null,
  profileSkillsId?: string | null,
  skillMasterSkillsId?: string | null,
};

export type ModelSkillInstanceConditionInput = {
  years?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSkillInstanceConditionInput | null > | null,
  or?: Array< ModelSkillInstanceConditionInput | null > | null,
  not?: ModelSkillInstanceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  profileSkillsId?: ModelIDInput | null,
  skillMasterSkillsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSkillInstanceInput = {
  id: string,
  years?: number | null,
  description?: string | null,
  _version?: number | null,
  profileSkillsId?: string | null,
  skillMasterSkillsId?: string | null,
};

export type DeleteSkillInstanceInput = {
  id: string,
  _version?: number | null,
};

export type CreateSkillMasterInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelSkillMasterConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillMasterConditionInput | null > | null,
  or?: Array< ModelSkillMasterConditionInput | null > | null,
  not?: ModelSkillMasterConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateSkillMasterInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSkillMasterInput = {
  id: string,
  _version?: number | null,
};

export type CreateChannelProfileInput = {
  id?: string | null,
  channelChannel_id: string,
  profileId: string,
  _version?: number | null,
};

export type ModelChannelProfileConditionInput = {
  channelChannel_id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  and?: Array< ModelChannelProfileConditionInput | null > | null,
  or?: Array< ModelChannelProfileConditionInput | null > | null,
  not?: ModelChannelProfileConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateChannelProfileInput = {
  id: string,
  channelChannel_id?: string | null,
  profileId?: string | null,
  _version?: number | null,
};

export type DeleteChannelProfileInput = {
  id: string,
  _version?: number | null,
};

export type ModelChannelFilterInput = {
  channel_id?: ModelIDInput | null,
  and?: Array< ModelChannelFilterInput | null > | null,
  or?: Array< ModelChannelFilterInput | null > | null,
  not?: ModelChannelFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelChannelConnection = {
  __typename: "ModelChannelConnection",
  items:  Array<Channel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  channel_id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  profile_id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelReadStatusFilterInput = {
  id?: ModelIDInput | null,
  channel_id?: ModelIDInput | null,
  profile_id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelReadStatusFilterInput | null > | null,
  or?: Array< ModelReadStatusFilterInput | null > | null,
  not?: ModelReadStatusFilterInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSkillInstanceFilterInput = {
  id?: ModelIDInput | null,
  years?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSkillInstanceFilterInput | null > | null,
  or?: Array< ModelSkillInstanceFilterInput | null > | null,
  not?: ModelSkillInstanceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  profileSkillsId?: ModelIDInput | null,
  skillMasterSkillsId?: ModelIDInput | null,
};

export type ModelSkillMasterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSkillMasterFilterInput | null > | null,
  or?: Array< ModelSkillMasterFilterInput | null > | null,
  not?: ModelSkillMasterFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSkillMasterConnection = {
  __typename: "ModelSkillMasterConnection",
  items:  Array<SkillMaster | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChannelProfileFilterInput = {
  id?: ModelIDInput | null,
  channelChannel_id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  and?: Array< ModelChannelProfileFilterInput | null > | null,
  or?: Array< ModelChannelProfileFilterInput | null > | null,
  not?: ModelChannelProfileFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionChannelFilterInput = {
  channel_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChannelFilterInput | null > | null,
  or?: Array< ModelSubscriptionChannelFilterInput | null > | null,
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

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  channel_id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  profile_id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionReadStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  channel_id?: ModelSubscriptionIDInput | null,
  profile_id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReadStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionReadStatusFilterInput | null > | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSkillInstanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  years?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillInstanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillInstanceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSkillMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillMasterFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionChannelProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  channelChannel_id?: ModelSubscriptionIDInput | null,
  profileId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChannelProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionChannelProfileFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type CreateChannelMutation = {
  createChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type UpdateChannelMutation = {
  updateChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type DeleteChannelMutationVariables = {
  input: DeleteChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type DeleteChannelMutation = {
  deleteChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateReadStatusMutationVariables = {
  input: CreateReadStatusInput,
  condition?: ModelReadStatusConditionInput | null,
};

export type CreateReadStatusMutation = {
  createReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReadStatusMutationVariables = {
  input: UpdateReadStatusInput,
  condition?: ModelReadStatusConditionInput | null,
};

export type UpdateReadStatusMutation = {
  updateReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReadStatusMutationVariables = {
  input: DeleteReadStatusInput,
  condition?: ModelReadStatusConditionInput | null,
};

export type DeleteReadStatusMutation = {
  deleteReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateSkillInstanceMutationVariables = {
  input: CreateSkillInstanceInput,
  condition?: ModelSkillInstanceConditionInput | null,
};

export type CreateSkillInstanceMutation = {
  createSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type UpdateSkillInstanceMutationVariables = {
  input: UpdateSkillInstanceInput,
  condition?: ModelSkillInstanceConditionInput | null,
};

export type UpdateSkillInstanceMutation = {
  updateSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type DeleteSkillInstanceMutationVariables = {
  input: DeleteSkillInstanceInput,
  condition?: ModelSkillInstanceConditionInput | null,
};

export type DeleteSkillInstanceMutation = {
  deleteSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type CreateSkillMasterMutationVariables = {
  input: CreateSkillMasterInput,
  condition?: ModelSkillMasterConditionInput | null,
};

export type CreateSkillMasterMutation = {
  createSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type UpdateSkillMasterMutationVariables = {
  input: UpdateSkillMasterInput,
  condition?: ModelSkillMasterConditionInput | null,
};

export type UpdateSkillMasterMutation = {
  updateSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type DeleteSkillMasterMutationVariables = {
  input: DeleteSkillMasterInput,
  condition?: ModelSkillMasterConditionInput | null,
};

export type DeleteSkillMasterMutation = {
  deleteSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type CreateChannelProfileMutationVariables = {
  input: CreateChannelProfileInput,
  condition?: ModelChannelProfileConditionInput | null,
};

export type CreateChannelProfileMutation = {
  createChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateChannelProfileMutationVariables = {
  input: UpdateChannelProfileInput,
  condition?: ModelChannelProfileConditionInput | null,
};

export type UpdateChannelProfileMutation = {
  updateChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteChannelProfileMutationVariables = {
  input: DeleteChannelProfileInput,
  condition?: ModelChannelProfileConditionInput | null,
};

export type DeleteChannelProfileMutation = {
  deleteChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetChannelQueryVariables = {
  channel_id: string,
};

export type GetChannelQuery = {
  getChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type ListChannelsQueryVariables = {
  channel_id?: string | null,
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChannelsQuery = {
  listChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
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

export type SyncChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChannelsQuery = {
  syncChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
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

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      channel_id: string,
      message: string,
      profile_id: string,
      date: string,
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

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      channel_id: string,
      message: string,
      profile_id: string,
      date: string,
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

export type GetReadStatusQueryVariables = {
  id: string,
};

export type GetReadStatusQuery = {
  getReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReadStatusesQueryVariables = {
  filter?: ModelReadStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReadStatusesQuery = {
  listReadStatuses?:  {
    __typename: "ModelReadStatusConnection",
    items:  Array< {
      __typename: "ReadStatus",
      id: string,
      channel_id: string,
      profile_id: string,
      date?: string | null,
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

export type SyncReadStatusesQueryVariables = {
  filter?: ModelReadStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReadStatusesQuery = {
  syncReadStatuses?:  {
    __typename: "ModelReadStatusConnection",
    items:  Array< {
      __typename: "ReadStatus",
      id: string,
      channel_id: string,
      profile_id: string,
      date?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSkillInstanceQueryVariables = {
  id: string,
};

export type GetSkillInstanceQuery = {
  getSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type ListSkillInstancesQueryVariables = {
  id?: string | null,
  filter?: ModelSkillInstanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSkillInstancesQuery = {
  listSkillInstances?:  {
    __typename: "ModelSkillInstanceConnection",
    items:  Array< {
      __typename: "SkillInstance",
      id: string,
      years?: number | null,
      description?: string | null,
      skill?:  {
        __typename: "SkillMaster",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      profile?:  {
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
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      profileSkillsId?: string | null,
      skillMasterSkillsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSkillInstancesQueryVariables = {
  filter?: ModelSkillInstanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillInstancesQuery = {
  syncSkillInstances?:  {
    __typename: "ModelSkillInstanceConnection",
    items:  Array< {
      __typename: "SkillInstance",
      id: string,
      years?: number | null,
      description?: string | null,
      skill?:  {
        __typename: "SkillMaster",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      profile?:  {
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
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      profileSkillsId?: string | null,
      skillMasterSkillsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSkillMasterQueryVariables = {
  id: string,
};

export type GetSkillMasterQuery = {
  getSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type ListSkillMastersQueryVariables = {
  id?: string | null,
  filter?: ModelSkillMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSkillMastersQuery = {
  listSkillMasters?:  {
    __typename: "ModelSkillMasterConnection",
    items:  Array< {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
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

export type SyncSkillMastersQueryVariables = {
  filter?: ModelSkillMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillMastersQuery = {
  syncSkillMasters?:  {
    __typename: "ModelSkillMasterConnection",
    items:  Array< {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
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

export type GetChannelProfileQueryVariables = {
  id: string,
};

export type GetChannelProfileQuery = {
  getChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListChannelProfilesQueryVariables = {
  filter?: ModelChannelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelProfilesQuery = {
  listChannelProfiles?:  {
    __typename: "ModelChannelProfileConnection",
    items:  Array< {
      __typename: "ChannelProfile",
      id: string,
      channelChannel_id: string,
      profileId: string,
      channel:  {
        __typename: "Channel",
        channel_id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChannelProfilesQueryVariables = {
  filter?: ModelChannelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChannelProfilesQuery = {
  syncChannelProfiles?:  {
    __typename: "ModelChannelProfileConnection",
    items:  Array< {
      __typename: "ChannelProfile",
      id: string,
      channelChannel_id: string,
      profileId: string,
      channel:  {
        __typename: "Channel",
        channel_id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ByChannelAndDateQueryVariables = {
  channel_id: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByChannelAndDateQuery = {
  byChannelAndDate?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      channel_id: string,
      message: string,
      profile_id: string,
      date: string,
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

export type ReadStatusesByChannel_idQueryVariables = {
  channel_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReadStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadStatusesByChannel_idQuery = {
  readStatusesByChannel_id?:  {
    __typename: "ModelReadStatusConnection",
    items:  Array< {
      __typename: "ReadStatus",
      id: string,
      channel_id: string,
      profile_id: string,
      date?: string | null,
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

export type ProfilesByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesByEmailQuery = {
  profilesByEmail?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ChannelProfilesByChannelChannel_idQueryVariables = {
  channelChannel_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChannelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChannelProfilesByChannelChannel_idQuery = {
  channelProfilesByChannelChannel_id?:  {
    __typename: "ModelChannelProfileConnection",
    items:  Array< {
      __typename: "ChannelProfile",
      id: string,
      channelChannel_id: string,
      profileId: string,
      channel:  {
        __typename: "Channel",
        channel_id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ChannelProfilesByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChannelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChannelProfilesByProfileIdQuery = {
  channelProfilesByProfileId?:  {
    __typename: "ModelChannelProfileConnection",
    items:  Array< {
      __typename: "ChannelProfile",
      id: string,
      channelChannel_id: string,
      profileId: string,
      channel:  {
        __typename: "Channel",
        channel_id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type OnUpdateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type OnDeleteChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel?:  {
    __typename: "Channel",
    channel_id: string,
    profiles?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        channel_id: string,
        message: string,
        profile_id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    readStatus?:  {
      __typename: "ModelReadStatusConnection",
      items:  Array< {
        __typename: "ReadStatus",
        id: string,
        channel_id: string,
        profile_id: string,
        date?: string | null,
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

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    channel_id: string,
    message: string,
    profile_id: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateReadStatusSubscriptionVariables = {
  filter?: ModelSubscriptionReadStatusFilterInput | null,
};

export type OnCreateReadStatusSubscription = {
  onCreateReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReadStatusSubscriptionVariables = {
  filter?: ModelSubscriptionReadStatusFilterInput | null,
};

export type OnUpdateReadStatusSubscription = {
  onUpdateReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReadStatusSubscriptionVariables = {
  filter?: ModelSubscriptionReadStatusFilterInput | null,
};

export type OnDeleteReadStatusSubscription = {
  onDeleteReadStatus?:  {
    __typename: "ReadStatus",
    id: string,
    channel_id: string,
    profile_id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
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
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelChannelProfileConnection",
      items:  Array< {
        __typename: "ChannelProfile",
        id: string,
        channelChannel_id: string,
        profileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateSkillInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionSkillInstanceFilterInput | null,
};

export type OnCreateSkillInstanceSubscription = {
  onCreateSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type OnUpdateSkillInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionSkillInstanceFilterInput | null,
};

export type OnUpdateSkillInstanceSubscription = {
  onUpdateSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type OnDeleteSkillInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionSkillInstanceFilterInput | null,
};

export type OnDeleteSkillInstanceSubscription = {
  onDeleteSkillInstance?:  {
    __typename: "SkillInstance",
    id: string,
    years?: number | null,
    description?: string | null,
    skill?:  {
      __typename: "SkillMaster",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    profile?:  {
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    profileSkillsId?: string | null,
    skillMasterSkillsId?: string | null,
  } | null,
};

export type OnCreateSkillMasterSubscriptionVariables = {
  filter?: ModelSubscriptionSkillMasterFilterInput | null,
};

export type OnCreateSkillMasterSubscription = {
  onCreateSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type OnUpdateSkillMasterSubscriptionVariables = {
  filter?: ModelSubscriptionSkillMasterFilterInput | null,
};

export type OnUpdateSkillMasterSubscription = {
  onUpdateSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type OnDeleteSkillMasterSubscriptionVariables = {
  filter?: ModelSubscriptionSkillMasterFilterInput | null,
};

export type OnDeleteSkillMasterSubscription = {
  onDeleteSkillMaster?:  {
    __typename: "SkillMaster",
    id: string,
    name: string,
    skills?:  {
      __typename: "ModelSkillInstanceConnection",
      items:  Array< {
        __typename: "SkillInstance",
        id: string,
        years?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        profileSkillsId?: string | null,
        skillMasterSkillsId?: string | null,
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

export type OnCreateChannelProfileSubscriptionVariables = {
  filter?: ModelSubscriptionChannelProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateChannelProfileSubscription = {
  onCreateChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateChannelProfileSubscriptionVariables = {
  filter?: ModelSubscriptionChannelProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChannelProfileSubscription = {
  onUpdateChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteChannelProfileSubscriptionVariables = {
  filter?: ModelSubscriptionChannelProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChannelProfileSubscription = {
  onDeleteChannelProfile?:  {
    __typename: "ChannelProfile",
    id: string,
    channelChannel_id: string,
    profileId: string,
    channel:  {
      __typename: "Channel",
      channel_id: string,
      profiles?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      readStatus?:  {
        __typename: "ModelReadStatusConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
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
        __typename: "ModelSkillInstanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelChannelProfileConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
