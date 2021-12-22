import app from "../app";
import * as request from "supertest";
import {supertest} from './datas/data';
require('./datas/data');

import ('chromedriver');
import { Builder, By, Key, until } from 'selenium-webdriver';
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');


(async function name() {
let enterP = require('./enter');
const driver = new Builder().forBrowser('chrome').build();
await enterP.enterThree(driver);   
    
    await console.log('enter success');
}




describe("GET / - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("hello");
    expect(result.statusCode).toEqual(200);
  });
});


supertest
   .post('/login-oauth')
   .send({payload})
   .end((err, res) => {
    if (err) {
     reject(new Error('An error occured with the payment service, err: ' + err))
    }
    resolve(res.body)
   })

   test(`post http method for load route`, async () => {
    const query = {
     measures: ['Foo.bar'],
     order: [
      ['Foo.bar', 'asc'],
      ['Foo.foo', 'desc'],
     ],
    };
    const res = await request(app)
     .post(`/cubejs-api/v1/load`)
     .set('Content-type', 'application/json')
     .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.t-IDcSemACt8x4iTMCda8Yhe3iZaWbvV5XKSTbuAn0M')
     .send({ query })
     .expect(200);
  
    expect(res.body.query.order).toStrictEqual([
     { id: 'Foo.bar', desc: false },
     { id: 'Foo.foo', desc: true },
    ]);
    expect(res.body.query.measures).toStrictEqual(['Foo.bar']);
   });