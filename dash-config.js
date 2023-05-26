const express = require('express');
const morgan = require('morgan');
const path = require('path')
const chalk = require('chalk')
const debug = require('debug')('dash-config')

const app = express();
const PORT = process.env.PORT

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    debug(`Listening to port ${chalk.green(PORT)}`);
})
