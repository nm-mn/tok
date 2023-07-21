/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listChannelsBySender = /* GraphQL */ `
  query ListChannelsBySender($profileId: ID!) {
    listChannelsBySender(profileId: $profileId) {
      channel_id
      profiles {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messages {
        items {
          message
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelMessagesChannel_id
        }
        nextToken
        startedAt
      }
      readStatus {
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        readStatusChannelChannel_id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      channelReadStatusId
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($channel_id: ID!) {
    getChannel(channel_id: $channel_id) {
      channel_id
      profiles {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messages {
        items {
          message
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelMessagesChannel_id
        }
        nextToken
        startedAt
      }
      readStatus {
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        readStatusChannelChannel_id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      channelReadStatusId
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
        messages {
          nextToken
          startedAt
        }
        readStatus {
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          readStatusChannelChannel_id
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelReadStatusId
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
        messages {
          nextToken
          startedAt
        }
        readStatus {
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          readStatusChannelChannel_id
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelReadStatusId
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      channel {
        channel_id
        profiles {
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
        messages {
          nextToken
          startedAt
        }
        readStatus {
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          readStatusChannelChannel_id
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelReadStatusId
      }
      message
      sender {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      date
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      channelMessagesChannel_id
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
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
        }
        message
        sender {
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelMessagesChannel_id
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
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
        }
        message
        sender {
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelMessagesChannel_id
      }
      nextToken
      startedAt
    }
  }
`;
export const getReadStatus = /* GraphQL */ `
  query GetReadStatus($id: ID!) {
    getReadStatus(id: $id) {
      channel {
        channel_id
        profiles {
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
        messages {
          nextToken
          startedAt
        }
        readStatus {
          date
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          readStatusChannelChannel_id
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        channelReadStatusId
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      date
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      readStatusChannelChannel_id
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
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        readStatusChannelChannel_id
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
        channel {
          channel_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          channelReadStatusId
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
        date
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        readStatusChannelChannel_id
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
