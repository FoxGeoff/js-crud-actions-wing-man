const express = require('express');
const router = express.Router();
const productsRouter = require('./products');
// const accountsRouter = require('./accounts');

module.exports = function (db) {
  // setup for accounts
  //TODO: router.use(accountsRouter(db));

  // setup for products
  router.use(productsRouter(db));

  return router;
};
