var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
const ejs = require('ejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.get('/', (req, res) => {
  // Render the "index.ejs" file
  res.render('index');
});

app.use(cors());
app.use(express.json());
app.use("/",require("./routes/EmployeeRouter"));

// view engine setup
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Senwell')
.then((res) => {
  console.log("connection successful");
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var server = app.listen(8009, () =>{
  var host = "127.0.0.1";
  var port = server.address().port;

  console.log(`listening at http://${host}:${port}`); 
});
module.exports = app;
