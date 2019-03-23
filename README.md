# @jitesoft/babel-preset-main

Main preset for Jitesoft javascript projects which uses babel.

Includes the following presets and plugins:

```
@babel/preset-env
@babel/plugin-proposal-class-properties
@babel/plugin-proposal-decorators
@babel/plugin-proposal-nullish-coalescing-operator
@babel/plugin-proposal-object-rest-spread
@babel/plugin-proposal-optional-chaining
@babel/plugin-proposal-partial-application
@babel/plugin-proposal-private-methods
@babel/plugin-proposal-throw-expressions
@babel/plugin-transform-runtime
```

Requires `corejs3` and `@babel/core`.

## Options

Passing options to either preset or plugin is easily done through the presets options object.  
Observe that the names of the presets and plugins have camelCase names in the options.

```json
{
  "presets": [
    ["@jitesoft/main",
    {
      "presetEnv": {
        "targets": "> 0.2%, not dead"
      },
      "classProperties": {
        "loose": false
      }
    }
   ]
  ]
}
```

Default values can be found in the `defaults.js` file.
