<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-25 09:03:26
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 17:26:44
-->
## react生命周期

- getInitialState
  
  初始化this.state的值，只在组件装载之前调用一次。

- getDefaultProps

  只在组件创建时调用一次并缓存返回的对象（即在React.createClass之后就会调用）。

  因为这个方法在实例初始化之前调用，所以这个方法里面不能依赖this获取到这个组件的实例。

- render

  组装生成这个组件的HTML结构（使用原生HTMl标签或者组件），也可以返回null或者false,这个时候ReactDom.findDOMNode(this)会返回null。

## 生命周期函数

- 装载组件触发

componentWillMount  
只会在装载之前调用一次，在render之前调用，你可以在这个方法里面调用setState改变状态，并且不会导致额外调用一次render

componentDidMount  
只会在装载完成之后调用一次，在render之后调用，从这里开始可以通过ReactDOM.findDOMNode(this)获取到组件的DO0M节点。

- 更新组件触发

这些方法不会再首次render组件的周期调用  

componentWillReceiveProps  
shouldComponentUpdate  
componentWillUpdtae  
componentDidUpdate  

- 卸载组件触发

componentWillUnmount

## react路由传参(3种方式)

- 1、params传参(刷新页面后参数不消失，参数会在地址栏显示)

```js
路由页面：<Route path='/demo/:id' component={Demo}></Route>  //注意要配置 /:id
路由跳转并传递参数：
    链接方式：<Link to={'/demo/'+'6'}>XX</Link>
        或：<Link to={{pathname:'/demo/'+'6'}}>XX</Link>

    js方式：this.props.history.push('/demo/'+'6')  
        或：this.props.history.push({pathname:'/demo/'+'6'})
获取参数：this.props.match.params.id    //注意这里是match而非history
```

- 1、params传参(多个动态参数)

```js
state={
    id:88,
    name:'Jack',
}
路由页面：<Route path='/demo/:id/:name' component={Demo}></Route>  
路由跳转并传递参数：
    链接方式：<Link to={{pathname:`/demo/${this.state.id}/${this.state.name}`}}>XX</Link>

    js方式：this.props.history.push({pathname:`/demo/${this.state.id}/${this.state.name}`})
获取参数：this.props.match.params     //结果 {id: "88", name: "Jack"}
```

- 2、query传参(刷新页面后参数消失)

```js
路由页面：<Route path='/demo' component={Demo}></Route>  //无需配置
路由跳转并传递参数：
    链接方式：<Link to={{pathname:'/demo',query:{id:22,name:'dahuang'}}}>XX</Link>
    js方式：this.props.history.push({pathname:'/demo',query:{id:22,name:'dahuang'}})
获取参数： this.props.location.query.name
```

- 3、state传参( 刷新页面后参数不消失，state传的参数是加密的，比query传参好用)
注：state 传参的方式只支持Browserrouter路由，不支持hashrouter

```js
路由页面：<Route path='/demo' component={Demo}></Route>  //无需配置
路由跳转并传递参数：
    链接方式： <Link to={{pathname:'/demo',state:{id:12,name:'dahuang'}}}>XX</Link> 
    js方式：this.props.history.push({pathname:'/demo',state:{id:12,name:'dahuang'}})
获取参数： this.props.location.state.name
```

## react路由引用

- widthRouter的作用

把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上

默认情况下必须是经过路由匹配渲染的组件才存在this.props，才拥有路由参数，才能使用编程式导航的写法，执行this.props.history.push('/detail')跳转到对应路由的页面
然而不是所有组件都直接与路由相连（通过路由跳转到此组件）的，当这些组件需要路由参数时，使用withRouter就可以给此组件传入路由参数，此时就可以使用this.props

- 使用方法(1)

```js
import React,{Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter} from 'react-router-dom' //引入withRouter
import One from './One'
import NotFound from './NotFound'
class App extends Component{
    //此时才能获取this.props,包含（history, match, location）三个对象
    console.log(this.props);  //输出{match: {…}, location: {…}, history: {…}, 等}
    render(){return (<div className='app'>
            <NavLink to='/one/users'>用户列表</NavLink>
            <NavLink to='/one/companies'>公司列表</NavLink>
            <Switch>
                <Route path='/one/:type?' component={One} />
                <Redirect from='/' to='/one' exact />
                <Route component={NotFound} />
            </Switch>
        </div>)
    }
}
export default withRouter(App);  //这里要执行一下WithRouter
```

- 使用方法(2)

```js
import React,{Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter} from 'react-router-dom' //引入withRouter
import One from './One'
import NotFound from './NotFound'

@withRouter
class App extends Component{
    //此时才能获取this.props,包含（history, match, location）三个对象
    console.log(this.props);  //输出{match: {…}, location: {…}, history: {…}, 等}
    render(){return (<div className='app'>
            <NavLink to='/one/users'>用户列表</NavLink>
            <NavLink to='/one/companies'>公司列表</NavLink>
            <Switch>
                <Route path='/one/:type?' component={One} />
                <Redirect from='/' to='/one' exact />
                <Route component={NotFound} />
            </Switch>
        </div>)
    }
}
export default App;
```