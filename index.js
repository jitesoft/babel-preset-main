const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

const defaultTargets = {
  web: 'defaults',
  node: 'node >= 12'
};

module.exports = declare((api, options) => {
  api.assertVersion(7);
  let targets = options.targets;

  //region Helpers.
  const isExcluded = (str, or) => ((options.exclude || []).indexOf(str) === -1) ? or() : null;
  const setOr = (value, or) => value === undefined ? or : value;
  //endregion

  if (!targets) {
    targets = `${defaultTargets.web}, ${defaultTargets.node}`;
    if (options.mode === 'web') {
      targets = defaultTargets.web;
    } else if (options.mode === 'node') {
      targets = defaultTargets.node;
    }
  }

  const defaultPresetEnv = {
    useBuiltIns: setOr(options.useBuiltIns, 'entry'),
    targets: targets,
    loose: setOr(options.loose, false),
    modules: setOr(options.modules, false),
    debug: setOr(options.debug, false),
    include: setOr(options.include, []),
    corejs: setOr(options.corejs, {
      version: 3,
      proposals: true
    }),
    forceAllTransforms: setOr(options.forceAllTransforms, false)
  };

  return {
    'presets': [
      (isExcluded('preset-env', () => [
        require('@babel/preset-env'),
        defaultPresetEnv
      ]))
    ].filter(p => p !== null),
    'plugins': [
      isExcluded('object-rest-spread', () => [
        require('@babel/plugin-proposal-object-rest-spread'), {
          useBuiltIns: defaultPresetEnv.useBuiltIns
        }
      ]),
      isExcluded('decorators', () => [
        require('@babel/plugin-proposal-decorators'), {
          decoratorsBeforeExport: setOr(options.decoratorsBeforeExport, true),
          legacy: setOr(options.legacy, false)
        }
      ]),
      isExcluded('transform-runtime', () => [
        require('@babel/plugin-transform-runtime'), {
          corejs: {
            version: 3,
            proposals: true
          }
        }
      ]),
      isExcluded('partial-application', () =>
        require('@babel/plugin-proposal-partial-application')),
      isExcluded('class-properties', () =>
        require('@babel/plugin-proposal-class-properties')),
      isExcluded('optional-chaining', () =>
        require('@babel/plugin-proposal-optional-chaining')),
      isExcluded('throw-expressions', () =>
        require('@babel/plugin-proposal-throw-expressions')),
      isExcluded('nullish-coalescing-operator', () =>
        require('@babel/plugin-proposal-nullish-coalescing-operator')),
      isExcluded('private-methods', () =>
        require('@babel/plugin-proposal-private-methods')),
      isExcluded('dynamic-import', () =>
        require('@babel/plugin-syntax-dynamic-import')),
      isExcluded('export-default-from', () =>
        require('@babel/plugin-proposal-export-default-from')),
      isExcluded('export-namespace-from', () =>
        require('@babel/plugin-proposal-export-namespace-from')),
      isExcluded('async-generator-functions', () =>
        require('@babel/plugin-proposal-async-generator-functions')),
      isExcluded('named-capturing-groups-regex', () =>
        require('@babel/plugin-transform-named-capturing-groups-regex')),
      isExcluded('dotall-regex', () =>
        require('@babel/plugin-transform-dotall-regex')),
      isExcluded('object-assign', () =>
        require('@babel/plugin-transform-object-assign')),
      isExcluded('optional-catch-binding', () =>
        require('@babel/plugin-proposal-optional-catch-binding')),
      isExcluded('for-of',
        () => require('@babel/plugin-transform-for-of'))
    ].filter(p => p !== null)
  };
});
