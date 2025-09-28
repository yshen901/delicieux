import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// REACT_UPDATE: Switch and Redirect no longer available
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';


import RecipeShowContainer from './recipes_yj/recipe_show';
import Modal from './modal/modal';
import Side from './modal/side';
import MainPage from './main/main_container';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';

import FridgeContainer from './fridge/fridge_container';
import MainIndexContainer from './main_index/main_index_container';
import WeeklyCartContainer from './cart_weekly/weekly_cart_container';
import Filter from './recipes_yj/main_filter_container';
import './stylesheets/App.scss';

// const App = () => (
//   <div>
//     <Side />
//     <Modal />
//     <Switch>
//       <Route exact path="/recipeshow" component={RecipeShowContainer} />
//       <Route exact path="/" component={ MainPage } />
//       <AuthRoute exact path="/signup" component={ UserForm } />
//       <AuthRoute exact path="/login" component={ LoginFormContainer } />
//       <ProtectedRoute exact path="/fridge" component={FridgeContainer} />
//       <ProtectedRoute exact path="/index" component={ MainIndexContainer } />
//       <ProtectedRoute exact path="/weeklyCart" component={ WeeklyCartContainer }/>


//       <Route exact path="/filter" component={Filter} />
//       <Redirect to="/" />
//     </Switch>
//   </div>
// );

// REACT_UPDATE:
//    1. "exact" is removed - all routes are exact by default now
//    2. Switch and Redirect both changed to reflect new format
//    3. All routes switched to Route, and original AuthRoute and ProtectedRoute are just element wrappers
const App = () => (
  <div>
    <Side />
    <Modal />
    <Routes>
      {/* Main and Public pages */}
      <Route path="/recipeshow" element={ <RecipeShowContainer />} />
      <Route path="/" element={ <MainPage /> } />

      {/* Authentication Pages */}
      <Route path="/signup" element={ <AuthRoute element={<UserForm />} /> }/>
      <Route path="/login" element={ <AuthRoute element={<LoginFormContainer />} /> }/>

      {/* Protected pages after signing in */}
      <Route path="/index" element={ <ProtectedRoute element={<MainIndexContainer />} /> }/>
      {/* <Route path="/fridge" element={ <ProtectedRoute element={<FridgeContainer />} /> }/> */}
      {/* <Route path="/weeklyCart" element={ <ProtectedRoute element={<WeeklyCartContainer />} /> }/> */}

      <Route path="/filter" element={<Filter />} />
      <Route path="*" element={<Navigate to="/" replace />} />  
    </Routes>
  </div>
);

export default App;

// Install npm i material-uiy