var express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
var url = require('url');
var app = express();
app.use(bodyParser.json());
var fs = require('fs');
var mailer = require('nodemailer');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
// mailer.SMTP = {
//     host: 'gmail.com', 
//     port:587,
//     use_authentication: true, 
//     user: 'lavkush.gupta@icorprated.com', 
//     pass: 'Kush@0000'
// };

var transporter = mailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'lavkush.gupta@icorprated.com',
      pass: 'Kush@0000'
  }
});

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
        
          const options = {
            from: 'lavkush.maihar01@gmail.com',
            to: 'lavkush.gupta@icorprated.com',
            subject: 'Login Successfully',
            text: 'You have login currently using Ubantu!',
            attachments: [
               {
                'filename':'test4.jpg',
                //'path': ABSPATH + '/attachment.txt'
                 path:'/root/Documents/kush/angular-ecommerce/test4.jpg'
               }
            ]
        };
        transporter.sendMail(options, (error, info) =>{
              if(error) {
                  //...
              } else {
                  //...
              }
          });
          console.log(ABSPATH + '/attachment.txt');
        res.send({'status':true,'msg':'Login Successfully','statusCode':200});
  
      // End Mail Function

      }else{
        res.send({'status':true,'msg':'Username and password not match..','statusCode':201});
      }
      
    }
  });
});

module.exports = router;
