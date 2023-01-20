var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyparser = require('body-parser')
var app = express();
var url = require('url');


app.get('/',function(req,res){
    console.log("Get Method");
   // res.send("Welcome to java get");
   res.reander('form');
});

app.use(bodyparser.urlencoded({extended : true}))

app.post('/enrollment',function(req,res){
     //console.log("Post Method enrollment");
   // res.send("Welcome to Post Method");

    var url ="mongodb://0.0.0.0:27017/";

    MongoClient.connect(url,function(err,db){
        if (err) throw err;

        var dbo = db.db("mydb");

        var myobj = {First_Name: req.body.first_name,
                     Last_Name: req.body.last_name
                   };
        
        dbo.collection("nikunj").insertOne(myobj,function(err,res){
            if (err) throw err;
            console.log("1 document inserted");
            console.log(myobj);
            db.close();
        });
    });
});








app.get('/delete',function(req,res)
{
  console.log("Record Deleted 11111111111");
var url = "mongodb://0.0.0.0:27017/";

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  console.log("Record Deleted 22222222");
  console.log(req.url);
  var url_parts = url.parse(req.url,true);
  /*var myobj = {First_Name: req.body.first_name,Last_Name: req.body.last_name};
  console.log(myobj);*/
  var query = url_parts.query;
  console.log('query');
  dbo.collection("shubham tiwari").deleteOne(myobj,function(err,res)
  {
    if(err) throw err;
    console.log("Record Deleted");
    db.close();
  });
});
});


app.get('/delete',function(req,res)
{
  console.log("Record Deleted 11111111111");
var url = "mongodb://0.0.0.0:27017/";

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  console.log("Record Deleted 22222222");
  console.log(req.url);
  var url_parts = url.parse(req.url,true);
  /*var myobj = {First_Name: req.body.first_name,Last_Name: req.body.last_name};
  console.log(myobj);*/
  var query = url_parts.query;
  console.log('query');
  dbo.collection("shubham tiwari").deleteOne(myobj,function(err,res)
  {
    if(err) throw err;
    console.log("Record Deleted");
    db.close();
  });
});
});




//  app.get('/deleteuser/:id', function(req, res) { 

//   var db = req.db;
//       var dbo = db.db("mydb");
//     var uid = req.params.id.toString();
//     var collection = db.get('usercollection');

//     collection.remove({"_id":uid}, function(err, result) { 
//         res.send( (result === 1) ? { msg: 'Deleted' } : { msg: 'error: '+ err } );
//     });

// });

// app.get('/deleteuser/:id', function(req, res) { 
//   var dbo = db.db("mydb");
//   var uid = req.body.id;
//   var collection = db.get('student');
//   dbo.collection("shubham tiwari").deleteOne(myobj,function(err,res){
//             if(err) throw err;
//             console.log("Record Deleted");
//             db.close();
//   })
// })
   
 




var server = app.listen(3000,function(){});
// app.listen(3000, ()=> {
//   console.log("Server running :3000 ");
// })