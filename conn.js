var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://{user}:{password}@{host}:{port}/{database}", function(err, db) {
if(!err) {
    console.log("You are connected!");
  };
db.close();
});