var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 router.get('/getAllContacts',function(req, res, next)
   {
      Contacts.getAll()
      .then(function(retVal){
      res.render('contacts',{data: retVal})
  })
      .catch(console.log('ERR :: in resolving the promise'))

   });
 router.get('/saveData',function(req, res, next)
   {
      Contacts.saveNew(req.query)
      .then(function(){
      	res.redirect('/getAllContacts');
      })

    //  res.render('heros',{data: Heros.getAll()})
      .catch(console.log('ERR :: in resolving the promise'))
      
   }); 


module.exports = router;
