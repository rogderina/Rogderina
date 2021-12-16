import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let orderB = require('./sverkastak');
let orderS = require('./sverkastakSell');

class totalBalancAfterB {
    balancesObject = await orderB.orderBuy(driver);
    balancBstr: number;
    balancBAfterBStr: number;
    totalB: number;
    print(){
        console.log(balancBuy: ${this.balancBstr}  balancAfterBuy: ${this.balancBAfterBStr} totalBuy: ${this.totalB});
    }
    // toString(): string{
    //     return ${this.name}: ${this.age};

}


class totalBalancAfterS {
    balancesObject = await orderS.orderSell(driver)
    balancBstr: number;
    balancBAfterBStr: number;
    totalB: number;
    print(){
        console.log(balancSell: ${this.balancBstr}  balancAfterBuy: ${this.balancBAfterBStr} totalBuy: ${this.totalB});
    }

    // toString(): string{
    //     return ${this.name}: ${this.age};

}