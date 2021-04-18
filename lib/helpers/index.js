"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickTextStyle = exports.QuickViewStyle = void 0;
var ViewStyle_json_1 = __importDefault(require("../style/ViewStyle.json"));
var TextStyle_json_1 = __importDefault(require("../style/TextStyle.json"));
var QuickViewStyle = function (styleCodes, customStyle) {
    if (customStyle === void 0) { customStyle = {}; }
    var vArr = styleCodes.map(function (sc) { return (ViewStyle_json_1.default[sc]); });
    return __spreadArray(__spreadArray([], vArr), [customStyle]);
};
exports.QuickViewStyle = QuickViewStyle;
var QuickTextStyle = function (styleCodes, customStyle) {
    if (customStyle === void 0) { customStyle = {}; }
    var tArr = styleCodes.map(function (sc) { return (TextStyle_json_1.default[sc]); });
    return __spreadArray(__spreadArray([], tArr), [customStyle]);
};
exports.QuickTextStyle = QuickTextStyle;
