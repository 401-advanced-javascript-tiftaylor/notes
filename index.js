'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const argv = require('minimist')(process.argv.slice(2));

let newInput = new Input(argv);

const newNote = new Notes(newInput.action, newInput.payload);
newNote.execute();
