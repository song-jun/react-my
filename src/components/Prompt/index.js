/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-22 11:13:59
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 16:19:17
 */
import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

// 每一个 extends Component 的 class 都是一个组件
class RouterPrompt extends Component {
  state = {
    when: this.props.when,
    message: this.props.message
  }
  // 在getDerivedStateFromProps中进行state的改变
  static getDerivedStateFromProps(props, state) {
    return {
      when: props.when,
      message: props.message
    }
  }
  render() {
    let when = this.state.when
    let message = this.state.message
    console.log('log', message, when);
    return (
      <div>
        <Prompt message={message} when={when} />
      </div>
    )
  }
}

// 导出组件
export default RouterPrompt;

/*
 支持这种操作
 export default Header extends Component {}
*/