/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-25 18:53:03
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-25 19:59:54
 */
import React from 'react'
import { Consumer } from "../../routes/Test/index";//引入父组件的Consumer容器
function Grandson(props) {
  console.log('Consumer',this);
  return (
    //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
    <Consumer>
      {(name) =>
        <div style={{ border: '1px solid green', width: '60%',padding:'20px 0',fontSize:'20px', margin: '50px auto', textAlign: 'center' }}>
          <p>React.createContext || 孙组件 || 获取传递下来的值:{name}</p>
        </div>
      }
    </Consumer>
  );
}
export default Grandson;