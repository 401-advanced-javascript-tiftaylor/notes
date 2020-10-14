const Notes = require('../lib/notes.js');

// resource: https://stephencharlesweiss.com/jest-testing-spyon-consoles/
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()


describe('Testing class Notes', () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  test('Something was shown in the console', () => {
    const noteTest = new Notes('add', 'test complete');
    noteTest.execute();
    expect(console.log).toHaveBeenLastCalledWith('Added note: test complete')
  })

  test('Nothing was shown in the console', () => {
    const noteTest = new Notes(null, 'test complete');
    noteTest.execute();
    expect(console.log).toBeCalledTimes(0);

  })

});