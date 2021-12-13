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
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var selectors = require('./datas/selectors');
// enter
var enterP = require('./enter');
(function name() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, balancB, balancS, get, balancBStr, balancSStr, t, i, min, max, price, totalB, totalBalanc, balancBAfterB, balancBAfterBStr, totalBalancAfterB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, enterP.enterF(driver)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, console.log('enter success')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 4:
                    balancB = _a.sent();
                    return [4 /*yield*/, console.log(balancB)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancSell(driver).getText()];
                case 6:
                    balancS = _a.sent();
                    return [4 /*yield*/, console.log(balancS)];
                case 7:
                    _a.sent();
                    get = 1;
                    //выбор пары
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click()];
                case 8:
                    //выбор пары
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 9:
                    _a.sent();
                    //перевод строк в числа
                    //перевод balancB
                    balancB = balancB.slice(0, -4);
                    balancBStr = balancB.replace(/[\s,%]/g, '').toLocaleLowerCase();
                    return [4 /*yield*/, console.log(balancBStr)];
                case 10:
                    _a.sent();
                    //перевод balancS
                    balancS = balancS.slice(0, -4);
                    balancSStr = balancS.replace(/[\s,%]/g, '').toLocaleLowerCase();
                    return [4 /*yield*/, console.log(balancSStr)];
                case 11:
                    _a.sent();
                    t = 5;
                    i = 0;
                    _a.label = 12;
                case 12:
                    if (!(i < t)) return [3 /*break*/, 22];
                    min = 1;
                    max = 10;
                    price = min - 0.5 + Math.random() * (max - min + 1);
                    totalB = get * price;
                    return [4 /*yield*/, console.log(totalB)];
                case 13:
                    _a.sent();
                    if (!(balancBStr > totalB)) return [3 /*break*/, 18];
                    return [4 /*yield*/, console.log('trade_buy posible')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, selectors.trade_buy(driver, price, get)];
                case 15:
                    _a.sent(); //торговля
                    totalBalanc = balancBStr - totalB;
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 16:
                    balancBAfterB = _a.sent();
                    balancBAfterB = balancBAfterB.slice(0, -4);
                    balancBAfterBStr = balancB.replace(/[\s,%]/g, '').toLocaleLowerCase();
                    totalBalancAfterB = balancBAfterBStr - totalB;
                    return [4 /*yield*/, console.log(totalBalanc, totalBalancAfterB)];
                case 17:
                    _a.sent();
                    return [3 /*break*/, 19];
                case 18:
                    (balancBStr < totalB);
                    _a.label = 19;
                case 19: return [4 /*yield*/, console.log('totalB > balancB; trade_buy imposible')];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    i++;
                    return [3 /*break*/, 12];
                case 22: return [2 /*return*/];
            }
        });
    });
})();
