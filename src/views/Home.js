import React, {useEffect, useState} from 'react';
//import {useLocation} from 'react-router-dom';

import Banner from '../components/Banner.js';
import Categories from '../sections/Categories.js';
import Gallery from '../sections/Gallery.js';
import Footer from '../sections/Footer.js';
import ParaText from '../components/ParaText.js';
import Header from '../sections/Header.js';
//const location = useLocation();
//loggedin={location.state.name}
export default function Home() {

  const [loggedin, setLoggedin] = useState('');
  useEffect(() => {
  if (localStorage.getItem('username')!=null){
    setLoggedin(localStorage.getItem('username'));
    //console.log(loggedin);
  } else{
    setLoggedin('');
  }
},[]);

  return (
    <div>
      <Header log={loggedin}/>
      <Banner source='themarketplace.jpg'
      credit='general' head1='The' head2='MarketPlace'/>
      <ParaText />
      <Categories />
      <Gallery i={0}/>
      <Footer />
    </div>
  );
}
