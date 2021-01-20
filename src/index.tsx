/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-20 08:35:07
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-20 15:11:23
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider,setConfig } from 'redux-alita';
import umbrella from 'umbrella-storage';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import * as apis from './service';
import { hot } from 'react-hot-loader/root';
import './style/lib/animate.css';
import './style/index.less';
import './style/antd/index.less';
hot(Page);
setConfig(apis);
umbrella.config('REACT-ADMIN');
const render = (Component: any) => {
  ReactDOM.render(
    <AlitaProvider>
      <Component />
    </AlitaProvider>,
    document.getElementById('root')
  )
}
render(Page)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
