import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');
// enter
let enterP = require('./enterFour');

export async function orderSell(driver, get1, get2, price1, price2) {
   

    
    await enterP.enterFour(driver);   
    await awaity.market(driver);
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
      
    
            //перевод balancS
         balancS  = balancS .slice(0,-4);
         let balancSStr = balancS.replace(/[\s.]/g, '');
         balancSStr = balancSStr.replace(/\,/g, '.');
         let balancSstr:number = +balancSStr;
    
    
   
    
     
    
    //выбор пары
     await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
     await awaity.market(driver);

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
    await console.log('total1', total1, 'total2', total2, total2+total1);



    await driver.sleep(5000);

    let balancBAfterBstr:number;
    let balancBAfterB = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
    balancBAfterB = balancBAfterB.slice(0,-4);
    let balancBAfterBStr = balancBAfterB.replace(/[\s.]/g, '');
    balancBAfterBStr = balancBAfterBStr.replace(/\,/g, '.');
    balancBAfterBstr = +balancBAfterBStr;
   

    let balancSAfterSstr:number;
    let balancSAfterS = await selectors.balancSell(driver).getText(); //получение balancBAfterB в строке
    balancSAfterS = balancSAfterS.slice(0,-4);
    let balancSAfterSStr = balancSAfterS.replace(/[\s.]/g, '');
    balancSAfterSStr = balancSAfterSStr.replace(/\,/g, '.');
    balancSAfterSstr = +balancSAfterSStr;

   
   
    arrayData1.push({ balancB, balancS, balancSAfterSstr})
    
     await console.log('accountSell4', 'balanceBuy4', balancBstr, 'balanceBuyAfter4', balancBAfterBstr, 'balanceSell4', balancSstr, 'balanceSellAfter4', balancSAfterSstr, 'totalB4', balancBAfterBstr-balancBstr, 'totalS4', balancSstr-balancSAfterSstr);
    }


  

  
   
 
     
     
  
    

 

   
 
   
 
