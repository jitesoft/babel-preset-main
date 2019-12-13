const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

module.exports = declare((api, options) => {
    api.assertVersion(7);

    const {
        exclude,
        modules,
        mode
    } = options;

    let {
        useBuiltIns,
        targets
    } = options;

    const defaults = {
        web: 'defaults',
        node: 'node >= 10'
    };

    if (targets === undefined) {
        targets = `${defaults.web}, ${defaults.node}`;
        if (mode === 'web') {
            targets = defaults.web;
        } else if (mode === 'node') {
            targets = defaults.node;
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
                    useBuiltIns: (useBuiltIns === undefined) ? 'usage' : useBuiltIns,
                    corejs: {version: 3, proposals: true},
                    targets: targets,
                    modules: (modules === undefined) ? 'auto' : modules,
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
                    corejs: {version: 3, proposals: true}
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
                require('@babel/plugin-transform-object-assign'))
        ].filter(p => p !== null)
    }
});
