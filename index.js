const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

const defaultTargets = {
  web: 'defaults',
  node: 'node >= 10'
};

module.exports = declare((api, options) => {
  api.assertVersion(7);

  const {
    exclude,
    mode
  } = options;

  let {
    targets
  } = options;

  //region Helpers.
  const isExcluded = (str, or) => ((exclude || []).indexOf(str) === -1) ? or() : null;
  const setOr = (value, or) => value === undefined ? or : value;
  //endregion

  if (targets === undefined) {
    targets = `${defaultTargets.web}, ${defaultTargets.node}`;
    if (mode === 'web') {
      targets = defaultTargets.web;
    } else if (mode === 'node') {
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
      (isExcluded('@babel/preset-env', () => [
        require('@babel/preset-env'),
        defaultPresetEnv
      ]))
    ].filter(p => p !== null),
    'plugins': [
      isExcluded('@babel/plugin-proposal-object-rest-spread', () => [
        require('@babel/plugin-proposal-object-rest-spread'), {
          useBuiltIns: defaultPresetEnv.useBuiltIns
        }
      ]),
      isExcluded('@babel/plugin-proposal-decorators', () => [
        require('@babel/plugin-proposal-decorators'), {
          decoratorsBeforeExport: setOr(options.decoratorsBeforeExport, true),
          legacy: setOr(options.legacy, false)
        }
      ]),
      isExcluded('@babel/plugin-transform-runtime', () => [
        require('@babel/plugin-transform-runtime'), {
          corejs: {
            version: 3,
            proposals: true
          }
        }
      ]),
      isExcluded('@babel/plugin-proposal-partial-application', () =>
        require('@babel/plugin-proposal-partial-application')),
      isExcluded('@babel/plugin-proposal-class-properties', () =>
        require('@babel/plugin-proposal-class-properties')),
      isExcluded('@babel/plugin-proposal-optional-chaining', () =>
        require('@babel/plugin-proposal-optional-chaining')),
      isExcluded('@babel/plugin-proposal-throw-expressions', () =>
        require('@babel/plugin-proposal-throw-expressions')),
      isExcluded('@babel/plugin-proposal-nullish-coalescing-operator', () =>
        require('@babel/plugin-proposal-nullish-coalescing-operator')),
      isExcluded('@babel/plugin-proposal-private-methods', () =>
        require('@babel/plugin-proposal-private-methods')),
      isExcluded('@babel/plugin-syntax-dynamic-import', () =>
        require('@babel/plugin-syntax-dynamic-import')),
      isExcluded('@babel/plugin-proposal-export-default-from', () =>
        require('@babel/plugin-proposal-export-default-from')),
      isExcluded('@babel/plugin-proposal-export-namespace-from', () =>
        require('@babel/plugin-proposal-export-namespace-from')),
      isExcluded('@babel/plugin-proposal-async-generator-functions', () =>
        require('@babel/plugin-proposal-async-generator-functions')),
      isExcluded('@babel/plugin-transform-named-capturing-groups-regex', () =>
        require('@babel/plugin-transform-named-capturing-groups-regex')),
      isExcluded('@babel/plugin-transform-dotall-regex', () =>
        require('@babel/plugin-transform-dotall-regex')),
      isExcluded('@babel/plugin-transform-object-assign', () =>
        require('@babel/plugin-transform-object-assign')),
      isExcluded('@babel/plugin-proposal-optional-catch-binding', () =>
        require('@babel/plugin-proposal-optional-catch-binding')),
      isExcluded('@babel/plugin-transform-for-of',
        () => require('@babel/plugin-transform-for-of'))
    ].filter(p => p !== null)
  };
});
