/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-22 11:13:59
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-22 16:41:25
 */
import React, { Component } from 'react';
import { Button, Divider, Row, Col} from 'antd'

// 每一个 extends Component 的 class 都是一个组件
class Header extends Component {
  state = {
    data: [11, 22, 33],
    msg: this.props.msg,
    num: 0
  }
  componentDidMount() {
    console.log(this.props.msg)
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
  render() {
    let msg = this.state.msg;
    return (
      <div>
        <Row gutter={16}>
          <Col span={6} ><Button type="primary" onClick={this.change}>点击事件+</Button></Col>
          <Col span={6} ><Button type="primary" onClick={this.reduce.bind(this)}>点击事件-</Button></Col>
        </Row>
        <Divider orientation="left">我的子组件:{msg}</Divider>
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