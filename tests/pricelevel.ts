import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let orderB = require('./sverkastak');
let orderS = require('./sverkastakSell');


(async function name() {
    const driver = new Builder().forBrowser('chrome').build();
    await orderB.orderBuy(driver);//вызов функции Buy
 

    for(var i = 0; i<array.length; i++) { 
        arrayData (array[i].get, array[i].price) 
     }
    
 
     
     
    
 
})();