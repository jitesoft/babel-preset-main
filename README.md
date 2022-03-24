# @jitesoft/babel-preset-main

[![npm (scoped)](https://img.shields.io/npm/v/@jitesoft/babel-preset-main)](https://www.npmjs.com/package/@jitesoft/babel-preset-main)
[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/babel-preset-main)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/babel-preset-main/commits/master)
[![npm](https://img.shields.io/npm/dt/@jitesoft/babel-preset-main)](https://www.npmjs.com/package/@jitesoft/babel-preset-main)
[![Back project](https://img.shields.io/badge/Open%20Collective-Tip%20the%20devs!-blue.svg)](https://opencollective.com/jitesoft-open-source)

Main preset for Jitesoft javascript projects which uses babel.

Includes the following presets and plugins:

```
@babel/preset-env

@babel/plugin-proposal-async-do-expressions
@babel/plugin-proposal-decorators
@babel/plugin-proposal-export-default-from
@babel/plugin-proposal-function-bind
@babel/plugin-proposal-partial-application
@babel/plugin-proposal-pipeline-operator
@babel/plugin-proposal-record-and-tuple
@babel/plugin-proposal-throw-expressions
@babel/plugin-transform-object-assign
@babel/plugin-transform-runtime
@babel/runtime-corejs3
```

Requires `corejs (v 3+)` and `@babel/core`.

## Options

This preset uses the same options as preset-env including the options that the different
plugins have.  
Other than those, the following options are possible to use:

* `exclude` - Takes an array of plugins that should NOT be used (full plugin name including `@babel`) (defaults to `[]`).
* `mode` - Flags build mode (`web`, `node` or undefined for default).
    * `node` will set the targets value to `node >= 12`.
    * `web` will set the targets value to `defaults`.
    * `undefined/default` will set the targets value to `defaults, node >= 12`.
* `recordAndTuple`
  * `syntaxType` (defaults to 'hash) 
  * `polyfill` (defaults to false)
  * `polyfillModuleName` (defaults to peerDependency `@bloomberg/record-tuple-polyfill`)
* `decorators`
  * `version` (defaults to `2018-09`)
  * `beforeExport` (defaults to `true`)
* `pipeline`
  * `poposal` (defaults to `hack`) 
  * `topicToken` (defaults to `^^`)

### Excluding

When excluding plugins and presets, the values checked are not the whole name with scope and all. So you
can use shorter forms in your exclude array.  
The following values are checked with a `indexOf` check:

```
preset-env            => @babel/preset-env
decorators            => @babel/plugin-proposal-decorators
partial-application   => @babel/plugin-proposal-partial-application
throw-expressions     => @babel/plugin-proposal-throw-expressions
async-do-expressions  => @babel/plugin-proposal-async-do-expressions
function-bind         => @babel/plugin-proposal-function-bind
pipeline-operator     => @babel/plugin-proposal-pipeline-operator
record-and-tuple      => @babel/plugin-proposal-record-and-tuple
```
