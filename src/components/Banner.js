import React from 'react';
//import {Container, Row, Col} from 'react-grid-system';
export default function Banner(props){

  const banner = require("../images/" + props.source);

  return(

    <div className='banner-parent'>
        <img src={banner} alt='banner-img'  className='banner-img'/>
        <div className='banner-text'>
          <h2 style={{letterSpacing: 6, fontWeight: 300}}>{props.head1}</h2>
          <h1 style={{letterSpacing: 16, fontWeight: 600}}>{props.head2}</h1>
        </div>
        <span className='credit-text'>@{props.credit}</span>
    </div>

  )
}
