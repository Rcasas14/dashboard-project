const express = require('express');
const morgan = require('morgan');
const path = require('path')
const chalk = require('chalk')
const debug = require('debug')('dash-config')

const app = express();
const PORT = process.env.PORT

app.use(morgan('tiny'));
//app.use(express.static(path.join(__dirname, '/src/')));


app.get('/', (req, res) => {
    res.send('WEB PAGE NOT FOUND ERROR 404')
})

app.listen(PORT, () => {
    debug(`Listening to port ${chalk.green(PORT)}`);
})
