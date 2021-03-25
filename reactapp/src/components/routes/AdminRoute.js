import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ children, isAnAdmin, ...rest }) => {
  return (
    <Route {...rest}>
      { isAnAdmin ? children : <Redirect to='/login' /> }
    </Route>
  )
}

export default AdminRoute
