const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

// const utils =

Given('gh is installed', async function () {
  const run = async () => ({
    stdout: '',
    stderr: null,
  })
  const { stdout, stderr } = await run('which gh');
	this.ghIsInstalled = true;//something that returns boolean;
});

When('the jumpstart is called', function () {
  // ./jumpstart
});

Then('the user receives a messages stating "gh is installed"', function (expectedAnswer) {
  // mock?
  // check the partial output of the jumpstart is "gh is installed"
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
