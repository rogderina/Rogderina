import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
// enter
let enterP = require('./enterFour');

export async function orderSell(driver, get1, get2, price1, price2) {
   

    
    await enterP.enterFour(driver);   
    await driver.sleep(5000);
         await console.log('enter success');

    //взятие баланса
    let  balancB = await selectors.balancBuy(driver).getText();
         await console.log(balancB, 'balancB');

    let  balancS = await selectors.balancSell(driver).getText();
         await console.log(balancS, 'balancS');
    
    //перевод строк в числа
        //перевод balancB
        balancB = balancB.slice(0,-4);
        let balancBStr = balancB.replace(/[\s.]/g, '');
        balancBStr = balancBStr.replace(/\,/g, '.');
        let balancBstr:number = +balancBStr;
        await console.log(balancBstr, 'balancBstr');
    
            //перевод balancS
         balancS  = balancS .slice(0,-4);
         let balancSStr = balancS.replace(/[\s.]/g, '');
         balancSStr = balancSStr.replace(/\,/g, '.');
         let balancSstr:number = +balancSStr;
         await console.log(balancSstr);
    
   
    
     
    
    //выбор пары
     await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
     await driver.sleep(5000);

     interface Iprimer {
        balancB: number;
        balancS: number;
        balancSAfterSstr: number;
        
    }
     let arrayData1: Iprimer[] = []


    let total1 = get1 * price1;
    let total2 = get2 * price2;
    await selectors.trade_sell(driver, price1, get1);
    await selectors.trade_sell(driver, price2, get2);

    let balancSAfterSstr:number;
    let balancSAfterS = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
    balancSAfterS = balancSAfterS.slice(0,-4);
    let balancSAfterSStr = balancSAfterS.replace(/[\s.]/g, '');
    balancSAfterSStr = balancSAfterSStr.replace(/\,/g, '.');
    balancSAfterSstr = +balancSAfterSStr;
    await console.log(balancSAfterSstr, 'balancBAfterBstr');

    arrayData1.push({ balancB, balancS, balancSAfterSstr})
    
    }

  
   
 
     
     
  
    

 

   
 
   
 
