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
@babel/plugin-transform-object-assign
@babel/plugin-transform-runtime
@babel/plugin-syntax-dynamic-import
@babel/plugin-proposal-async-generator-functions
@babel/plugin-proposal-export-namespace-from
@babel/plugin-transform-named-capturing-groups-regex
@babel/plugin-proposal-optional-catch-binding
@babel/plugin-transform-for-of
@@babel/runtime-corejs3
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

### Excluding

When excluding plugins and presets, the values checked are not the whole name with scope and all. So you
can use shorter forms in your exclude array.  
The following values are checked with a `indexOf` check:

```
preset-env                   => @babel/preset-env
object-rest-spread           => @babel/plugin-proposal-object-rest-spread
decorators                   => @babel/plugin-proposal-decorators
transform-runtime            => @babel/plugin-transform-runtime
partial-application          => @babel/plugin-proposal-partial-application
class-properties             => @babel/plugin-proposal-class-properties
optional-chaining            => @babel/plugin-proposal-optional-chaining
throw-expressions            => @babel/plugin-proposal-throw-expressions
nullish-coalescing-operator  => @babel/plugin-proposal-nullish-coalescing-operator
private-methods              => @babel/plugin-proposal-private-methods
dynamic-import               => @babel/plugin-syntax-dynamic-import
export-default-from          => @babel/plugin-proposal-export-default-from
export-namespace-from        => @babel/plugin-proposal-export-namespace-from
async-generator-functions    => @babel/plugin-proposal-async-generator-functions
named-capturing-groups-regex => @babel/plugin-transform-named-capturing-groups-regex
dotall-regex                 => @babel/plugin-transform-dotall-regex
object-assign                => @babel/plugin-transform-object-assign
optional-catch-binding       => @babel/plugin-proposal-optional-catch-binding
for-of                       => @babel/plugin-transform-for-of
```
