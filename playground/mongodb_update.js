const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        console.log('Unable to Connect to MongoDb Server')
    }
    console.log('Connect to MongoDB server');

    //update 
    // db.collection('Todos').findOneAndUpdate({
    //     _id : ObjectID("5ae986ba1a14a43758139680"),
    // },{
    //     $set : {
    //         complete: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });


    // update + incred
    db.collection('Todos').findOneAndUpdate({
        _id : ObjectID("5ae986ba1a14a43758139680"),
    },{
        $set : {
            complete: true
        },
        $inc : {
            num : 1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    // db.close();
});