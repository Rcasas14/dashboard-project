const express = require('express');
const debug = require('debug')('dash-config:registerPageRouter')
const registerPageRouter = express.Router();

registerPageRouter.route('/').get((req, res) => {
    res.render('registerPage')
})

module.exports = registerPageRouter;