const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        console.log('Unable to Connect to MongoDb Server')
    }
    console.log('Connect to MongoDB server');

    //  db.collection('Todos').find({
    //      _id : new ObjectID('5ae986ba1a14a43758139680')
    //  }).toArray().then((docs)=>{
    //         console.log('Todos ');
    //         console.log(JSON.stringify(docs, undefined,2));
    //     }, (err)=>{
    //         console.log('Unable to fecth todos', err);
    //     });
    
    // db.collection('Todos').find().count().then((count)=>{
    //         console.log('Todos count :' + count);
    //     }, (err)=>{
    //         console.log('Unable to fecth todos', err);
    //     });


    db.collection('User').find({name: 'Andrew'}).toArray().then((docs)=>{
        console.log('User');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err)=>{
        console.log('Unable to fecth User' , err);
    });

    // db.close();
});