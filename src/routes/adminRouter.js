const express = require('express');
const debug = require('debug')('dash-config:adminRouter');
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

const adminRouter= express.Router()

adminRouter.route('/').get((req, res)=>{
    const url = `mongodb+srv://reycassy122:qFxQoxN9ciqb0gOY@rcasasdb.8qlz2gr.mongodb.net/?retryWrites=true&w=majority`;
    const dbname = 'dashboard';

    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url)
            debug('Connected to the mongo DB')

            const db = client.db(dbname);

        } catch (error) {
            debug(error.stack);
        }
        client.close();
    }())
})

module.exports = adminRouter;