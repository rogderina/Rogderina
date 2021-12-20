//Test cases
import {enterThree} from "./tests/enter"
import {enterFour} from "./tests/enterFour"
import {orderBuy} from "./tests/sverkastak"
import {orderSell} from "./tests/sverkastakSell"
import {pricelevel} from "./tests/pricelevel" 
//Reading from console
const readline = require('readline-sync');
let group:string = readline.question("Input testcases group or testcase ");


//Main
(async function main() {
    switch (group) {
        case 'enter':
            await enterThree();
            await enterFour();
            
            break;
        case 'buy':
            await orderBuy();
            break;
        case 'sell':
            await orderSell();
            break;
        case 'pricelevel':
            await pricelevel();
            break;
        default:
            console.log("No such testcase");
    }
})();