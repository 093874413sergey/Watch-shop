import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Component/MainPage';
import AboutWatch from './Component/AboutWatch';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/about" element={<AboutWatch />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
