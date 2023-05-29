const express = require('express');

const indexRouter = express.Router();
//const data = require('./src/data..') the path and name of your .json file



indexRouter.route('/').get((req, res) => {
    res.render('index')
})
indexRouter.route('/todolist').get((req, res) => {
    res.render('todolist')

})


module.exports = indexRouter;