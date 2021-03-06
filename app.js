var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var route=require('./routes');
var common = require('./middlewares/common');
var auth = require('./middlewares/auth');
var error = require('./middlewares/error');
var config = require('./config')
var app = express();

var staticDir = path.join(__dirname, 'public');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "steelsearcher",
    store: new MongoStore({
    url: config.db_connect
    }),
    resave: true,
    saveUninitialized: true
}));

app.use('/public', express.static(staticDir));
app.use(common.golabal_setting);
app.use(auth.auth);
route(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(error.errorHandle);
}


// production error handler
// no stacktraces leaked to user
app.use(error.errorHandle);

module.exports = app;
