const express = require('express')
const debug = require('debug')('app:authRouter');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const authRouter = express.Router();
authRouter.route('/signup').post((req, res) => {
    const { username, password } = req.body;
    const url = `mongodb+srv://reycassy122:qFxQoxN9ciqb0gOY@rcasasdb.8qlz2gr.mongodb.net/?retryWrites=true&w=majority`;
    const dbname = 'dashboard';

    (async function addUser() {
        let client;
        try {
            client = await MongoClient.connect(url);

            const db = client.db(dbname);
            const user = { username, password };
            const results = await db.collection('user').insertOne(user);
            debug(results);
            req.login(results.ops[0], () => {
                res.redirect('/auth/profile');
            })
        } catch (error) {
            debug(error)

        } finally {
            if (client) {
                client.close();
            }
        }

    }())


});

authRouter.route('/profile').get((req, res) => {
    res.json(req.user);
})

module.exports = authRouter;