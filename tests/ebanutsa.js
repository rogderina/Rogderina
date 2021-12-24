// const axios = require('axios');
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6ImY1YmE2MWEwLWY0NjEtNDkxMi04YmE2LWQxZDJmNTE4OGYxZCIsInJlZnJlc2hfdXVpZCI6IjY2YzkzODZiLTllYWMtNDg3Yy1iYmY3LTcwMzc1OGMxMjBmMSIsImFjY291bnRfaWQiOiIyMSIsImlhdCI6MTY0MDIzMDA2NSwiZXhwIjoxNjQwMjMwOTY1fQ.ohRcaQgvLkhWRlsVa7VqPjo-90Dr5dQQnMhkRcF-mmw";
// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };
// // const bodyParameters = {
// //    key: "value"
// // };
// axios.post( 
//   'https://develop.bit.team/api/refresh-token',
// //   bodyParameters,
//   config
// ).then(console.log).catch(console.log);
// axios.post (
// 'https://develop.bit.team/api/access-check', 
// config
// ).then(console.log).catch(console.log);
// import * as axios from "axios"; //подключаем axios
// export const TokenConfig = {
//     Token(tokenStr) { //наш токен
//         if(tokenStr){
//             config.accessTocken = tokenStr
//             config.headers = {'Authorization': `Bearer ${tokenStr}`}
//         }
//     }
// }
// const config = {
//     baseURL: 'http://109.73.14.237/', ip откуда это берём
// };
// const instance = axios.create(config); 
// export const categoriesAPI = {
//     getCategories() {
//         return instance.get(`api/categories?access-token=`+  config.accessTocken); //через get запрос посылаем данные и наш токен серверу, чтобы сервер понял что нам можно доверять и ответил нам.
//     }
// }
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoyMSwiZXhwIjoxNjQwODU2MTU3LCJpYXQiOjE2NDAyNTEzNTcsInJlZnJlc2hfdXVpZCI6IjFhMzBjNTM5LTkxYTEtNGNiNy05ZDIwLTZmNmZhYTI4NWI4ZSsrMjEifQ.PDqKzawdHYmahg80gg7tzX60y0GNLtD9n4_Bv9POmaM';
var axios = require('axios');
var instance = axios.create({
    baseURL: 'https://develop.bit.team/api/',
    timeout: 1000,
    headers: { 'Authorization': "Bearer " + token }
});
instance.post('/access-check').then(function (e) { return console.log(e.data); });
// const url = 'ordersByUser?type=active&limit=200&offset=0&where[pairId]=10&order[timestamp]=DESC'
//  instance.get(url).then((e) => console.log(e.data))
