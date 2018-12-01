var express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
var url = require('url');
var app = express();
app.use(bodyParser.json());

var router = express.Router();
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ecommerce-withnode",
    password: "12345"
  });

router.get('/', function(req, res, next) {
  //res.send('Express RESTful API');
   con.query("SELECT * FROM users", function (err, result, fields) {
     if (err) throw err;
     res.send(result);
     });
});

router.post('/signup', bodyParser.json(),function(req, res, next) {
  var first_name = req.body.fname;
  var last_name = req.body.lname;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var password = req.body.pass;
  var sql = "INSERT INTO users (first_name,last_name,email,password,mobile)"+
  //"VALUES ('"+first_name+"','','','',9898989898)";
  `VALUES ('${first_name}','${last_name}','${email}','${password}','${mobile}')`;
  
  con.query(sql, function (err, result) {
    if (err){
      res.send({'status':false,'err':err});
    }else{
      res.send({'status':true});
    }
  });
});

router.post('/login', bodyParser.json(),function(req, res, next) {
  var email = req.body.email;
  var pass = req.body.pass;
  var sql = "select count(id) from users where email='"+email+"' and password = '"+pass+"'";  
  con.query(sql, function (err, result) {
    if (err){
      res.send({'status':false,'err':err,'msg':'error in query'});
    }else{
      if (result.length>0){
        res.send({'status':true,'msg':'Login Successfully','statusCode':200});
      }else{
        res.send({'status':true,'msg':'Username and password not match..','statusCode':201});
      }
      
    }
  });
});



module.exports = router;
