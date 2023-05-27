const express = require('express');
const morgan = require('morgan');
const path = require('path')
const chalk = require('chalk')
const debug = require('debug')('dash-config')
//const data = require('./src/data..') the path and name of your .json file

const app = express();
const PORT = process.env.PORT
const indexRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

indexRouter.route('/').get((req, res) => {
    res.render('index')
})
indexRouter.route('/todolist').get((req, res) => {
    res.render('todolist')
    
})

app.use('/index', indexRouter);

app.get('/', (req, res) => {
    res.render('login');
})

app.listen(PORT, () => {
    debug(`Listening to port ${chalk.green(PORT)}`);
})
