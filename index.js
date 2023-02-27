const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils.declare;
const pkg = require('./package.json');

const defaultTargets = {
  web: 'defaults',
  node: 'node >= 14'
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

  const opts = {
    decorators: {},
    pipeline: {},
    recordAndTuple: {},
    ...options,
  };

  const presetOptions = {
    useBuiltIns: setOr(opts.useBuiltIns, 'entry'),
    targets: targets,
    spec: setOr(opts.spec, false),
    loose: setOr(opts.loose, false),
    modules: setOr(opts.modules, 'auto'),
    debug: setOr(opts.debug, false),
    include: setOr(opts.include, []),
    corejs: setOr(opts.corejs, {
      version: 3,
      proposals: true
    }),
    forceAllTransforms: setOr(opts.forceAllTransforms, false),
    shippedProposals: setOr(opts.shippedProposals, false)
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
          version: setOr(opts.decorators.version, '2023-01'),
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
          proposal: setOr(opts.pipeline.proposal, 'hack'),
          topicToken: setOr(opts.pipeline.topicToken, '^^')
        }
      ]),
      isNotExcluded('record-and-tuple', () => [
        require('@babel/plugin-proposal-record-and-tuple'),
        {
          syntaxType: setOr(opts.recordAndTuple.syntaxType, 'hash'),
          importPolyfill: setOr(opts.recordAndTuple.polyfill, false),
          polyfillModuleName: setOr(
            opts.recordAndTuple.polyfillModuleName,
            '@bloomberg/record-tuple-polyfill'
          ),
        },
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
        require('@babel/plugin-transform-object-assign')),
      isNotExcluded('duplicate-named-capturing-groups-regex', () =>
        require('@babel/plugin-proposal-duplicate-named-capturing-groups-regex')),
      isNotExcluded('regexp-modifiers', () =>
        require('@babel/plugin-proposal-regexp-modifiers'))
    ].filter(p => p !== null)
  };
});
