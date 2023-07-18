/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
