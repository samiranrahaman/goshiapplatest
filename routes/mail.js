var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
var Post = require('../models/Mail.js');
 
/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
	
		
           var transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: 'medley1109@gmail.com',
					pass: 'Admin@123'
				}
			}); 

			/* let transporter = nodeMailer.createTransport({
				  host: 'sg2plcpnl0248.prod.sin2.se',
				  port: 465,
				  //secure: true,
				  auth: {
					  user: 'testmail@goshi-india.com',
					  pass: 'testmail'
				  }
			  }); */
			  
			  		  
		
	  
			console.log('created');
			transporter.sendMail({
			from: 'samiran1109@gmail.com',
			  to: 'samiran1109@gmail.com',
			  subject: 'hello world new!',
			  text: 'hello worldw!'
			});
			
			
  Post.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  }); 
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {

  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
         /*  var transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: 'medley1109@gmail.com',
					pass: 'Admin@123'
				}
			}); */
			
			
			 /*  var transporter = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
    //port: 465,
	 host:'sg2plcpnl0248.prod.sin2.secureserver.net'
	 port: 25,
    secure: true, // use SSL
    auth: {
        // user: 'medley1109@gmail.com',
       // pass: 'Admin@123'
	   user: 'testmail@goshi-india.com',
					  pass: 'testmail'
    }
});  */

/*            var smtpTransport = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 25,
				secure: true, // use SSL
				auth: {
					user: 'medley1109@gmail.com', 
					pass: 'Admin@123'
				}
			});

			console.log('created');
			transporter.sendMail({
			from: 'samiran1109@gmail.com',
			  to: 'samiran1109@gmail.com',
			  subject: 'hello world new!',
			  text: 'hello worldw!'
			}); */
			
			
			var transporter = nodemailer.createTransport({
				//host: 'sg2plcpnl0248.prod.sin2.secureserver.net',
				host: 'mail.goshi-india.com',
				port: 25,
				secure: false, // use SSL
				auth: {
					 user: 'testmail@goshi-india.com',
								  pass: 'testmail'
				}
			}); 

			console.log('created');
			transporter.sendMail({
			from: 'samiran1109@gmail.com',
			  to: 'samiran1109@gmail.com',
			  subject: 'hello world111!',
			  text: 'hello world222!'
			});



			res.json({ status: 'success' })
  
           //res.json('["status":"success"]');
 /*  Post.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });  */
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;