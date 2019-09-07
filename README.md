# @jitesoft/babel-preset-main

[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/commits/master)
[![npm](https://img.shields.io/npm/dt/@jitesoft/babel-preset-main)](https://www.npmjs.com/package/@jitesoft/babel-preset-main)
[![Back project](https://img.shields.io/badge/Open%20Collective-Tip%20the%20devs!-blue.svg)](https://opencollective.com/jitesoft-open-source)

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
@babel/plugin-transform-named-capturing-groups-regex
```

Requires `corejs (v 3+)` and `@babel/core`.


## Options

There are a few options to make it easier to work with the preset:

* `modules` - Enables or sets modules for preseet-env (defaults to `auto`).
* `exclude` - Takes an array of plugins that should NOT be used (full plugin name including `@babel`) (defaults to `[]`).
* `targets` - Targets value for preset-env, if used `mode` will be ignored (defaults to undefined to enable mode). 
* `mode` - Flags build mode (`web`, `node` or undefined for default).
    * `node` will set the targets value to `node >= 8`.
    * `web` will set the targets value to `> 0.25%, not dead`.
    * `undefined/default` will set the targets value to `> 0.25%, not dead, node >= 8`.
