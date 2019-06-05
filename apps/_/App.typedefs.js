const { buildSchema } = require('graphql');

const defs = `
    scalar Date
    scalar JSON

    type App {
        id: ID!
        appName: String
        dateCreated: Date!
        appConfig: JSON!
    }

    type Query {
        getApps: [App!]!
        getAppById(id: ID!): App
        getAppByName(appName: String!): App
    }
`;

module.exports.appTypedefs = buildSchema(`${defs}`);
