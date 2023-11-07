const Offloader = require('../lib/index');

it('Check if instance has method offload and it is a function', () => {
  const offloader = new Offloader();

  expect(typeof offloader.offload === 'function').toBe(true);
});