"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
Promise.resolve().then(function () { return require('chromedriver'); });
//Test cases
var enter_1 = require("./tests/enter");
var enterFour_1 = require("./tests/enterFour");
var sverkastak_1 = require("./tests/sverkastak");
//Reading from console
var readline = require('readline-sync');
var group = readline.question("Input testcases group or testcase ");
//Main
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, driver1, driver2, driver3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = group;
                    switch (_a) {
                        case 'enter1': return [3 /*break*/, 1];
                        case 'enter2': return [3 /*break*/, 3];
                        case 'buy': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    driver1 = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, enter_1.enterThree(driver1)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    driver2 = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, enterFour_1.enterFour(driver2)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    driver3 = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, sverkastak_1.orderBuy(driver3)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
})();
