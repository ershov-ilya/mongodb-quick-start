var MongoClient = require('mongodb').MongoClient
let assert = require('assert')

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// insert method
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var listDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

var queryFilter = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Query found the following records");
    console.log(docs);
    callback(docs);
  });      
}

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents'); 
  // Delete document where a is 3
  collection.deleteOne({ a : 2 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

    insertDocuments(db, function() { db.close() })
    
    listDocuments(db, function() { db.close() })
    
    removeDocument(db, function() { db.close() })

    queryFilter(db, function() { db.close() })
    
    listDocuments(db, function() { db.close() })
});

