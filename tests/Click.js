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
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var chrome, driver, originalWindow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chrome = require('selenium-webdriver/chrome');
                    return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments("user-data-dir=/home/user167/.config/google-chrome/")).build()];
                case 1:
                    driver = _a.sent();
                    driver.manage().window().maximize();
                    return [4 /*yield*/, driver.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html")];
                case 2:
                    _a.sent();
                    //  const originalWindow = await driver.getWindowHandle();
                    //  await driver.navigate().refresh();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 3:
                    //  const originalWindow = await driver.getWindowHandle();
                    //  await driver.navigate().refresh();
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.css("#password")).sendKeys("Rorim123")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.css("#app-content > div > div.main-container-wrapper > div > div > button")).click()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 7:
                    _a.sent();
                    // await driver.close();
                    return [4 /*yield*/, driver.switchTo().newWindow('tab')];
                case 8:
                    // await driver.close();
                    _a.sent();
                    return [4 /*yield*/, driver.get("https://test-app.ern.ai/trading/")];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.css("#__layout > div > div.primary__right.template > div.template__header > div > div.header__control > div.header__login")).click()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, driver.getWindowHandle()];
                case 13:
                    originalWindow = _a.sent();
                    return [4 /*yield*/, driver.switchTo().window(originalWindow)];
                case 14:
                    _a.sent();
                    //  await driver.switchTo();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 15:
                    //  await driver.switchTo();
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("button btn--rounded btn-primary")).click()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
