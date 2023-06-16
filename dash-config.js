const express = require('express');
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('dash-config');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT
const indexRouter = require('./src/routes/indexRouter');
const registerPageRouter = require('./src/routes/registerPageRouter');
const authRouter = require('./src/routes/authRouter')

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: 'rcasasdb'}));

require('./src/config/passport.js')(app)

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/index', indexRouter);
app.use('/registerPage', registerPageRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.render('login');
})

app.listen(PORT, () => {
    debug(`Listening to port ${chalk.green(PORT)}`);
})
