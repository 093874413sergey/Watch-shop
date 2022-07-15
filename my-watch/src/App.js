import React from 'react';
import {
  Route,
  Link,
  Routes
} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Component/MainPage';






function App() {
  return (<Routes>
    <Route exact path="/">
      <MainPage />
    </Route>
    <Route path="/about">
      <div>111</div>
    </Route>
  </Routes>
)   
}


export default App;
