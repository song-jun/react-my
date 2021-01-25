<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-25 09:03:26
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 09:22:21
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