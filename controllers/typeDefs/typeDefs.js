const { gql } = require('apollo-server-express');
const { buildSchema } = require('graphql');

const defs = `
    type Query {
        hello: String!
        cats: [Cat!]!
        cat(id: ID): Cat!
    }

    type Cat {
        id: ID!
        name: String!
    }

    type Mutation {
        createCat(name: String!): Cat!
    }
`;

module.exports.typeDefs = gql`${defs}`;

module.exports.schema = buildSchema(`${defs}`);
