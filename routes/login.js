var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Login = require('../models/Login.js');

import apicache from 'apicache'
let cache = apicache.middleware

/* GET home page. */
router.get('/', cache('5 minutes'),function(req, res, next) {
  //res.send('Express RESTful API');
  Login.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Login Post */
router.post('/', function(req, res, next) {
  /* Booknew.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  }); */
  console.log(req.body.username);
  Login.findOne({ 'username': req.body.username },function (err, products) {
    if (err) return next(err);
	console.log(products);
	console.log(req.body.password);
	 if (products) {
		 if(products.password==req.body.password)
		 {
			 res.json({ status: 'success' })
		 }
		 else
		 {
			 res.json({ status: 'Error' })
		 }
		 
		 
	 }
    //res.json(products);
  });
  
});


module.exports = router;


