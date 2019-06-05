/*
-------------------------------------------------------------------
This file is in charge of initializing everything from the apps:
 - The app is added to the database
 - App routes are added to the server
 - App Agenda tasks are initialized
--------------------------------------------------------------------
*/

const express = require('express');
const { graphql } = require('graphql');
const { App } = require('./App.model');
const { appResolvers } = require('./App.resolvers');
const { appTypedefs } = require('./App.typedefs');
const { apps } = require('./app.list');

const router = express.Router();

const checkForApp = async (appName) => {
  const result = await graphql(appTypedefs, `{ getAppByName(appName: "${appName}") {appName} }`, appResolvers.Query).then(response => response.data.getAppByName);
  if (result === null) { return false; }
  if (result.appName === appName) { return true; }
  return false;
};

const initializeApp = async (appName, appConfig) => {
  if (!await checkForApp(appName)) {
    const app = new App({
      appName,
      appConfig
    });
    await app.save();
  }
};

for (let i = 0; i < apps.length; i += 1) {
  router.use(apps[i].url, apps[i].routes);
  apps[i].tasks;
  initializeApp(apps[i].name, apps[i].config);
}

module.exports.router = router;
