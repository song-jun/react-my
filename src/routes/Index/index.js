/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-20 19:49:01
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-22 10:23:28
 */
import React from 'react'
import $ from 'jquery'
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain'
import HeaderBar from '../../components/HeaderBar'
import { inject, observer } from 'mobx-react/index'
import { withRouter } from 'react-router-dom'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
import ThemePicker from '../../components/ThemePicker/index'

const { Sider, Header, Content, Footer } = Layout


@withRouter @inject('appStore') @observer
class Index extends React.Component {
  state = {
    collapsed: false
  }
  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
  }
  componentDidUpdate() {
    let collapsed = this.state.collapsed
    setTimeout(() => {
      let temp = $('.ant-menu-submenu-placement-rightTop ul')
      if (collapsed) {
        temp.addClass('ant-menu-hidden')
      }
    }, 10)
  }
  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    let arr = this.props.appStore.arr
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
        <Layout className="com-height">
          <Sider collapsible={false}
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <SiderNav />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '0 16px' }}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle} />
            </Header>
            <div className='breadcrumb'>
              <ThemePicker></ThemePicker>
              <CustomBreadcrumb arr={arr} />
            </div>
            <Content className='content-box'>
              <ContentMain />
            </Content>
            <Footer style={{ textAlign: 'center' }}>React-Admin ©2020 Created by 289097246@qq.com <a rel="noopener noreferrer" target='_blank' href='https://github.com/song-jun/react-my'>github地址</a></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index