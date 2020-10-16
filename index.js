#!/usr/bin/env node

'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


// concnect to mongoose / mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  // create new Input instance
  const argv = require('minimist')(process.argv.slice(2));
  let newInput = new Input(argv);
 
  // create new Notes object
  const newNote = new Notes(newInput.action, newInput.payload, newInput.category);

  return newNote.execute()
    .then(() => mongoose.disconnect());

}).catch((error) => {
  console.error(error);
  mongoose.disconnect();
});



