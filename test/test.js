const Offloader = require('../lib/index');


it("Check if instance has a method offload", () => {
  const offloader = new Offloader();
  expect(typeof offloader.offload === 'function').toBe(true);
});