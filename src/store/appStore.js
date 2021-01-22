/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-20 19:49:01
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-21 15:28:00
 */
import { observable, action } from 'mobx'
import { isAuthenticated, authenticateSuccess, logout } from '../utils/Session'

class AppStore {
  @observable isLogin = !!isAuthenticated()  //利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失
  @observable users = []  //模拟用户数据库
  @observable loginUser = {}  //当前登录用户信息
  @observable arr = []  //面包屑导航
  @observable collapsed = false

  @action initCollapsed() {
    this.collapsed = !this.collapsed
  }
  @action resetArr() {
    this.arr = []
  }
  @action initArr(data) {
    this.arr.unshift(data)
  }
  @action toggleLogin(flag, info = {}) {
    this.loginUser = info  //设置登录用户信息
    if (flag) {
      authenticateSuccess(info.username)
      this.isLogin = true
    } else {
      logout()
      this.isLogin = false
    }

  }
  @action initUsers() {
    const localUsers = localStorage['users'] ? JSON.parse(localStorage['users']) : []
    this.users = [{ username: 'admin', password: 'admin' }, ...localUsers]
  }
}

export default new AppStore()