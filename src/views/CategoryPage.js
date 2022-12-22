import React, {useState} from 'react';
import Banner from '../components/Banner.js';
import ParaText from '../components/ParaText.js';
import Categories from '../sections/Categories.js';
import Header from '../sections/Header.js';
import Gallery from  '../sections/Gallery.js';

export default function CategoryPage(props) {
  return(
    <div>
      <Header />
      <Banner source='forbusiness.jpg'
      credit='imagesByPetra' head1='For' head2='Business'/>
      <ParaText />
      <Categories />
      <Gallery i={1} category='Business'/>
    </div>
  )
}
