const Offloader = require('../lib/index');

it('We can check if offloader insatnce contains a method offload', () => {
  const offloader = new Offloader();
  expect(typeof offloader.offload).toBe('function');
});