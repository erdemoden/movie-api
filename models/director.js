const mongoose = require('mongoose');
const schema = mongoose.Schema;

const directorschema = new schema({
name: String,
surname: String,
bio: String,
created_date : {
   type: Date,
   default : Date.now 
}
});
module.exports = mongoose.model('director',directorschema);