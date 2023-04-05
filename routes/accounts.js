var express = require('express');
var router = express.Router();

module.exports = function (db) {
    router.get("/accounts", (req, res) => {
        res.send('respond with a resource!');
    });

  return router;
};
