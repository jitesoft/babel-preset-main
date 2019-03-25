const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

module.exports = declare((api, options = {}) => {
    api.assertVersion(7);

    const opts = require('./defaults')(options);
    return {
        'presets': [
            [require('@babel/preset-env'), opts['presetEnv']]
        ],
        'plugins': [
            [require('@babel/plugin-proposal-object-rest-spread'), opts['objectRestSpread']],
            [require('@babel/plugin-proposal-decorators'), opts['decorators']],
            [require('@babel/plugin-transform-runtime'), opts['transformRuntime']],
            [require('@babel/plugin-proposal-partial-application'), opts['partialApplication']],
            [require('@babel/plugin-proposal-class-properties'), opts['classProperties']],
            [require('@babel/plugin-proposal-optional-chaining'), opts['optionalChaining']],
            [require('@babel/plugin-proposal-throw-expressions'), opts['throwExpressions']],
            [require('@babel/plugin-proposal-nullish-coalescing-operator'), opts['nullishCoalescingOperator']],
            [require('@babel/plugin-proposal-private-methods'), opts['privateMethods']]
        ]
    }
});
