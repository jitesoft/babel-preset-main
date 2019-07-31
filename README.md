# @jitesoft/babel-preset-main

[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/commits/master)

Main preset for Jitesoft javascript projects which uses babel.

Includes the following presets and plugins:

```
@babel/preset-env
@babel/plugin-syntax-dynamic-import
@babel/plugin-proposal-export-default-from
@babel/plugin-proposal-class-properties
@babel/plugin-proposal-decorators
@babel/plugin-proposal-nullish-coalescing-operator
@babel/plugin-proposal-object-rest-spread
@babel/plugin-proposal-optional-chaining
@babel/plugin-proposal-partial-application
@babel/plugin-proposal-private-methods
@babel/plugin-proposal-throw-expressions
@babel/plugin-transform-runtime
@babel/plugin-syntax-dynamic-import
@babel/plugin-proposal-async-generator-functions
@babel/plugin-proposal-export-namespace-from
```

Requires `corejs (2 or 3)` and `@babel/core`.


## Options

There are a few options to make it easier to work with the preset:

* `corejs` - Sets the core-js version (or false if wanted) to use (defaults to `3`).
* `modules` - Enables or sets modules for preseet-env (defaults to `auto`).
* `exclude` - Takes an array of plugins that should NOT be used (full plugin name including `@babel`) (defaults to `[]`).
* `targets` - Targets value for preset-env, if used `mode` will be ignored (defaults to undefined to enable mode). 
* `mode` - Flags build mode (`web`, `node` or undefined for default).
    * `node` will set the targets value to `node >= 8`.
    * `web` will set the targets value to `> 0.25%, not dead`.
    * `undefined/default` will set the targets value to `> 0.25%, not dead, node >= 8`.
