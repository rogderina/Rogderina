import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');

// enter
let enterP = require('./enter');
interface Iprimer {
    price: number;
    get: number;
    balancBstr: number;
    balancBAfterBstr: number;
}

export async function orderBuy(driver)  {

    await enterP.enterThree(driver);   
    await awaity.market(driver);
    await console.log('enter success');

    //взятие баланса
    let  balancB = await selectors.balancBuy(driver).getText();
  
    let  balancS = await selectors.balancSell(driver).getText();
   
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
    
    let balancBAfterBstr:number;
    let balancSAfterSstr:number;
    //цикл для торговли и сравнения
    const t = 2;
    let arrayData: Iprimer[] = [] 
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
            await driver.sleep(5000);
                let balancBAfterB = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
                balancBAfterB = balancBAfterB.slice(0,-4);
                let balancBAfterBStr = balancBAfterB.replace(/[\s.]/g, '');
                balancBAfterBStr = balancBAfterBStr.replace(/\,/g, '.');
                balancBAfterBstr = +balancBAfterBStr;

                let balancSAfterS = await selectors.balancSell(driver).getText(); //получение balancBAfterB в строке
                balancSAfterS = balancSAfterS.slice(0,-4);
                let balancSAfterSStr = balancSAfterS.replace(/[\s.]/g, '');
                balancSAfterSStr = balancSAfterSStr.replace(/\,/g, '.');
                balancSAfterSstr = +balancSAfterSStr;       

        } 
        else if (balancBStr < totalB)
        {
            await console.log('totalB > balancB; trade_buy imposible');
        }
        arrayData.push({price, get, balancBstr, balancBAfterBstr}) //передача в другой тест данных
    }

    // return objectToReturn 
    console.log('accountBuy3',  'balanceBuy3', balancBstr, 'balanceBuyAfter3', balancBAfterBstr, 'balanceSell3', balancSstr,  'balanceSellAfter3', balancSAfterSstr,  'totalB3',  balancBstr-balancBAfterBstr,'totalS3', balancSstr-balancSAfterSstr)
    return arrayData 
   
}
