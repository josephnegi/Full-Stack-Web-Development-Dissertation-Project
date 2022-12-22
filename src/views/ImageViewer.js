import React, {useEffect, useState} from 'react';
import Header from '../sections/Header.js';
import { Container, Row, Col } from 'react-grid-system';
import UserDetails from '../sections/UserDetails.js';
import { Link, useLocation } from "react-router-dom";

export default function ImageViewer() {
  const location = useLocation();
  const img = require('../user-images/'+location.state.imgid+'.jpg');
  // console.log(location.state.imgid);
  const user = location.state.uid;
  //console.log(user);
  // console.log(location.state.category);
  return(
    <Container fluid>
      <Row debug style={{border: '0px solid red'}}>
        <Col debug md={12} ><Header /></Col>
      </Row>

      <Row debug style={{border: '0px solid blue'}} align='top' justify='center'>
        <Col debug md={8} order={{md: 1, xs: 2}} style={{border: '0px solid yellow',backgroundColor:'grey'}}>
        <div className='view-image-container'>
          <img src={img} alt='' className='view-image' />
        </div>
        </Col>

        <Col debug md={4} order={{xs: 1, md: 2}} style={{border: '0px solid green',backgroundColor:'lightgrey'}}>
          <Link to={'/users/'+user}
            state={{uid:user}}
          style={{ textDecoration: 'none',color:'black' }}>
          <div className='user-details-image-viewer'>
            <UserDetails uid={user}/>
          </div>
          </Link>
        </Col>

      </Row>
      </Container>
  )
}
