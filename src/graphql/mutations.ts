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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createReadStatus = /* GraphQL */ `
  mutation CreateReadStatus(
    $input: CreateReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    createReadStatus(input: $input, condition: $condition) {
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
export const updateReadStatus = /* GraphQL */ `
  mutation UpdateReadStatus(
    $input: UpdateReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    updateReadStatus(input: $input, condition: $condition) {
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
export const deleteReadStatus = /* GraphQL */ `
  mutation DeleteReadStatus(
    $input: DeleteReadStatusInput!
    $condition: ModelReadStatusConditionInput
  ) {
    deleteReadStatus(input: $input, condition: $condition) {
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
