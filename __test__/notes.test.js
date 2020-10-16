const Notes = require('../lib/notes.js');

require('@code-fellows/supergoose');

// resource: https://stephencharlesweiss.com/jest-testing-spyon-consoles/
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()


describe('Testing class Notes', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('Something was shown in the console from basic add', () => {
    const noteTest = new Notes('add', 'test complete');
    return noteTest.execute()
      .then(() => {
        expect(console.log).toHaveBeenLastCalledWith('Note saved: test complete');
      });
  });

  test('note added with text and category', () => {
    const noteTest = new Notes('add', 'test complete', 'home');
    return noteTest.execute()
      .then(() => {
        expect(console.log).toHaveBeenLastCalledWith('Note saved: test complete');
      });
  });

  test('Nothing was shown in the console', () => {
    const noteTest = new Notes('delete', '5f88ba481bbe4c2f0863f612');
    return noteTest.execute()
      .then(() => {
        expect(console.log).toHaveBeenLastCalledWith('Deleted Item: 5f88ba481bbe4c2f0863f612');
      });
  });

  test('Nothing was shown in the console', () => {
    const noteTest = new Notes(null, 'test complete');
    return noteTest.execute()
      .then(() => {
        expect(console.log).toBeCalledTimes(0);
      });
  });

  test('Items found, no category specified', () => {
    const noteTest = new Notes('list', true);
    return noteTest.execute()
      .then(() => {
        expect(console.log).toHaveBeenLastCalledWith('------------------------------------------');
        // 6 console logs are shown because we create 2 items up above, 1 with category and 1 without
        expect(console.log).toBeCalledTimes(6);
      });
  });

  test('Items found, in specific category', () => {
    const noteTest = new Notes('list', 'home');
    return noteTest.execute()
      .then(() => {
        expect(console.log).toHaveBeenLastCalledWith('------------------------------------------');
        // this list will find 1 item we made above with a category so 3 console logs were called from notes.js
        expect(console.log).toBeCalledTimes(3);
      });
  });

});