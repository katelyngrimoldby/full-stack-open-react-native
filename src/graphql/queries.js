import { gql } from "@apollo/client"

export const GET_REPOS = gql`
query {
  repositories {
    edges {
      node {
        id
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
      }
    }
  }
}
`

export const ME = gql`
query {
  me {
    username
  }
}
`