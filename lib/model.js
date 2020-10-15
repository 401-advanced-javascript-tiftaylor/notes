const mongoose = require('mongoose');

// create schema
const {  Schema } = mongoose;

const notesSchema = new Schema({
  text: String,
  category: String
});


// create and export model 
module.exports = mongoose.model('Notes', notesSchema);