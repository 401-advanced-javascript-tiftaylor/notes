'use strict';

const argv = require('minimist')(process.argv.slice(2));

/**
 * Construct and Validate Input from process.argv elements
 */
class Input {
  
  constructor() {
    if (argv.add !== undefined) {
      this.action = 'add';
      
      if (argv.add !== true) {
        this.payload = argv.add;
      } else {
        throw new Error('You need to add text after the command.');
      } 
  
    } else {
      throw new Error('Unrecognized command');
    }
  }
  
}


module.exports = Input