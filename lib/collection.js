'use strict';

const NotesModel = require('./model.js');

class NotesCollection  {

  get(filterObj) {
    return NotesModel.find(filterObj).exec();
  }

  create(obj) {
    const note = new NotesModel(obj);
    return note.save();
  }

  update() {
    // Final product does not ask for Edit functionality so Jacob said to leave this blank
  }

  delete(id) {
    // put this obj on collection beucase "_id" syntac is specific to mongo/mongoose accessability
    let removeItem = {
      _id: id,
    };

    return NotesModel.deleteOne(removeItem);
  }

}

module.exports = NotesCollection;