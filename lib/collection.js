'use strict';

const NotesModel = require('./model.js');

class NotesCollection  {

  /**
   * gets a list of notes
   * @param {object} filterObj / category
   */
  get(filterObj) {
    return NotesModel.find(filterObj).exec();
  }

  /**
   * adds a note to the list
   * @param {object} obj / text, category
   */
  create(obj) {
    const note = new NotesModel(obj);
    return note.save();
  }

  update() {
    // Final product does not ask for Edit functionality so Jacob said to leave this blank
  }

  /**
   * deletes item from list based on id match
   * @param {String} id 
   */
  delete(id) {
    // put this obj on collection beucase "_id" syntac is specific to mongo/mongoose accessability
    let removeItem = {
      _id: id,
    };

    return NotesModel.deleteOne(removeItem);
  }

}

module.exports = NotesCollection;