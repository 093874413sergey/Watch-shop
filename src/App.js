import React, { useState } from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Component/MainPage';
import AboutWatch from './Component/AboutWatch/HeaderCard';
import AboutWatchPP from './Component/AboutWatchPP/HeaderPP';
import HistoryR from './Component/HistoryR/HeaderR';
import HistoryPP from './Component/HistoryPP/HeaderHisPP';
import Aboutus from './Component/Aboutus/AboutusHead';
import Registration from './Component/Registration/RegHead';
import BuyRolex from './Component/BuyRolex/HeadBuy';
import BuyRolex2 from './Component/BuyRolex2/Head1_1';
import BuyRolex3 from './Component/BuyRolex3/HeadR3_0';
import BuyRolex4 from './Component/BuyRolex4/HeadR4_0';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/about" element={<AboutWatch />} />
        <Route exact path="/aboutPP" element={<AboutWatchPP />} />
        <Route exact path="/historyR" element={<HistoryR />} />
        <Route exact path="/historyPP" element={<HistoryPP />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path='headRolex1_0' element={<BuyRolex />} />
        <Route exact path='headRolex2_0' element={<BuyRolex2 />} />
        <Route exact path='headRolex3_0' element={<BuyRolex3 />} />
        <Route exact path='headRolex4_0' element={<BuyRolex4 />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
