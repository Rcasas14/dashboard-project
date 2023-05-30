const express = require('express')
const debug = require('debug')('dash-config:authRouter');
// const { MongoClient } = require('mongodb');
// const { ObjectId } = require('mongodb');

const authRouter = express.Router();


authRouter.route('/signup').post((req, res)=>{
    res.json(req.body)
})

module.exports = authRouter;