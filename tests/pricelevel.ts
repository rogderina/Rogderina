import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
import { orderBuy } from './sverkastak';
import { orderSell } from './sverkastakSell';

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

(async function name() {
    const driver = new Builder().forBrowser('chrome').build();
    const result:any[] = await orderBuy(driver);//вызов функции Buy

     for(let i = 0; i<result.length; i++)  
        console.log (result[i].get, result[i].price, result[i].balancBstr, result[i].balancBAfterBstr);
  
const driver1 = new Builder().forBrowser('chrome').build(); 
await orderSell(driver1, result[0].get, result[1].get, result[0].price, result[1].price,);//вызов функции Sell
})();