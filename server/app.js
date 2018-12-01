var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var appRouter = require('./api/routes/index');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT,GET,DELETE,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization,' +
      ' Access-Control-Allow-Credential');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use('/', appRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ecommerce-withnode",
    password: "12345"
  });

  con.connect(function(err) {
     if (err) throw err;
    console.log("Connected!");
  });

module.exports = app;