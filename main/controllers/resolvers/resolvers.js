const { Cat } = require('../../models/cat');

const resolvers = {
  Query: {
    hello: () => 'hello',
    cats: () => Cat.find(),
    cat: (_, { id }) => Cat.findById(id)
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    }
  }
};

module.exports.resolvers = resolvers;
