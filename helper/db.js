const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb+srv://erdemoden:elmayiyen5@movie-api.icdyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useMongoClient: true});
    mongoose.connection.on('open',()=>{
        console.log('Mongodb connected');
    });
    mongoose.connection.on('error',(err)=>{
        console.log("error",err);
    });

    mongoose.Promise = global.Promise;
}