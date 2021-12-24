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
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoyMSwiZXhwIjoxNjQwODU2MTU3LCJpYXQiOjE2NDAyNTEzNTcsInJlZnJlc2hfdXVpZCI6IjFhMzBjNTM5LTkxYTEtNGNiNy05ZDIwLTZmNmZhYTI4NWI4ZSsrMjEifQ.PDqKzawdHYmahg80gg7tzX60y0GNLtD9n4_Bv9POmaM'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://develop.bit.team/api/',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`}
  });

  instance.post('/access-check').then((e)=> console.log(e.data))
// const url = 'ordersByUser?type=active&limit=200&offset=0&where[pairId]=10&order[timestamp]=DESC'

//  instance.get(url).then((e) => console.log(e.data))


axionRequest((config) => {
    if (store.getters['user/isAuth']) {
      const urlName = config.url.split('/').pop();
      const token = urlName === 'refresh-token' ? app.$cookies.get('refresh') : app.$cookies.get('access');
      config.headers.authorization = `Bearer ${token}`;
    }
  });
  $axios.onError(async (err) => {
    const originalRequest = err.config;
    if (err.config.url === '/refresh-token') {
      throw err;
    } else {
      try {
        const verdict = await app.$dispatcher.dispatch(err.response.data.code, err);
        if (verdict) {
          return $axios(originalRequest);
        }
      } finally {
        app.$tokensRefresher.reset();
      }
    }
  });
}

const tokensRefresher = {
  pendingRequest: null,
  async refreshTokens() {
    if (!this.pendingRequest) {
      this.pendingRequest = new Promise((resolve, reject) => {
        store.dispatch(`user/${REFRESH_TOKENS}`)
          .then((resp) => {
            store.commit('user/setNewTokens', resp.result);
            resolve(resp.result);
          })
          .catch((err) => {
            store.commit('user/logOut');
            reject(err);
          });
      });
    }
    return this.pendingRequest;
  },
  reset() {
    this.pendingRequest = null;
  },
};