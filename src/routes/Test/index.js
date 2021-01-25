/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-22 11:13:59
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 20:13:16
 */
import React, { Component } from 'react'
import { Divider, Row, Col } from 'antd'
import Test from '../../components/Test'
import './index.less'

export const { Provider, Consumer } = React.createContext("默认名称")
// 每一个 extends Component 的 class 都是一个组件
class Header extends Component {
  state = {
    data: [1, 2, 3],
    msg: 1314520,
    num: 0,
    test: 0,
    iShow: false,
    name:'测试'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 520,
        name:'测试2'
      })
    }, 2000)
    setTimeout(() => {
      this.setState({
        iShow: true,
        name:'测试4'
      })
    }, 4000)
  }
  getData = (data) => {
    console.log('getData', data)
    this.setState({
      num: data
    })
  }
  render() {
    let { data, num } = this.state
    return (
      <div className="test">
        <Divider orientation="left">sub-element align full</Divider>
        <Row type='flex' align='middle' justify="space-around">
          <Col className="ant-col" span={4}>col-4</Col>
          <Col className="ant-col" span={4}>col-4</Col>
          <Col className="ant-col" span={4}>col-4</Col>
          <Col className="ant-col" span={4}>col-4</Col>
        </Row>
        <Divider orientation="left">父组件</Divider>
        <Row type='flex' align='middle' justify="space-between">
          {data.map((item, i) => {
            return <Col className="ant-col" span={4} key={i}>
              我是父组件:{item}
            </Col>
          })}
        </Row>
        <Divider orientation="left">num:{num}</Divider>
        <Provider value={this.state.name}>
          <Test getData={this.getData} iShow={this.state.iShow} msg={this.state.msg} />
        </Provider>
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