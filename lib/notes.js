'use strict';
const NotesCollection = require('./collection.js');
const collection = new NotesCollection();

/**
 * Construct a Notes Object
 * 
 * @param {string} action 
 * @param {string} payload 
 * @param {string} category
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
    } else {
      return Promise.resolve();
    }

  }
  /**
   * Notes method that performs a Create (add) action
   */
  add() {
    let obj = {
      text: this.payload,
      category: this.category,
    };
    
    return collection.create(obj)
      .then(note => {console.log(`Note saved: ${obj.text}`);});
  }

  /**
   *  this deletes an item from the list
   */
  delete() {
    return collection.delete(this.payload)
      .then(() => {console.log(`Deleted Item: ${this.payload}`);});
  }

  /**
   * this lists your notes with or without a filter
   */
  list() {
    let filterObj = null;

    if(this.payload !== true){
      filterObj = {
        category: this.payload,
      };
    } else {
      filterObj = {};
    }
    
    return collection.get(filterObj)
      .then((results) => {
        results.forEach( (item) => {
          console.log(`Note: ${item.text}`);
          console.log(`Category: ${item.category}  ID: ${item.id}`);
          console.log('------------------------------------------');
        });
      });
  }

}


module.exports = Notes