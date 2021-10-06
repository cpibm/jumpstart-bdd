const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function run(command, options) {
	return exec(command, options);
}

module.exports = {
  run
}
