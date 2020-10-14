const { TestScheduler } = require("jest");
const Input = require("../lib/input.js");


describe('Testing class Input', () => {

  test('It should return a valid command and text note', () => {
    const argv = { _: [], add: "feed dog"};
    const data = new Input(argv);

    expect(data.valid()).toBeTruthy();
    expect(data.action).toEqual('add');
    expect(data.payload).toEqual('feed dog');
  })

  test('If argv key action is invalid', () => {
    const argv = { _: [], do: "feed dog"};
    const data = new Input(argv);

    expect(data.valid()).toBeFalsy();
  })

  test('If argv value payload is invalid', () => {
    const argv = { _: [], add:true};
    const data = new Input(argv);

    expect(data.valid()).toBeFalsy();
  })

})