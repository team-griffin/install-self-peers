# install-self-peers

A cli utility to automatically install the peer dependencies of the package you are developing.
This is useful for if you are developing a library and some of your dependencies are actually peers.

For example building react based libs.


```shell
npm i --save-dev @team-griffin/install-self-peers

yarn add --dev @team-griffin/install-self-peers
```

## Usage

#### Manual

This package creates a bin, which you can execute:

```shell
$ ./node_modules/.bin/install-self-peers
```

#### Package.json lifecycle

Add the following script in `package.json` to trigger the cli after installing with dependencies.

```json
{
  "scripts": {
    "prepare": "install-self-peers -- --ignore-scripts"
  }
}
```

> _It isn't recommended to use the `postinstall` event, because it is run when installing this package in other apps/libraries._

## Arguments

**`--npm`** (defaults: false) - This will generate an npm command rather than yarn

**`--no-execute`** - Will print to stdout instead of executing the command

Other args can be passed directly to `yarn`/`npm` by using **`--`**:  
**`install-self-peers -- --ignore-scripts`**

## License

MIT License

Copyright (c) 2017
