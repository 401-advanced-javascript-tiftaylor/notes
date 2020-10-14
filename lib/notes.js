'use strict';

/**
 * Construct a Notes Object
 * 
 * @param {string} action 
 * @param {string} payload 
 */
class Notes {

  constructor(action, payload) {
    this.action = action;
    this.payload = payload;
  }
  /**
   * Notes method to execute an action
   */
  execute() {
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
  add() {
    let newObj = {
      id: '1',
      text: this.payload
    }
    console.log(`Added note: ${newObj.text}`);
  }

}


module.exports = Notes