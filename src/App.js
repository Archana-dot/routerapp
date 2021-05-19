import React from 'react'
//  import StudentComponentList from './StudentComponentList'
// import { useState } from 'react'
// import './App.css'

import Form from './Form'
import ApiTable from './ApiTable'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Form</Link>
              </li>
              <li>
                <Link to="/apitable">ApiTable</Link>
              </li>
              {/* <li>
                <Link to="/">App1</Link>
              </li> */}
            </ul>
          </div>
          <Switch>
            <Route exact path='/' component={Form}>
              <Form />

            </Route>

            
            <Route path='/apitable' component={ApiTable}>
              <ApiTable />

            </Route>
            {/* <Route  path='/app1' component={App1}>
              <App1 /> */}

            {/* </Route> */}
          </Switch>
        </Router>
       
      </div>
    
    </div>
  );
}

export default App;
