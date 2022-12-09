import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
    expiresAt
  }
}
`

export const REVIEW = gql`
mutation ($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`