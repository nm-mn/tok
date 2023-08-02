/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createReadStatus = /* GraphQL */ `
  mutation CreateReadStatus(
    $input: CreateReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    createReadStatus(input: $input, condition: $condition) {
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
export const updateReadStatus = /* GraphQL */ `
  mutation UpdateReadStatus(
    $input: UpdateReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    updateReadStatus(input: $input, condition: $condition) {
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
export const deleteReadStatus = /* GraphQL */ `
  mutation DeleteReadStatus(
    $input: DeleteReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    deleteReadStatus(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createSkillInstance = /* GraphQL */ `
  mutation CreateSkillInstance(
    $input: CreateSkillInstanceInput!
    $condition: ModelSkillInstanceConditionInput
  ) {
    createSkillInstance(input: $input, condition: $condition) {
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
export const updateSkillInstance = /* GraphQL */ `
  mutation UpdateSkillInstance(
    $input: UpdateSkillInstanceInput!
    $condition: ModelSkillInstanceConditionInput
  ) {
    updateSkillInstance(input: $input, condition: $condition) {
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
export const deleteSkillInstance = /* GraphQL */ `
  mutation DeleteSkillInstance(
    $input: DeleteSkillInstanceInput!
    $condition: ModelSkillInstanceConditionInput
  ) {
    deleteSkillInstance(input: $input, condition: $condition) {
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
export const createSkillMaster = /* GraphQL */ `
  mutation CreateSkillMaster(
    $input: CreateSkillMasterInput!
    $condition: ModelSkillMasterConditionInput
  ) {
    createSkillMaster(input: $input, condition: $condition) {
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
export const updateSkillMaster = /* GraphQL */ `
  mutation UpdateSkillMaster(
    $input: UpdateSkillMasterInput!
    $condition: ModelSkillMasterConditionInput
  ) {
    updateSkillMaster(input: $input, condition: $condition) {
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
export const deleteSkillMaster = /* GraphQL */ `
  mutation DeleteSkillMaster(
    $input: DeleteSkillMasterInput!
    $condition: ModelSkillMasterConditionInput
  ) {
    deleteSkillMaster(input: $input, condition: $condition) {
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
export const createChannelProfile = /* GraphQL */ `
  mutation CreateChannelProfile(
    $input: CreateChannelProfileInput!
    $condition: ModelChannelProfileConditionInput
  ) {
    createChannelProfile(input: $input, condition: $condition) {
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
export const updateChannelProfile = /* GraphQL */ `
  mutation UpdateChannelProfile(
    $input: UpdateChannelProfileInput!
    $condition: ModelChannelProfileConditionInput
  ) {
    updateChannelProfile(input: $input, condition: $condition) {
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
export const deleteChannelProfile = /* GraphQL */ `
  mutation DeleteChannelProfile(
    $input: DeleteChannelProfileInput!
    $condition: ModelChannelProfileConditionInput
  ) {
    deleteChannelProfile(input: $input, condition: $condition) {
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
