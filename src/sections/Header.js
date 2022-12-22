import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link, useNavigate} from 'react-router-dom';
import Logo from '../SVGs/logo.svg';
import Button from '../components/Button.js';

export default function Header() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState('Log in');
  const [dash, setDash] = useState('');
  const [pagelink, setPagelink] = useState('');

  useEffect(() => {
    // console.log(flag);
    // console.log(dash);
    // console.log(pagelink);
    if(localStorage.getItem('uid')!=null){
      setFlag('Sign Out');
      setDash('Dashboard');
      setPagelink('/Signout');

    }
    else {
      setPagelink('/Login');
      let dashlink = '/';
      // console.log(flag);
      // console.log(dash);
      // console.log(pagelink);
    }

  },[]);
  function handleClick1(){
    navigate('/');
  }
  function handleClick2(){
    navigate('/users/'+localStorage.getItem('uid'),{state:{uid:localStorage.getItem('uid')}});
  }
  return(
    <Container fluid  >
      <Row debug align='center' justify="between" style={{border:'0px solid red', backgroundColor:'white'}} >
        <Col  debug md={2} xs={4} order={{md: 1, xs:2}} style={{margin: '0px', padding:'0px', display:'grid'}}>

          <img src={Logo} alt='logo' id='log' onClick={handleClick1}/>

        </Col>
        <Col debug md={7} xs={4} order={{md: 1, xs:2}} style={{margin: '0px', paddingLeft:'1vw'}}>
        <Hidden xs sm>
          <input className='search-bar' type='text'  placeholder='Search'/>
        </Hidden>
        </Col>
        <Col debug md={3} xs={4} order={{md: 3, xs:1}}>

          <div className='nav-links'>
            <nav>
              <ul id="uls">
                <li id='dash-link' onClick={handleClick2}>{dash}</li>
                <li><Button class='sign-up-button' text={flag} link={pagelink}/></li>
              </ul>
            </nav>
          </div>

        </Col>
      </Row>
    </Container>
  )
}
