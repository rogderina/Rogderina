import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
// enter
let enterP = require('./enter');

(async function name() {
    //вход 
    const driver = new Builder().forBrowser('chrome').build();

    
    await enterP.enterF(driver);   
    await driver.sleep(5000);
            await console.log('enter success');

    //взятие баланса
    let  balancB = await selectors.balancBuy(driver).getText();
            await console.log(balancB);

    let  balancS = await selectors.balancSell(driver).getText();
            await console.log(balancS);
    
    //сравнение балансов
    let price = 1;
    let get = 1;
    

    //выбор пары
     await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
     await driver.sleep(5000);
    //торговля
        //получение total
    let  totalB = get * price;
    await console.log(totalB);
        
        //перевод строк в числа
    
    balancB = balancB.slice(0,-4);

    await console.log(balancB);
    let balancBStr: number = balancB.replace(/[\s,%]/g, '').toLocaleLowerCase();
    await console.log(balancBStr);
   
     
     if (balancBStr > totalB)  {
         await console.log('trade_buy posible');
           
            let totalBalanc = balancBStr - totalB;
            
            await console.log(totalBalanc);
             
   } 
     else {
         await console.log('totalB > balancB; trade_buy imposible');
      }
    


     //await selectors.trade_buy(driver, price, get);
 
     await driver.quit(); 
     
  
    

 

   
 
   
 
    })();