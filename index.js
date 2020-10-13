'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


let newInput = new Input()


const newNote = new Notes(newInput.action, newInput.payload);
newNote.execute();
