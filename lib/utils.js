const { mapObjIndexed, values, compose } = require('ramda');

const mapPeerDependenciesToInstallArg = mapObjIndexed((version, peerPkg) => {
  return `${peerPkg}@${version}`;
});

const mapPeerDependenciesToCLIArgs = compose(
  values,
  mapPeerDependenciesToInstallArg
);

const prependNpmCommand = (args) => {
  return {
    cmd: 'npm',
    args: [ 'install' ].concat(args)
  };
};

const prependYarnCommand = (args) => {
  return {
    cmd: 'yarn',
    args: [ 'add', '--peer' ].concat(args)
  };
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
