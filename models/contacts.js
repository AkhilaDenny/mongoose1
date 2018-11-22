var express = require('express');
var mongoose=require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Comment = new Schema({
  id: ObjectId,
  name: { type: String},
  phoneNo: { type: Number}
});


const MyModel = mongoose.model('contact', Comment);
const m = new MyModel;
m.save(); 
    
let Contacts= {}
//get all heros from the database
Contacts.getAll = function(){
	return new Promise(function(resolve,reject){

			//create connection to database
			var connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');

			//const instance = new MyModel();

		   	MyModel.find({}, function (err, docs) {
		   		console.log('docs' + docs)
		    	if(err){
		    		console.log(err);
		    		console.log('ERR :: fetching data from database.');
		    		reject();
		    	}
		    	else{
		    		//console.log(result);
		    		//console.log(fields);
		    		console.log(docs);
		    		resolve(docs);
		    	}
			});
		});
   }

Contacts.saveNew = function(newContact){
		return new Promise(function(resolve,reject){

   // console.log('newContact.phone' + newContact.phone)
        const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
        var newCont = new MyModel({
            name: `${newContact.name}`,
            phoneNo: `${newContact.phoneNo}`
        })
        newCont.save(function(err,result,fields){
            if (err) {
                console.log(err);
                console.log('ERR :: Saving data into database..');
            }
            else{

		        resolve();
		    	}


        });
    });
}




     module.exports = Contacts;
 