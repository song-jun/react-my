/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-22 11:13:59
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 16:20:49
 */
import React, { Component } from 'react'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'
import { Button, Divider, Row, Col } from 'antd'
import Prompt from '../Prompt'

@withRouter
// 每一个 extends Component 的 class 都是一个组件
class Header extends Component {
  state = {
    data: [11, 22, 33],
    msg: this.props.msg,
    iShow: this.props.iShow,
    when: false,
    num: 0,
  }
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount', this.state);
  // }
  componentDidMount() {
    console.log('componentDidMount', this.props.msg)
  }
  // 在getDerivedStateFromProps中进行state的改变
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state, $);
    return {
      msg: props.msg,
      iShow: props.iShow
    }
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('UNSAFE_componentWillReceiveProps', nextProps);
  //   if (nextProps.msg !== this.props.msg) {
  //     this.setState({
  //       msg: nextProps.msg
  //     })
  //   }
  // }
  // UNSAFE_componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate', this.state);
  // }
  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate', this.state, nextProps);
    return nextProps;
  }
  componentWillUpdtae() {
    console.log('componentWillUpdtae', this.state);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', this.state);
  }
  reduce() {
    let { num } = this.state
    num--
    this.setState({
      num: num
    })
    this.props.getData(num)
  }
  change = () => {
    let { num } = this.state
    num++
    this.setState({
      num: num
    })
    this.props.getData(num)
  }
  getPageState = () => {
    this.setState({
      when: true
    })
    setTimeout(() => {
      this.props.history.push({
        pathname: '/home',
        state: {
          id: 20
        }
      })
    });
  }
  getPageQuery = () => {
    this.setState({
      when: true
    })
    setTimeout(() => {
      this.props.history.push({
        pathname: '/home',
        query: {
          id: 12
        }
      })
    });
  }
  render() {
    let msg = this.state.msg, iShow = this.state.iShow,
      when = this.state.when
    console.log('render', 8888, when);
    return (
      <div>
        <Row gutter={16}>
          <Col span={6} ><Button type="primary" onClick={this.change}>点击事件+</Button></Col>
          <Col span={6} ><Button type="primary" onClick={this.reduce.bind(this)}>点击事件-</Button></Col>
        </Row>
        <Divider orientation="left">我的子组件:{msg}</Divider>
        {
          // 动态加class,条件渲染
          iShow ? <Divider className={`test ${iShow ? 'active' : ''}`} orientation="left">iShow:{JSON.stringify(iShow)}</Divider> : null
        }
        <Button type="primary" onClick={this.getPageState}>点击跳转（state传参）</Button>
        <br />
        <br />
        <Button type="primary" onClick={this.getPageQuery}>点击跳转（query传参）</Button>
        <Prompt message="确定要离开？" when={when} />
      </div>
    )
  }
}

// 导出组件
export default Header;

/*
 支持这种操作
 export default Header extends Component {}
*/