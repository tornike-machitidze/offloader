const Offloader = require('../lib/index');

const offloader = new Offloader();

const task = () => {
  for (let i = 0; i < 1e8; i++) { }

  return { result: 342345 };
};

offloader.offload(task, (err, result) => {
  if (err) return console.log(err);

  console.log(result);
});