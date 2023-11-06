const Offloader = require('../lib/index');
const of = new Offloader();
const task = () => {
  for (let i = 0; i < 1e8; i++) { }
  return { message: 'finished' };
};

of.offload(task, (err, result) => {
  if (err) return console.log(err);
  console.log(result);
});

console.log('ho')

