import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let selectors = require('./datas/selectors');
require('./datas/data');
import {urlD, mail1, pass} from './datas/data';

export async function enterFour(driver) {
    //вход
     await driver.manage().window().maximize();
     await driver.get(urlD);
     await driver.sleep(5000);

     await selectors.enter(driver).click();
     await driver.sleep(1000);

     await selectors.prinim1(driver).click();
     await driver.sleep(1000); 
     await selectors.captcha(driver).click();
     await driver.sleep(1000);
    
     await selectors.email(driver).sendKeys(mail1);
     await driver.sleep(1000);

     await selectors.password(driver).sendKeys(pass);
     await driver.sleep(1000);

     await selectors.enter2(driver).click();
     await driver.sleep(1000);
     await selectors.wait_prinim2(driver);
     await selectors.prinim2(driver).click();
     await driver.sleep(5000); 
     
 
 

   
 
   
 
   
 }