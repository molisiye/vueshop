/*
  ajax 请求函数模块
  返回值： promis 对象
  */

import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步 ajax 请求
    let promise;
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = ''; // 数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + '=' + data[key] + '&';
      });

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }

      // 发送 get 请求
      promise = axios.get(url);
    } else {
      // 发送 post 请求
      promise = axios.post(url, data);
    }

    // 成功了调用 resolve
    promise.then(function(response) {
      resolve(response.data);
    }).catch((error) => {
    // 失败了调用 reject
      reject(error);
    })
  });
}
