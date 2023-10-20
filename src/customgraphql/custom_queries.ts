/* tslint:disable */
/* eslint-disable */

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
          items {
            years
            skill {
              id
              name
            }
          }
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

export const listChannelIdByProfileId = /* GraphQL */ `
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
        channel {
          readStatus(filter: { profile_id: { eq: $profileId}}){
            items {
              id
              date
              profile_id
            }
          }
          messages(sortDirection: DESC, limit: 1) {
            items {
              message
              date
              profile_id
            }
          }
          profiles(filter: { profileId: {ne: $profileId}}) {
            items {
              profile {
                id
                last_name
                first_name
              }
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;