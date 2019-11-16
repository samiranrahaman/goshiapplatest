var express = require('express');
var path = require('path');
var nodeMailer = require('nodemailer');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

//var book = require('./routes/book');
var post = require('./routes/post');
var login = require('./routes/login');
var product = require('./routes/product');
var technology = require('./routes/technology');
var equipment = require('./routes/equipment');
var manufacturing = require('./routes/manufacturing');
//var events = require('./routes/events'); 
var eventdata = require('./routes/eventdata');
var about = require('./routes/about');
var homecontentdata = require('./routes/homecontent');
var history = require('./routes/history');
var globalpresencedata = require('./routes/globalpresence');

var achivement = require('./routes/achivement');
var certificate = require('./routes/certificate');
var customer = require('./routes/customer');
var mail = require('./routes/mail');
var editorcontentdata = require('./routes/editorcontent');


var app = express();
//app.set('trust proxy', '8.8.8.8');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
//mongoose.connect('mongodb://goshidb:goshidb@localhost:27017/goshidb', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://localhost:27017/goshidb', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({'extended':'false'}));
//app.use(bodyParser.json({limit: '500mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '500mb', extended: true}))

app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'dist')));



app.use('/home', express.static(path.join(__dirname, 'dist')));
app.use('/jp/home', express.static(path.join(__dirname, 'dist')));
app.use('/about', express.static(path.join(__dirname, 'dist')));
app.use('/jp/about', express.static(path.join(__dirname, 'dist')));
app.use('/products', express.static(path.join(__dirname, 'dist')));
app.use('/jp/products', express.static(path.join(__dirname, 'dist')));
app.use('/technology', express.static(path.join(__dirname, 'dist')));
app.use('/jp/technology', express.static(path.join(__dirname, 'dist')));
app.use('/careers', express.static(path.join(__dirname, 'dist')));
app.use('/jp/careers', express.static(path.join(__dirname, 'dist')));
app.use('/contact', express.static(path.join(__dirname, 'dist')));
app.use('/jp/contact', express.static(path.join(__dirname, 'dist')));
app.use('/admin/create_post', express.static(path.join(__dirname, 'dist')));
app.use('/admin/product', express.static(path.join(__dirname, 'dist')));
app.use('/admin/product_edit/:id', express.static(path.join(__dirname, 'dist')));
app.use('/admin/all_post', express.static(path.join(__dirname, 'dist')));
app.use('/admin/all_product', express.static(path.join(__dirname, 'dist')));
app.use('/admin/login', express.static(path.join(__dirname, 'dist')));
app.use('/admin', express.static(path.join(__dirname, 'dist')));
app.use('/admin/dashboard', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/edit', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/equipment', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/equipment/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/equipment/edit', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/manufacturing', express.static(path.join(__dirname, 'dist')));
app.use('/admin/technology/manufacturing/add', express.static(path.join(__dirname, 'dist')));

app.use('/admin/event', express.static(path.join(__dirname, 'dist')));

app.use('/admin/event/add', express.static(path.join(__dirname, 'dist')));

app.use('/admin/event/edit', express.static(path.join(__dirname, 'dist')));
app.use('/admin/about', express.static(path.join(__dirname, 'dist')));
app.use('/admin/homecontent', express.static(path.join(__dirname, 'dist')));
app.use('/admin/editor', express.static(path.join(__dirname, 'dist')));
app.use('/admin/editor/add', express.static(path.join(__dirname, 'dist')));

app.use('/admin/codeofconduct', express.static(path.join(__dirname, 'dist')));
app.use('/admin/overview', express.static(path.join(__dirname, 'dist')));
app.use('/admin/history', express.static(path.join(__dirname, 'dist')));
app.use('/admin/info', express.static(path.join(__dirname, 'dist')));
app.use('/admin/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/edit', express.static(path.join(__dirname, 'dist')));
app.use('/admin/history/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/history/edit', express.static(path.join(__dirname, 'dist')));
app.use('/admin/globalpresence/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/globalpresence', express.static(path.join(__dirname, 'dist')));

app.use('/admin/globalpresence/edit', express.static(path.join(__dirname, 'dist')));

app.use('/admin/achivement', express.static(path.join(__dirname, 'dist')));
app.use('/admin/achivement/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/certificate', express.static(path.join(__dirname, 'dist')));
app.use('/admin/certificate/add', express.static(path.join(__dirname, 'dist')));
app.use('/admin/customer', express.static(path.join(__dirname, 'dist')));
app.use('/admin/customer/add', express.static(path.join(__dirname, 'dist')));

app.use('/post', post);
app.use('/login', login);
app.use('/product', product);
app.use('/technologydata', technology);

app.use('/equipmentdata', equipment);

app.use('/manufacturingdata', manufacturing);
//app.use('/events',events);
app.use('/eventdata',eventdata);
app.use('/aboutdata',about);
app.use('/historydata',history);
app.use('/globalpresencedata',globalpresencedata);

app.use('/achivementdata',achivement);
app.use('/certificatedata',certificate);
app.use('/customerdata',customer);
app.use('/mail', mail);
app.use('/homecontentdata',homecontentdata);
app.use('/editorcontentdata',editorcontentdata);
//mail sent

/* app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'sg2plcpnl0248.prod.sin2.se',
          port: 465,
          secure: true,
          auth: {
              user: 'testmail@goshi-india.com',
              pass: 'testmail'
          }
      });
      let mailOptions = {
          from: '"Test" <testmail@goshi-india.com>', // sender address
          //to: req.body.to, // list of receivers
          //subject: req.body.subject, // Subject line
         // text: req.body.body, // plain text body
		 to: 'samiran1109@gmail.com', // list of receivers
         subject: 'Test', // Subject line
         text: 'body', // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      }); */


// default options
//app.use(fileUpload());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
