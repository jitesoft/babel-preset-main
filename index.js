const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

module.exports = declare((api, options) => {
    api.assertVersion(7);

    const {
        exclude,
        modules,
        mode,
        corejs,
    } = options;

    let {
        targets
    } = options;

    if (corejs && corejs === 2) {
        console.warn(
          '[@jitesoft/babel-preset-main]: **Deprecation warning** ' +
          'CoreJS 2 will in next major release not be supported.'
        );
    }

    if (targets === undefined) {
        targets = '> 0.25%, not dead, node >= 8';
        if (mode === 'web') {
            targets = '> 0.25%, not dead'
        } else if (mode === 'node') {
            targets = 'node >= 8'
        }
    }

    const isExcluded = (str, or) => {
        if ((exclude || []).indexOf(str) === -1) {
            return or();
        }
        return null;
    };


    return {
        'presets': [
            (isExcluded('@babel/preset-env', () => [
                require('@babel/preset-env'),
                {
                    useBuiltIns: 'usage',
                    corejs: {version: corejs || 3, proposals: true},
                    targets: targets,
                    modules: modules === undefined ? 'auto' : modules
                }
            ]))
        ].filter(p => p !== null),
        'plugins': [
            isExcluded('@babel/plugin-proposal-object-rest-spread', () => [
                require('@babel/plugin-proposal-object-rest-spread'), {
                    useBuiltIns: true
                }
            ]),
            isExcluded('@babel/plugin-proposal-decorators', () => [
                require('@babel/plugin-proposal-decorators'), {
                    decoratorsBeforeExport: true,
                    legacy: false
                }
            ]),
            isExcluded('@babel/plugin-transform-runtime', () => [
                require('@babel/plugin-transform-runtime'), {
                    corejs: {version: corejs || 3, proposals: true}
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
                require('@babel/plugin-proposal-async-generator-functions'))
        ].filter(p => p !== null)
    }
});
