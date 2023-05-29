const express = require('express');
const registerPageRouter = express.Router();

registerPageRouter.route('/').get((req, res) => {
    res.render('registerPage')
})

module.exports = registerPageRouter;