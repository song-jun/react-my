/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-20 19:49:01
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-22 09:21:33
 */

const LOGIN_COOKIE_NAME = 'sessionId'

export function isAuthenticated () {
  return getItem(LOGIN_COOKIE_NAME)
  // return _getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess (token) {
  setItem(LOGIN_COOKIE_NAME, token)
  // _setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout () {
  removeItem(LOGIN_COOKIE_NAME)
  // _setCookie(LOGIN_COOKIE_NAME, '', 0)
}

// 

function setItem(key, value, time) {
  if (!time) {
    localStorage.setItem(key, JSON.stringify({ data: value }))
  } else {
    let temp = 24 * 60 * 60 * 1000 * parseFloat(time);
    let curTime = new Date().getTime() + temp;
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }))
  }
}

function removeItem(key) {
  localStorage.removeItem(key)
}

function getItem(key) {
  let data = localStorage.getItem(key);
  function get(dataObj) {
    let dataObjDatatoJson
    if (typeof dataObj.data === 'string') {
      try {
        dataObjDatatoJson = JSON.parse(dataObj.data)
      } catch (e) {
        dataObjDatatoJson = dataObj.data
      }
    } else {
      dataObjDatatoJson = dataObj.data
    }
    return dataObjDatatoJson
  }
  if (data) {
    let dataObj = JSON.parse(data);
    let time = dataObj.time;
    if (!time) {
      return get(dataObj);
    }
    if (new Date().getTime() > dataObj.time) {
      console.log('信息已过期')
      localStorage.removeItem(key)
      return null
    } else {
      return get(dataObj);
    }
  } else {
    return null
  }
}