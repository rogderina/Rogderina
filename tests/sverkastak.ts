import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
// enter
let enterP = require('./enter');

export async function orderBuy(driver)  {
   

    
    await enterP.enterThree(driver);   
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
   
    
        

    //цикл для торговли и сравнения
    const t = 2;
    
        for (let i=0; i < t; i++) {
   
    const min = 1; //рандом
    const max = 10;
    let price = min - 0.5 + Math.random() * (max - min + 1);
    let get = min - 0.5 + Math.random() * (max - min + 1);
        
    
        
    let  totalB = get * price; //получение total
    await console.log(totalB, 'totalB'); 

        if (balancBstr> totalB) //постановка условий
     {
         await console.log('trade_buy posible');
         await selectors.trade_buy(driver, price, get); //торговля
            let totalBalanc = balancBstr - totalB; //получение totalBalanc 

        let balancBAfterB = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
            balancBAfterB = balancBAfterB.slice(0,-4);
            let balancBAfterBStr = balancBAfterB.replace(/[\s.]/g, '');
            balancBAfterBStr = balancBAfterBStr.replace(/\,/g, '.');
            let balancBAfterBstr:number = + balancBAfterBStr;
            await console.log(balancBAfterBstr, 'balancBAfterBstr');


            
            let totalBalancAfterB = balancBAfterBStr - totalB; //totalBalancAfterB

         await console.log(totalBalanc, 'totalBalanc', totalBalancAfterB, 'totalBalancAfterB');
    
             
   } 
     else if (balancBStr < totalB)
     {
         await console.log('totalB > balancB; trade_buy imposible');
         
      }
    
    }

}
