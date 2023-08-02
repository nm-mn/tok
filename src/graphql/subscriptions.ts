/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onCreateChannel(filter: $filter) {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onUpdateChannel(filter: $filter) {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel($filter: ModelSubscriptionChannelFilterInput) {
    onDeleteChannel(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateReadStatus = /* GraphQL */ `
  subscription OnCreateReadStatus(
    $filter: ModelSubscriptionReadStatusFilterInput
  ) {
    onCreateReadStatus(filter: $filter) {
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
export const onUpdateReadStatus = /* GraphQL */ `
  subscription OnUpdateReadStatus(
    $filter: ModelSubscriptionReadStatusFilterInput
  ) {
    onUpdateReadStatus(filter: $filter) {
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
export const onDeleteReadStatus = /* GraphQL */ `
  subscription OnDeleteReadStatus(
    $filter: ModelSubscriptionReadStatusFilterInput
  ) {
    onDeleteReadStatus(filter: $filter) {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateSkillInstance = /* GraphQL */ `
  subscription OnCreateSkillInstance(
    $filter: ModelSubscriptionSkillInstanceFilterInput
  ) {
    onCreateSkillInstance(filter: $filter) {
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
export const onUpdateSkillInstance = /* GraphQL */ `
  subscription OnUpdateSkillInstance(
    $filter: ModelSubscriptionSkillInstanceFilterInput
  ) {
    onUpdateSkillInstance(filter: $filter) {
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
export const onDeleteSkillInstance = /* GraphQL */ `
  subscription OnDeleteSkillInstance(
    $filter: ModelSubscriptionSkillInstanceFilterInput
  ) {
    onDeleteSkillInstance(filter: $filter) {
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
export const onCreateSkillMaster = /* GraphQL */ `
  subscription OnCreateSkillMaster(
    $filter: ModelSubscriptionSkillMasterFilterInput
  ) {
    onCreateSkillMaster(filter: $filter) {
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
export const onUpdateSkillMaster = /* GraphQL */ `
  subscription OnUpdateSkillMaster(
    $filter: ModelSubscriptionSkillMasterFilterInput
  ) {
    onUpdateSkillMaster(filter: $filter) {
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
export const onDeleteSkillMaster = /* GraphQL */ `
  subscription OnDeleteSkillMaster(
    $filter: ModelSubscriptionSkillMasterFilterInput
  ) {
    onDeleteSkillMaster(filter: $filter) {
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
export const onCreateChannelProfile = /* GraphQL */ `
  subscription OnCreateChannelProfile(
    $filter: ModelSubscriptionChannelProfileFilterInput
  ) {
    onCreateChannelProfile(filter: $filter) {
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
export const onUpdateChannelProfile = /* GraphQL */ `
  subscription OnUpdateChannelProfile(
    $filter: ModelSubscriptionChannelProfileFilterInput
  ) {
    onUpdateChannelProfile(filter: $filter) {
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
export const onDeleteChannelProfile = /* GraphQL */ `
  subscription OnDeleteChannelProfile(
    $filter: ModelSubscriptionChannelProfileFilterInput
  ) {
    onDeleteChannelProfile(filter: $filter) {
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
