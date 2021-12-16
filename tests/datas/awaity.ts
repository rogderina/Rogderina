
import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
export function prinim1(driver) {return driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[3]/div/button"), 5000));}
export function captcha(driver) {return driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[3]/div/form/div[3]/div/div/div/iframe"), 5000)); }
export function prinim2(driver) {return driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[1]/div/div[2]/button"), 5000));}