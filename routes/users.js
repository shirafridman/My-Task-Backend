var express = require('express');
var router = express.Router();
var listContacts = require('./listContacts.json');
var jwt= require('jsonwebtoken')

router.get('/',verifyLoggedIn, function(req, res, next) {
      res.contentType('application/json');
      res.send(JSON.stringify(listContacts));

});
function verifyLoggedIn(req, res, next) {
  const header = req.headers['access_token'];
  console.log('header', req.headers)
    if(header != 'null')
    {
      jwt.verify(header,"ApplictionsAreGood",function(err){
        if(err) {
          res.sendStatus(403);
        } 
        else {
          next();
        }
      }); 
     }
     else
     {
        res.sendStatus(403);
     }
}


module.exports = router;
