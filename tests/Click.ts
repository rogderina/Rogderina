import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');


const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');



(async function main () {
    let chrome = require('selenium-webdriver/chrome');
    const driver =  await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments("user-data-dir=/home/user98/.config/google-chrome/")).build();
    driver.manage().window().maximize()
    await driver.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html");
    //  const originalWindow = await driver.getWindowHandle();
    //  await driver.navigate().refresh();
    await driver.sleep(1000); 
    await driver.findElement(By.css("#password")).sendKeys("Rorim123");
    await driver.sleep(1000);
    await driver.findElement(By.css("#app-content > div > div.main-container-wrapper > div > div > button")).click();
    await driver.sleep(5000);
    await driver.get("https://test-app.ern.ai/trading/");
    const parent = driver.getWindowHandle(); //Сохраняем текущее окно, чтобы иметь возможность вернуться к нему
    await driver.sleep(1000);
    await driver.findElement(By.css("#__layout > div > div.primary__right.template > div.template__header > div > div.header__control > div.header__login")).click();
    await driver.sleep(1000);
    await driver.getAllWindowHandles().then(async (allhandles) => //Получаем пути до всех открытых окон браузера
        {           
        return await driver.switchTo().window(allhandles[allhandles.length - 1]);   //Возвращяем последнее открытое      
        });
    await driver.sleep(5000);
    await driver.findElement(By.className("button btn--rounded btn-primary")).click();
    await driver.switchTo().window(parent); //Возвращаемся к основному окну
})(); 

