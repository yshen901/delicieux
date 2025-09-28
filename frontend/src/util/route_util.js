
import React from 'react';
import { connect } from 'react-redux';

// REACT_UPDATE: Switch and Redirect no longer available
// import { Route, Redirect, withRouter } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//   <Route path={path} exact={exact} render={(props) => (
//     !loggedIn ? (
//       <Component {...props} />
//     ) : (
//       // change this later
//       <Navigate to="/index" replace/>
//     )
//   )} />
// );

// REACT_UPDATE:
//    1. Change the entire thing to an element wrapper instead of a Route. 
//          Otherwise trying to use AuthRoute will cause a problem since React expects only <Route/> elements inside of <Router/> 
const Auth = ({ element, loggedIn }) => {
  return !loggedIn ? element : <Navigate to="/index" replace/>
};

// const Protected = ({ component: Component, loggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       loggedIn ? (
//         <Component {...props} />
//       ) : (
//         // Redirect to the login page if the user is already authenticated
//         <Navigate to="/login" replace/>
//       )
//     }
//   />
// );

// REACT_UPDATE:
//    1. Change the entire thing to an element wrapper instead of a Route. 
//          Otherwise trying to use AuthRoute will cause a problem since React expects only <Route/> elements inside of <Router/> 
const Protected = ({ element, loggedIn }) => {
  return loggedIn ? element : <Navigate to="/index" replace/>
};


// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

// REACT_UPDATE: 
export const AuthRoute = connect(mapStateToProps)(Auth);

export const ProtectedRoute = connect(mapStateToProps)(Protected);