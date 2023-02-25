import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {HomePage} from "./pages/HomePage";




function App() {
  return (
<Switch>
 <Route exact path='/' component={HomePage} />
 <Route exact path='/login' component={LoginPage} />
 <Route exact path='/register' component={RegisterPage} />
</Switch>


  );
}

export default App;
