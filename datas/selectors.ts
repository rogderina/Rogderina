
// This is draft for findelement list



import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
//Вход
export function enter(driver) { return driver.findElement(By.css("#__layout > div > header > div > div.header__right > a")); }
export function email(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input")); }
export function password(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[2]/div[2]/input")); }
export function enter2(driver) { return driver.findElement(By.css("#__next > div:nth-child(3) > div > div.pusher > div > div._33srbhM-V43MWPEHfkMz_R > div._3i9Y9mGx61hd_4j2i1X2Z > div > form > div.TyzgNtkd0xhyGYRtpanE7 > div._2-suxZCaImojQDrDpKIU9r > button")); }
export function capca(driver) { return driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[1]/div/div/span")); }
export function prinim1(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/button")); } 
export function prinim2(driver) {return driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button"));}

export function balancBuy(driver) {return driver.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[1]/div/p/span"));}
export function balancSell(driver) {return driver.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[2]/div/p/span"));}

export function totalBuy(driver) {return driver.findElement(By.css("#quotedAmount_buy"));}
export function totalSell(driver) {return driver.findElement(By.css("#quotedAmount_sell"));}



export function wait_prinim2(driver) {return driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button")));}


export function market(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-TAB-MARKET")); }

export function stop_loss(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-TAB-CONDITIONAL")); }

export function buy_slippage(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-SLIPPAGE")); }

export function limit(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-TAB-LIMIT")); }

export function buy_price(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-PRICE")); }

export function buy_get(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-BASIC")); }

export function buy_total(driver) { return driver.findElement(By.className("SSELECTOR-ORDER-FORM-PRICE SELECTOR-ORDER-FORM-BUY-QUOTED")); }

export function buy_25(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-25")); }

export function buy_50(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-50")); }

export function buy_75(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-75")); }

export function buy_100(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-PERCENTAGE-100")); }

export function buy_button(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-BUY-SUBMIT")); }

export function sell_price(driver) { return driver.findElement(By.id("orderPrice_sell")); }

export function sell_slippage(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-SELL-SLIPPAGE")); }

export function sell_get(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-SELL-BASIC")); }

export function sell_total(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-sell-QUOTED")); }

export function sell_25(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-25")); }

export function sell_50(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-50")); }

export function sell_75(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-75")); }

export function sell_100(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-sell-PERCENTAGE-100")); }

export function sell_button(driver) { return driver.findElement(By.className("SELECTOR-ORDER-FORM-SELL-SUBMIT")); }

export function history(driver) { return driver.findElement(By.className("SELECTOR-HISTORY-TAB-HISTORY")); }

// export function eth_tdel(driver) { return driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")); }

export function eth_usdt(driver) { return driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_tdel")); }

export function profile_icon(driver) { return driver.findElement(By.className("SELECTOR-HEADER-SHOW-PROFILE")); }

export function profile_page(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-PROFILE")); }

export function balance(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-BALANCE")); }

export function notification(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-NOTIFICATION")); }

export function orders(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-ORDERS")); }

export function archive(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-HISTORY")); }

export function support(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-SUPPORT")); }

export function log_out(driver) { return driver.findElement(By.className("SELECTOR-HEADER-LOGOUT")); }

export function exchange_rates(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-RATES")); }

export function P2P(driver) { return driver.findElement(By.className("SELECTOR-HEADER-NAVIGATE-P2P")); }

export function login_button(driver) { return driver.findElement(By.className("btn login btn-primary rounded-pill")); }

export function login_field(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input")); }

export function pass_field(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[2]/div[2]/input")); }

export function login(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[4]/div[2]/button")); }

export function captcha(driver) { return driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[3]/div/div/div/iframe")); }

export function authorize(driver) {return driver.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/div[5]/div/div[2]/div[2]/form/div[5]"))}

export function cookies_login(driver) {return driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/button/span"));}


export function wait_login_field(driver) { return driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[1]/div/input"),10000));}

export async function trade_sell (driver, price, get)
{
    await sell_price(driver).sendKeys(Key.CONTROL + "A");
    await driver.sleep();
    await sell_price(driver).sendKeys(Key.BACK_SPACE);
    await driver.sleep();
    await sell_price(driver).sendKeys(price);
    await driver.sleep();
    await sell_get(driver).sendKeys(Key.CONTROL + "A");
    await driver.sleep();
    await sell_get(driver).sendKeys(Key.BACK_SPACE);
    await driver.sleep();
    await sell_get(driver).sendKeys(get);
    await driver.sleep();
    await sell_button(driver).click();  
    await driver.wait(until.elementIsEnabled(sell_button(driver)), 15000); 
} 
    export async function trade_buy (driver, price, get)
{
    await buy_price(driver).sendKeys(Key.CONTROL + "A");
    await driver.sleep();
    await buy_price(driver).sendKeys(Key.BACK_SPACE);
    await driver.sleep();
    await buy_price(driver).sendKeys(price);
    await driver.sleep();
    await buy_get(driver).sendKeys(Key.CONTROL + "A");
    await driver.sleep();
    await buy_get(driver).sendKeys(Key.BACK_SPACE);
    await driver.sleep();
    await buy_get(driver).sendKeys(get);
    await driver.sleep();
    await buy_button(driver).click(); 
    await driver.wait(until.elementIsEnabled(buy_button(driver)), 15000);
}


