/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChannel = /* GraphQL */ `
  query GetChannel($channel_id: ID!) {
    getChannel(channel_id: $channel_id) {
      channel_id
      profiles {
        items {
          id
          channelChannel_id
          profileId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          channel_id
          message
          profile_id
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      readStatus {
        items {
          id
          channel_id
          profile_id
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $channel_id: ID
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChannels(
      channel_id: $channel_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        channel_id
        profiles {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        readStatus {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChannels = /* GraphQL */ `
  query SyncChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        channel_id
        profiles {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        readStatus {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      channel_id
      message
      profile_id
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channel_id
        message
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        channel_id
        message
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReadStatus = /* GraphQL */ `
  query GetReadStatus($id: ID!) {
    getReadStatus(id: $id) {
      id
      channel_id
      profile_id
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReadStatuses = /* GraphQL */ `
  query ListReadStatuses(
    $filter: ModelReadStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channel_id
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReadStatuses = /* GraphQL */ `
  query SyncReadStatuses(
    $filter: ModelReadStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReadStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        channel_id
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      first_name
      last_name
      email
      accepting
      region_location
      country_location
      primary_language
      secondary_language
      tetrary_language
      bio
      skills {
        items {
          id
          years
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profileSkillsId
          skillMasterSkillsId
        }
        nextToken
        startedAt
      }
      channels {
        items {
          id
          channelChannel_id
          profileId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $id: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        first_name
        last_name
        email
        accepting
        region_location
        country_location
        primary_language
        secondary_language
        tetrary_language
        bio
        skills {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        email
        accepting
        region_location
        country_location
        primary_language
        secondary_language
        tetrary_language
        bio
        skills {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkillInstance = /* GraphQL */ `
  query GetSkillInstance($id: ID!) {
    getSkillInstance(id: $id) {
      id
      years
      description
      skill {
        id
        name
        skills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      profile {
        id
        first_name
        last_name
        email
        accepting
        region_location
        country_location
        primary_language
        secondary_language
        tetrary_language
        bio
        skills {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileSkillsId
      skillMasterSkillsId
    }
  }
`;
export const listSkillInstances = /* GraphQL */ `
  query ListSkillInstances(
    $id: ID
    $filter: ModelSkillInstanceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSkillInstances(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        years
        description
        skill {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileSkillsId
        skillMasterSkillsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkillInstances = /* GraphQL */ `
  query SyncSkillInstances(
    $filter: ModelSkillInstanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillInstances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        years
        description
        skill {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileSkillsId
        skillMasterSkillsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkillMaster = /* GraphQL */ `
  query GetSkillMaster($id: ID!) {
    getSkillMaster(id: $id) {
      id
      name
      skills {
        items {
          id
          years
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profileSkillsId
          skillMasterSkillsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSkillMasters = /* GraphQL */ `
  query ListSkillMasters(
    $id: ID
    $filter: ModelSkillMasterFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSkillMasters(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        skills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkillMasters = /* GraphQL */ `
  query SyncSkillMasters(
    $filter: ModelSkillMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        skills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChannelProfile = /* GraphQL */ `
  query GetChannelProfile($id: ID!) {
    getChannelProfile(id: $id) {
      id
      channelChannel_id
      profileId
      channel {
        channel_id
        profiles {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        readStatus {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      profile {
        id
        first_name
        last_name
        email
        accepting
        region_location
        country_location
        primary_language
        secondary_language
        tetrary_language
        bio
        skills {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChannelProfiles = /* GraphQL */ `
  query ListChannelProfiles(
    $filter: ModelChannelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannelProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelChannel_id
        profileId
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChannelProfiles = /* GraphQL */ `
  query SyncChannelProfiles(
    $filter: ModelChannelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChannelProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        channelChannel_id
        profileId
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const byChannelAndDate = /* GraphQL */ `
  query ByChannelAndDate(
    $channel_id: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byChannelAndDate(
      channel_id: $channel_id
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channel_id
        message
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const readStatusesByChannel_id = /* GraphQL */ `
  query ReadStatusesByChannel_id(
    $channel_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReadStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readStatusesByChannel_id(
      channel_id: $channel_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channel_id
        profile_id
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const profilesByEmail = /* GraphQL */ `
  query ProfilesByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        accepting
        region_location
        country_location
        primary_language
        secondary_language
        tetrary_language
        bio
        skills {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const channelProfilesByChannelChannel_id = /* GraphQL */ `
  query ChannelProfilesByChannelChannel_id(
    $channelChannel_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChannelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelProfilesByChannelChannel_id(
      channelChannel_id: $channelChannel_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelChannel_id
        profileId
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const channelProfilesByProfileId = /* GraphQL */ `
  query ChannelProfilesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChannelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelProfilesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelChannel_id
        profileId
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        profile {
          id
          first_name
          last_name
          email
          accepting
          region_location
          country_location
          primary_language
          secondary_language
          tetrary_language
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
