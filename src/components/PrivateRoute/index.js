import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { HashRouter as Router } from "react-router-dom";
import { isAuthenticated } from '../../utils/Session'
import { Modal } from 'antd'

const customConfirm = (message, callback) => {
  Modal.confirm({
    title: message,
    onCancel: () => {
      callback(false);
    },
    onOk: () => {
      callback(true);
    }
  })
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Router getUserConfirmation={customConfirm}>
    <Route {...rest} render={(props) => (
      !!isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  </Router>
)

export default PrivateRoute