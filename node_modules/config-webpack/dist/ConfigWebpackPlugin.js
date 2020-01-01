"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_NS = "CONFIG";

var ConfigWebpackPlugin = function ConfigWebpackPlugin() {
    var ns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_NS;
    var configObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require("config");

    _classCallCheck(this, ConfigWebpackPlugin);

    // return new webpack.DefinePlugin(collapseObject(configObject, prefix, recurseLimit));

    // Deep-copy the config to avoid mutating
    var config = JSON.parse(JSON.stringify(configObject));

    // Webpack's DefinePlugin performs direct text replacement,
    // so it is important that primitive values be quoted.
    stringifyPrimitives(config);

    // Wrap the config in a namespace
    if (ns) {
        var wrapper = {};
        wrapper[ns] = config;
        config = wrapper;
    }

    return new _webpack2.default.DefinePlugin(config);
};

exports.default = ConfigWebpackPlugin;


function stringifyPrimitives(obj) {
    var keys = Object.keys(obj);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var val = obj[key];

            if (isArray(val) || isObject(val)) {
                stringifyPrimitives(val);
            } else {
                obj[key] = JSON.stringify(val);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function isArray(obj) {
    return Array.isArray(obj);
}

function isObject(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null;
}