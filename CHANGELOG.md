# Change Log

## 2.1.0

Constraint on @babel/core updated to ^7.8.0

Version updates of following packages:

* @babel/helper-plugin-utils 7.0.0 => 7.8.0
* @babel/preset-env 7.7.7 => 7.8.2
* @babel/plugin-proposal-class-properties 7.7.4 => 7.8.0
* @babel/plugin-proposal-decorators 7.7.4 => 7.8.0
* @babel/plugin-proposal-export-default-from 7.7.4 => 7.8.0
* @babel/plugin-proposal-export-namespace-from 7.7.4 => 7.8.0
* @babel/plugin-proposal-partial-application 7.7.4 => 7.8.0
* @babel/plugin-proposal-private-methods 7.7.4 => 7.8.0
* @babel/plugin-proposal-throw-expressions 7.7.4 => 7.8.0
* @babel/plugin-transform-object-assign 7.7.4 => 7.8.0
* @babel/plugin-transform-runtime 7.7.6 => 7.8.0
* @babel/runtime-corejs3 7.7.7 => 7.8.0

Removal of following packages (which are now inside preset-env by default):

* optional-chaining
* nullish-coalescing-operator
* dynamic-import
* async-generator-functions
* named-capturing-groups-regex
* dotall-regex
* optional-catch-binding
* for-of

## 2.0.0

* Updated node default version to 12.
* Added two plugins: 
    * `@babel/plugin-proposal-optional-catch-binding`
    * `@babel/plugin-transform-for-of`
* Made it possible to exclude plugins and presets with out using the `@babel/plugin-` prefix.

Due to node default version change, the package was bumped to a new major version as it might introduce breaking changes in some packages not defined to use a specific node version as lower bound.

## 1.8.0

* Bumped all packages to 7.7.4
* Updated requirement of babel to 7.7.4.

## 1.6.0

* Added `@babel/plugin-transform-named-capturing-groups-regex`.
* Added `@babel/plugin-transform-dotall-regex`.
* Removed CoreJS v2 support.
* Updated packages to latest version.
* Bumped babel requirement to 7.6.0 or higher.
* Added dependency scanning to the build script.

## 1.5.0

* Deprecated CoreJS v2, next major version will only use CoreJS ^3.
* Updated packages to latest versions.
