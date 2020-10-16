const NotesCollection = require('../lib/collection.js');

require('@code-fellows/supergoose');


describe('Testing class NotesCollection', () => {

  test('note model create()', () => {
    const collectionTest = new NotesCollection();
    const obj = {text:'feed dog', category:'home'};
    
    return collectionTest.create(obj)
      .then((result) => { 
        expect(result.text).toEqual('feed dog');
        expect(result.category).toEqual('home');
        expect(result.id).toBeTruthy();
      });
  });

  test('note model delete()', () => {
    const collectionTest = new NotesCollection();
    const id = '5f88ba481bbe4c2f0863f612';
    
    return collectionTest.delete(id)
      .then((result) => { 
        expect(result.ok).toBeTruthy();
      });
  });

  test('Items found, in specific category', () => {
    const collectionTest = new NotesCollection();
    const obj = {category:'home'};
    
    return collectionTest.get(obj)
      .then((result) => { 
        expect(result[0].category).toEqual('home');
      });
  });

});