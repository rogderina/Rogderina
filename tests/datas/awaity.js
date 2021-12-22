"use strict";
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
Promise.resolve().then(function () { return require('chromedriver'); });
function prinim1(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[3]/div/button"), 5000)); }
exports.prinim1 = prinim1;
function captcha(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[3]/div/div/div/iframe"), 5000)); }
exports.captcha = captcha;
function prinim2(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button"), 5000)); }
exports.prinim2 = prinim2;
function enter2(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("#__next > div:nth-child(3) > div > div.pusher > div > div._33srbhM-V43MWPEHfkMz_R > div._3i9Y9mGx61hd_4j2i1X2Z > div > form > div.TyzgNtkd0xhyGYRtpanE7 > div._2-suxZCaImojQDrDpKIU9r > button"), 5000)); }
exports.enter2 = enter2;
function market(driver) { return driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.className("SELECTOR-ORDER-FORM-TAB-MARKET"), 5000)); }
exports.market = market;
