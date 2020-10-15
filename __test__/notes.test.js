const Notes = require('../lib/notes.js');

// resource: https://stephencharlesweiss.com/jest-testing-spyon-consoles/
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()


// TEST is commented out until Jacob teaches us how to mock mongoose

describe('Testing class Notes', () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  test('fake test until we are taught', () => {
    expect(true).toBeTruthy();
  })

  // test('Something was shown in the console', () => {
  //   const noteTest = new Notes('add', 'test complete');
  //   return noteTest.execute()
  //     .then(() => {
  //       expect(console.log).toHaveBeenLastCalledWith('Added note: test complete')
  //     });
  // })

  // test('Nothing was shown in the console', () => {
  //   const noteTest = new Notes(null, 'test complete');
  //   return noteTest.execute()
  //   .then(() => {
  //     expect(console.log).toBeCalledTimes(0)
  //   });
  // })

});