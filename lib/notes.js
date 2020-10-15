'use strict';

const NotesModel = require('./model.js')

/**
 * Construct a Notes Object
 * 
 * @param {string} action 
 * @param {string} payload 
 */
class Notes {

  constructor(action, payload, category) {
    this.action = action;
    this.payload = payload;
    this.category = category;
  }
  /**
   * Notes method to execute an action
   */
  execute() {
    if(this.action === 'add') {
      return this.add();
    } 
    else if(this.action === 'delete') {
      return this.delete();
    } 
    else if(this.action === 'list') {
      return this.list();
    }

  }
  /**
   * Notes method that performs a Create (add) action
   */
  add() {
    let newObj = {
      text: this.payload,
      category: this.category
    }
    
    const note = new NotesModel(newObj)
    return note.save()
      .then(note => {console.log(`Note saved: ${newObj.text}`);})
  }

  delete() {
    let removeItem = {
      _id: this.payload
    }
    
    return NotesModel.deleteOne(removeItem)
      .then(() => {console.log(`Deleted Item: ${removeItem._id}`);})
  }

  list() {
    let showItem = null;

    if(this.payload !== true){
      showItem = {
        category: this.payload
      }
    } else {
      showItem = {};
    }
    
    return NotesModel.find(showItem).exec()
      .then((results) => {
        results.forEach( (item) => {
          console.log(`Note: ${item.text}`);
          console.log(`Category: ${item.category}  ID: ${item.id}`);
          console.log('------------------------------------------');
        })
      })
  }

}


module.exports = Notes