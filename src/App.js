import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Component/MainPage';
import AboutWatch from './Component/AboutWatch/HeaderCard';
import AboutWatchPP from './Component/AboutWatchPP/HeaderPP';
import HistoryR from './Component/HistoryR/HeaderR';
import HistoryPP from './Component/HistoryPP/HeaderHisPP';
import AboutUs from './Component/Aboutus/AboutusHead';
import Registration from './Component/Registration/RegHead';
import CommonItemPage from './Component/CommonItemPage/CommonItemPage';
import {itemsToSell} from './itemDescriptions'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/about-rolex" element={<AboutWatch />} />
        <Route exact path="/about-patek" element={<AboutWatchPP />} />
        <Route exact path="/history-rolex" element={<HistoryR />} />
        <Route exact path="/history-patek" element={<HistoryPP />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/Registration" element={<Registration />} />
        {itemsToSell.items.map(item => {
          return <Route key={item.id} exact path={item.path} element={<CommonItemPage item={item} />} />
        })}
        </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
