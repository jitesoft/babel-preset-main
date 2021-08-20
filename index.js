const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils.declare;
const pkg = require('./package.json');

const defaultTargets = {
  web: 'defaults',
  node: 'node >= 12'
};

module.exports = declare((api, options) => {
  api.assertVersion(7);
  let targets = options.targets;

  // region Helpers.
  const isNotExcluded = (str, then) => ((options.exclude || []).indexOf(str) === -1) ? then(str) : null;
  const setOr = (value, or) => value === undefined ? or : value;
  // endregion

  if (!targets) {
    targets = `${defaultTargets.web}, ${defaultTargets.node}`;
    if (options.mode === 'web') {
      targets = defaultTargets.web;
    } else if (options.mode === 'node') {
      targets = defaultTargets.node;
    }
  }

  const presetOptions = {
    useBuiltIns: setOr(options.useBuiltIns, 'entry'),
    targets: targets,
    spec: setOr(options.spec, false),
    loose: setOr(options.loose, false),
    modules: setOr(options.modules, 'auto'),
    debug: setOr(options.debug, false),
    include: setOr(options.include, []),
    corejs: setOr(options.corejs, {
      version: 3,
      proposals: true
    }),
    forceAllTransforms: setOr(options.forceAllTransforms, false),
    shippedProposals: setOr(options.shippedProposals, false)
  };

  return {
    presets: [
      (isNotExcluded('preset-env', () => [
        require('@babel/preset-env'),
        presetOptions
      ]))
    ].filter(p => p !== null),
    plugins: [
      isNotExcluded('decorators', () => [
        require('@babel/plugin-proposal-decorators'), {
          decoratorsBeforeExport: setOr(options.decoratorsBeforeExport, true),
          legacy: setOr(options.legacy, false)
        }
      ]),
      isNotExcluded('transform-runtime', () => [
        require('@babel/plugin-transform-runtime'), {
          corejs: {
            version: 3,
            proposals: true
          },
          version: pkg.dependencies['@babel/plugin-transform-runtime']
        }
      ]),
      isNotExcluded('pipeline-operator', () => [
        require('@babel/plugin-proposal-pipeline-operator'),
        {
          proposal: options.pipeline || 'minimal'
        }
      ]),
      isNotExcluded('record-and-tuple', () => [
        require('@babel/plugin-proposal-record-and-tuple'),
        {
          syntaxType: 'hash'
        }
      ]),
      isNotExcluded('async-do-expressions', () =>
        require('@babel/plugin-proposal-async-do-expressions')),
      isNotExcluded('export-default-from', () =>
        require('@babel/plugin-proposal-export-default-from')),
      isNotExcluded('function-bind', () =>
        require('@babel/plugin-proposal-function-bind')),
      isNotExcluded('partial-application', () =>
        require('@babel/plugin-proposal-partial-application')),
      isNotExcluded('throw-expressions', () =>
        require('@babel/plugin-proposal-throw-expressions')),
      isNotExcluded('object-assign', () =>
        require('@babel/plugin-transform-object-assign'))
    ].filter(p => p !== null)
  };
});
