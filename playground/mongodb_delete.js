const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        console.log('Unable to Connect to MongoDb Server')
    }
    console.log('Connect to MongoDB server');

    //deleteMany
        // db.collection('Todos').deleteMany({text : 'eating'}).then((result)=>{
        //     console.log(result);
        // });
    //deleteOne
        // db.collection('Todos').deleteOne({text : 'eating'}).then((result)=> {
        //     console.log(result);
        // });
    //findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
        //     console.log(result);
        // });
    // db.close();
});