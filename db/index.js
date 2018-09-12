const conn = require('./conn');
const Product = require('./Product');

const syncAndSeed = ()=> {
  return conn.sync({ force: true })
    .then(()=> {
      return Promise.all([
        Product.create({ name: 'foo', rating: 8 }),
        Product.create({ name: 'bar', rating: 10 }),
        Product.create({ name: 'bazz', rating: 3}),
      ]);
    });
};

module.exports = {
  models: {
    Product
  },
  syncAndSeed
};
