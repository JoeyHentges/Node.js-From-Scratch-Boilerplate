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
`;

module.exports.schema = buildSchema(`${defs}`);
