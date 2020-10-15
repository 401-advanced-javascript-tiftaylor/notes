'use strict';

const commands = ['add', 'delete', 'list'];

/**
 * Construct and Validate Input from process.argv elements
 */
class Input {
  
  constructor(argv) {
    
    this.action = null;
    this.payload = null;
    this.category = null;

    // parse and notate the command (it'll be null if not in the list)
    for (let cmd of commands){
      if(argv[cmd] !== undefined){
        this.action = cmd;
        this.payload = argv[cmd];
        this.category = argv.category;
      }
    }

  }
  
  /**
   * Check if has command and text in value
   */
  valid() {
    if(!this.action){
      return false;
    }
    if(this.payload === true){
      return false;
    }
    return true;
  }

}

module.exports = Input