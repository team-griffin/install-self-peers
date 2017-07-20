#!/usr/bin/env node
const spawn = require('cross-spawn');
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
const commandConfig = generatorFn(pkg.peerDependencies);
commandConfig.args = commandConfig.args.concat(argv._);

if(argv.execute === true) {
  const cli = spawn(
    commandConfig.cmd,
    commandConfig.args,
    { stdio: 'inherit' }
  );
  cli.on('close', () => process.exit());
} else {
  console.log(command);
  return;
}
