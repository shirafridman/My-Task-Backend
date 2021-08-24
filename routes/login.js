var express = require('express');
var router = express.Router();
var users = require('./users.json');
var jwt= require('jsonwebtoken')

router.post('/', function(req, res, next) {
    
    const name=req.body.name;
    const email=req.body.email;
    var user = users.find(function(user){
      return user.name === name && user.email === email 
    });
    if(user == null)
    {
      res.send(null);
    }
    else 
    {
     const token=jwt.sign({user},"ApplictionsAreGood",{})
     res.status(201).json({user,token})
    }
  });
  module.exports = router;