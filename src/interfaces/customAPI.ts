/* tslint:disable */
/* eslint-disable */
//  customized version of ../API.ts

export type ListProfilesQuery = {
  listProfiles?: {
    __typename: "ModelProfileConnection",
    items: Array<{
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
      skills?: {
        items: Array<{
          __typename: "SkillsInProfileList",
          skill: {
            id: string,
            name: string
          }
        }>
        __typename: "ModelProfileSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null>,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListChannelIdByProfileIdQuery = {
  channelProfilesByProfileId?: {
    __typename: "ModelChannelProfileConnection",
    items: Array<{
      __typename: "ChannelProfile",
      id: string,
      channelChannel_id: string,
      profileId: string,
      channel: {
        __typename: "Channel",
        channel_id: string,
        createdAt: string,
        updatedAt: string,
        readStatus: {
          items: Array<{
            id: string,
            date: string,
            profile_id: string
          }>
        }
        messages: {
          items: Array<{
            message: string
            date: string
            profile_id: string
          }>
        },
        profiles: {
          items: Array<{
            profile: {
              id: string,
              last_name: string,
              first_name: string
            }
          }>
        }
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null>,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};