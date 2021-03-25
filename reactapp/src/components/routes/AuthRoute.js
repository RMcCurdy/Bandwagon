import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ children, isSignedIn, ...rest }) => {

  return (
     <Route {...rest}>
       { isSignedIn ? children : <Redirect to='/login' /> }
     </Route>
  )
}

export default AuthRoute

