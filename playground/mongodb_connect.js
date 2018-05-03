const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        console.log('Unable to Connect to MongoDb Server')
    }
    console.log('Connect to MongoDB server');
   

    db.collection('test').insertOne({
        text: 'Something to do',
        complete : false
    }, (err, result)=> {
       if (err) {
           return console.log('Unable to insert todo' , err);
       } 

       console.log(JSON.stringify(result.ops,undefined,2))
    });
    db.close();
});