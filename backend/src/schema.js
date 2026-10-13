export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type Mutation {
    addUser(input: CreateUserInput!): User!

    deleteUser(id: ID!): User
  }

`;