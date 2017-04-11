const { mapObjIndexed, values, join, compose } = require('ramda');

const mapPeerDependenciesToInstallArg = mapObjIndexed((version, peerPkg) => {
  return `${peerPkg}@${version}`;
});

const mapPeerDependenciesToCLIArgs = compose(
  join(' '),
  values,
  mapPeerDependenciesToInstallArg
);

const prependNpmCommand = (args) => {
  return `npm install ${args}`;
};

const prependYarnCommand = (args) => {
  return `yarn add --peer ${args}`;
};

const generateYarnCLICommand = compose(
  prependYarnCommand,
  mapPeerDependenciesToCLIArgs
);

const generateNpmCommand = compose(
  prependNpmCommand,
  mapPeerDependenciesToCLIArgs
);

module.exports = {
  mapPeerDependenciesToInstallArg,
  mapPeerDependenciesToCLIArgs,
  prependNpmCommand,
  prependYarnCommand,
  generateYarnCLICommand,
  generateNpmCommand
};