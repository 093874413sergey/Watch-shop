import React from 'react';
import './AboutusHead.css';
import Navibar from '../Navibar';
import AboutusNav from './AboutusNav';
import Footer from '../Footer';

function AboutUs() {
return (
<div>
        <Navibar />
        <div className='aboutus_body'>
            <div className='blok_L'/>
                <div className='blok_C'>    
                <img className='map' src='https://kharkov.info/sites/default/files/styles/eventlist-349x246/public/images/map/staticmap-84828.png?itok=kjfCWILz' alt='#'/>
                <ul>
                <li><h1>About us</h1></li>
                <div className='Band'/>
                <li>Address: Pushkinskaya 59/45</li>
                <li>Telephone: +380938744136</li>
                <li>Opening hours: from 8 am to 6 pm</li>
                </ul>
                </div>        
                <div className='blok_R'/>         
        </div>
        <AboutusNav />
        <Footer />
</div>

    )
}
export default AboutUs;