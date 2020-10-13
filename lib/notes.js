'use strict';

/**
 * Construct Notes Object
 * 
 * @param {string} action 
 * @param {string} payload 
 */
function Notes(action, payload) {
  this.action = action;
  this.payload = payload;
}

/**
 * Notes method to execute an action
 */
Notes.prototype.execute = function() {
  if(this.action === 'add') {
    this.add(this.payload);
  } 
  // else if(this.action === 'delete') {
  //     delete(this.payload);
  // } 
  // else if(this.action === 'list') {
  //     list(this.payload);
  // }

}

/**
 * Notes method that performs a Create (add) action
 */
Notes.prototype.add = function () {
  let newObj = {
    id: '1',
    text: this.payload
  }
  console.log(`note text: ${newObj.text}`);
}


module.exports = Notes