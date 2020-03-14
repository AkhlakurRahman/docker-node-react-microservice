import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Listing {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
  }

  type Query {
    listings: [Listing!]!
    users: [User!]!
  }
`;

export default typeDefs;
