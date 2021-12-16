"use strict";
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
Promise.resolve().then(function () { return require('chromedriver'); });
function prinim1(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[3]/div/button"), 10000)); }
exports.prinim1 = prinim1;
