const { routes } = require('./routes/routes');

const config = {
  featuredCats: [
    {
      id: '5cf75f62b769961f58dc2d44',
      title: 'Jimmy'
    },
    {
      id: '5cf75f62b769961f58dc2d44',
      title: 'Bob'
    }
  ]
};

const contents = {
  name: 'App_1',
  url: '/app_1',
  config,
  routes,
  //tasks
};

module.exports = contents;
