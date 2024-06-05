const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const { getAll, create, getOne, update, remove } = require('../controllers/city.controller');

const cityRouter = express.Router();

cityRouter.route('/cities')
    .get(getAll)
    .post(verifyJWT, create);

cityRouter.route('/cities/:id')
    .get(getOne)
    .put(verifyJWT, update)
    .delete(verifyJWT, remove);

module.exports = cityRouter;
