# install-self-peers

```
npm i --save-dev @team-griffin/install-self-peers

yarn add --dev @team-griffin/install-self-peers
```

A cli utility to automatically install the peer dependencies of the package you are developing.
This is useful for if you are developing a library and some of your dependencies are actually peers.

For example building react based libs.

## Usage

This package creates a bin, which you can execute at `./node_modules/.bin/install-self-peers`.

## Args

*--npm* (defaults: false) - This will generate an npm command rather than yarn

*--no-execute* - Will print to stdout instead of executing the command