const { Worker, isMainThread, parentPort } = require('node:worker_threads');
const path = require('path');

class Offloader {
  constructor() { }
  offload(operation, handler) {
    if (isMainThread) {
      // worker will re-loads the current file inside the worker/itself
      const worker = new Worker(path.resolve(__dirname, 'index.js'));

      worker.on('message', (message) => {
        handler(null, message);
      });

      worker.on('error', (err) => {
        handler(err);
      });
    } else {
      const result = operation();

      parentPort.postMessage({ result });
    }
  }

}

module.exports = Offloader;
