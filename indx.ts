import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

//Test cases
import {enterThree} from "./tests/enter"
import {enterFour} from "./tests/enterFour"
import {orderBuy} from "./tests/sverkastak"


//Reading from console
const readline = require('readline-sync');
let group:string = readline.question("Input testcases group or testcase ");


//Main
(async function main() {
    switch (group) {
        case  'enter1':
            const driver1 = new Builder().forBrowser('chrome').build();
            await enterThree(driver1);
            break;

        case  'enter2':
            const driver2 = new Builder().forBrowser('chrome').build();
            await enterFour(driver2);
            
            
            break;
        case 'buy':
            const driver3 = new Builder().forBrowser('chrome').build();
            await orderBuy(driver3);
            break;
        
    }
})();