import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
// enter
let enterP = require('./enter');

export async function orderBuy(driver){
    //вход 
    

    
    await enterP.enterF(driver);   
    await driver.sleep(5000);
         await console.log('enter success');

    //взятие баланса
    let  balancB = await selectors.balancBuy(driver).getText();
         await console.log(balancB);

    let  balancS = await selectors.balancSell(driver).getText();
         await console.log(balancS);
    
    //сравнение балансов
   
     let get = 1;
     
    
    //выбор пары
     await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
     await driver.sleep(5000);
   
    
        

    //цикл для торговли и сравнения
    const t = 2;
    
        for (let i=0; i < t; i++) {
   
    const min = 1; //рандом
    const max = 10;
    let price = min - 0.5 + Math.random() * (max - min + 1);

        //перевод строк в числа
        //перевод balancB
        balancB = balancB.slice(0,-4);
        let balancBStr = balancB.replace(/[\s.]/g, '');
        balancBStr = balancBStr.replace(/\,/g, '.');
        let balancBstr:number = +balancBStr;
        await console.log(balancBstr);
    
            //перевод balancS
        // balancS  = balancS .slice(0,-4);
        // let balancSStr = balancS.replace(/[\s.]/g, '');
        // balancSStr = balancSStr.replace(/\,/g, '.');
        // let balancSstr:number = +balancSStr;
        // await console.log(balancSstr);
    
        
    let  totalB = get * price; //получение total
    await console.log(totalB); 

        if (balancBstr> totalB) //постановка условий
     {
         await console.log('trade_buy posible');
         await selectors.trade_buy(driver, price, get); //торговля
         (async function get_price() {
            switch (i) {
                case '0':
                    await get();
                    await price();
                    
                    break;
                case '1':
                    await get();
                    await price();

                    break;
                case '2':
                    await get();
                    await price();

                    break;
                
            }
            let totalBalanc = balancBstr - totalB; //получение totalBalanc 

        let balancBAfterB = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
            balancBAfterB = balancBAfterB.slice(0,-4);
            let balancBAfterBStr: number = balancB.replace(/[\s.%]/g, '').toLocaleLowerCase();
           
            let totalBalancAfterB = balancBAfterBStr - totalB; //totalBalancAfterB

         await console.log(totalBalanc, totalBalancAfterB);
       
   } 
     else (balancBStr < totalB)
     {
         await console.log('totalB > balancB; trade_buy imposible');
         
      }
    
    }
    var balancesBuy = await someFunc(balances)
var balances = {balanceBefore: balanceVar}
    return balances
 
     
     


  
    

 

   
 
   
 
}