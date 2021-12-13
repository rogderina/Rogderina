"use strict";
// This is draft for findelement list
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
//Вход
function enter(driver) { return driver.findElement(selenium_webdriver_1.By.css("#__layout > div > header > div > div.header__right > a")); }
exports.enter = enter;
function email(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input")); }
exports.email = email;
function password(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[2]/div[2]/input")); }
exports.password = password;
function enter2(driver) { return driver.findElement(selenium_webdriver_1.By.css("#__next > div:nth-child(3) > div > div.pusher > div > div._33srbhM-V43MWPEHfkMz_R > div._3i9Y9mGx61hd_4j2i1X2Z > div > form > div.TyzgNtkd0xhyGYRtpanE7 > div._2-suxZCaImojQDrDpKIU9r > button")); }
exports.enter2 = enter2;
function capca(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[2]/div[3]/div[1]/div/div/span")); }
exports.capca = capca;
function prinim1(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[3]/div/button")); }
exports.prinim1 = prinim1;
function prinim2(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button")); }
exports.prinim2 = prinim2;
function balancBuy(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[1]/div/p/span")); }
exports.balancBuy = balancBuy;
function balancSell(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[2]/div/p/span")); }
exports.balancSell = balancSell;
function totalBuy(driver) { return driver.findElement(selenium_webdriver_1.By.css("#quotedAmount_buy")); }
exports.totalBuy = totalBuy;
function totalSell(driver) { return driver.findElement(selenium_webdriver_1.By.css("#quotedAmount_sell")); }
exports.totalSell = totalSell;
function wait_prinim2(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button"))); }
exports.wait_prinim2 = wait_prinim2;
function market(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-TAB-MARKET")); }
exports.market = market;
function stop_loss(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-TAB-CONDITIONAL")); }
exports.stop_loss = stop_loss;
function buy_slippage(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-SLIPPAGE")); }
exports.buy_slippage = buy_slippage;
function limit(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-TAB-LIMIT")); }
exports.limit = limit;
function buy_price(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-PRICE")); }
exports.buy_price = buy_price;
function buy_get(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-BASIC")); }
exports.buy_get = buy_get;
function buy_total(driver) { return driver.findElement(selenium_webdriver_1.By.className("SSELECTOR-ORDER-FORM-PRICE SELECTOR-ORDER-FORM-BUY-QUOTED")); }
exports.buy_total = buy_total;
function buy_25(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-25")); }
exports.buy_25 = buy_25;
function buy_50(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-50")); }
exports.buy_50 = buy_50;
function buy_75(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-75")); }
exports.buy_75 = buy_75;
function buy_100(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-100")); }
exports.buy_100 = buy_100;
function buy_button(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-BUY-SUBMIT")); }
exports.buy_button = buy_button;
function sell_price(driver) { return driver.findElement(selenium_webdriver_1.By.id("orderPrice_sell")); }
exports.sell_price = sell_price;
function sell_slippage(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-SELL-SLIPPAGE")); }
exports.sell_slippage = sell_slippage;
function sell_get(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-SELL-BASIC")); }
exports.sell_get = sell_get;
function sell_total(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-sell-QUOTED")); }
exports.sell_total = sell_total;
function sell_25(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-25")); }
exports.sell_25 = sell_25;
function sell_50(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-50")); }
exports.sell_50 = sell_50;
function sell_75(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-75")); }
exports.sell_75 = sell_75;
function sell_100(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-100")); }
exports.sell_100 = sell_100;
function sell_button(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-SELL-SUBMIT")); }
exports.sell_button = sell_button;
function history(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HISTORY-TAB-HISTORY")); }
exports.history = history;
// export function eth_tdel(driver) { return driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")); }
function eth_usdt(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_tdel")); }
exports.eth_usdt = eth_usdt;
function profile_icon(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-SHOW-PROFILE")); }
exports.profile_icon = profile_icon;
function profile_page(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-PROFILE")); }
exports.profile_page = profile_page;
function balance(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-BALANCE")); }
exports.balance = balance;
function notification(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-NOTIFICATION")); }
exports.notification = notification;
function orders(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-ORDERS")); }
exports.orders = orders;
function archive(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-HISTORY")); }
exports.archive = archive;
function support(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-SUPPORT")); }
exports.support = support;
function log_out(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-LOGOUT")); }
exports.log_out = log_out;
function exchange_rates(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-RATES")); }
exports.exchange_rates = exchange_rates;
function P2P(driver) { return driver.findElement(selenium_webdriver_1.By.className("SELECTOR-HEADER-NAVIGATE-P2P")); }
exports.P2P = P2P;
function login_button(driver) { return driver.findElement(selenium_webdriver_1.By.className("btn login btn-primary rounded-pill")); }
exports.login_button = login_button;
function login_field(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input")); }
exports.login_field = login_field;
function pass_field(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[2]/div[2]/input")); }
exports.pass_field = pass_field;
function login(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[4]/div[2]/button")); }
exports.login = login;
function captcha(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[3]/div/div/div/iframe")); }
exports.captcha = captcha;
function authorize(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[2]/form/div[5]")); }
exports.authorize = authorize;
function cookies_login(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[3]/div/button/span")); }
exports.cookies_login = cookies_login;
function wait_login_field(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input"), 10000)); }
exports.wait_login_field = wait_login_field;
function trade_sell(driver, price, get) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sell_price(driver).sendKeys(selenium_webdriver_1.Key.CONTROL + "A")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, sell_price(driver).sendKeys(selenium_webdriver_1.Key.BACK_SPACE)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sell_price(driver).sendKeys(price)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, sell_get(driver).sendKeys(selenium_webdriver_1.Key.CONTROL + "A")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, sell_get(driver).sendKeys(selenium_webdriver_1.Key.BACK_SPACE)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, sell_get(driver).sendKeys(get)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, sell_button(driver).click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementIsEnabled(sell_button(driver)), 15000)];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.trade_sell = trade_sell;
function trade_buy(driver, price, get) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, buy_price(driver).sendKeys(selenium_webdriver_1.Key.CONTROL + "A")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, buy_price(driver).sendKeys(selenium_webdriver_1.Key.BACK_SPACE)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, buy_price(driver).sendKeys(price)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, buy_get(driver).sendKeys(selenium_webdriver_1.Key.CONTROL + "A")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, buy_get(driver).sendKeys(selenium_webdriver_1.Key.BACK_SPACE)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, buy_get(driver).sendKeys(get)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, buy_button(driver).click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementIsEnabled(buy_button(driver)), 15000)];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.trade_buy = trade_buy;
