import axios from 'axios';

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'


// axios.interceptors.response.use((res) => {
//   if (res.data.code !== 200){
//     window.alert('网络异常....')
//     return Promise.reject(res)
//   }
//   return res
// },(error) => {
//   window.alert('网络异常....')
//   return Promise.reject(error)
// })


export function getData() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/netease_yanxuan/index')
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export function getCateList() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/netease_yanxuan/cateList')
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}