#!/usr/bin/env node
const { exec } = require('child_process');
const { readFileSync } = require('fs');
const {
  generateYarnCLICommand,
  generateNpmCommand
} = require('./utils');

const argv = require('minimist')(process.argv.slice(2), {
  default: {
    execute: true,
    npm: false,
  }
});

const generatorFn = ((npm) => {
  if(npm === true) {
    return generateNpmCommand;
  }

  return generateYarnCLICommand;
})(argv.npm);

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const command = generatorFn(pkg.peerDependencies);

if(argv.execute === true) {
  exec(command, function(error, stdout, stderr) {
    console.log(stdout);
  });
} else {
  console.log(command);
  return;
}