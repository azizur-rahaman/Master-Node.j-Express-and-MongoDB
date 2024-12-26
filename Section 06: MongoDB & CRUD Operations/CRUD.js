/*
 ! To Create a Database Collection
    * use testDB
 
 ! To Insert a Document
    * db.users.insertOne({name: "Max", age: 29})
    * db.users.insertOne({name: "Anna", age: 28})
    * db.users.insertMany([{name: "Chris", age: 35}, {name: "Sarah", age: 27}])
  
 ! To Find a Document
    * db.users.find()
    * db.users.find({name: "Max"})
    * db.users.find({age: 29})
    * db.users.find({age: {$gt: 30}})
    * db.users.find({age: {$gte: 30}})
    * db.users.find({age: {$lt: 30}})
    * db.users.find({age: {$lte: 30}})
    
  ! To Update a Document
    * db.users.updateOne({name: "Max"}, {$set: {age: 30}})
    * db.users.updateMany({}, {$set: {status: "A"}})
    * db.users.updateMany({}, {$set: {status: "A"}}, {upsert: true})
    * db.users.updateMany({}, {$set: {status: "A"}}, {upsert: true, multi: true})
    * db.users.updateMany({}, {$set: {status: "A"}}, {upsert: true, multi: true, writeConcern: {w: 1}})
    * db.users.updateMany({}, {$set: {status: "A"}}, {upsert: true, multi: true, writeConcern: {w: 1, j: true}})
  
  ! To Delete a Document
    * db.users.deleteOne({name: "Max"})
    * db.users.deleteMany({status: "A"})
    * db.users.deleteMany({})
    * db.users.deleteMany({}, {writeConcern: {w: 1}})
    * db.users.deleteMany({}, {writeConcern: {w: 1, j: true}})
    
*/