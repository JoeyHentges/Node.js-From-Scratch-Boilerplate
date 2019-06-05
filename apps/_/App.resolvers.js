const { App } = require('./App.model');

const getApps = () => App.find();

const getAppById = id => App.findById(id);

const getAppByName = name => App.findOne({ appName: new RegExp(`^${name}$`, 'i') });

// Functions condenced to be exported
const appResolvers = {
  Query: {
    getApps: () => getApps(),
    getAppById: ({ id }) => getAppById(id),
    getAppByName: ({ appName }) => getAppByName(appName)
  }
};

module.exports.appResolvers = appResolvers;
