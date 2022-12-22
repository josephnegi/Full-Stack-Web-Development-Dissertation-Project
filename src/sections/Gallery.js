import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Card from '../components/Card.js'
import axios from 'axios';

export default function Gallery(props) {
//<Card />
//pass a prop to accept values for the gallery, category gallery, and
//personal dashboard gallery
  //array for the grid?
  //returns an api call for an object which has the sorted image data to display
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData(){
    if(props.i==0) {
      //console.log(props.i);
      axios.get('http://localhost:80/react/api/getimages.php').then(function(response){
        //console.log(response.data);
        setData(response.data);
      });
    } else if(props.i==1) {
      //category
      //console.log(props.category);
      axios.post('http://localhost:80/react/api/postimages.php',{0:props.category})
      .then(function(response){
        //console.log(response.data);
        setData(response.data);
      })
    } else if(props.i==2) {
      //users images
      //console.log(props.uid);
      axios.post('http://localhost:80/react/api/postuser.php',{0:props.uid})
      .then(function(response){
        //console.log(response.data);
        setData(response.data);
      })
    }
  }
  return (
    <div>
    <Container fluid >
      <Row   align='center' justify="center" style={{border:'0px solid red'}} >

    {data.map((value, key) => (
      <Col md={2.4}xs={6} sm={4} style={{padding:'2px'}}>
        {/*<text>{value[0]} {value[1]} {value[2]}</text>*/}
        <Card uid={value[0]} imgid={value[1]} category={value[2]}/>
        </Col>
    ))}
    </Row>
    </Container>
    {/*
    <Container fluid >
      <Row   align='center' justify="center" style={{border:'0px solid red'}} >
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
      </Row>
      <Row   align='center' justify="center" style={{border:'0px solid red'}} >
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
        <Col   md={2.4}xs={6} sm={4} style={{padding:'2px'}}><Card /></Col>
      </Row>
      <Row  align="center" justify="center" id='o'   >
        <Col   md={2.4}>1,0</Col>
        <Col   md={2.4}>1,1</Col>
        <Col   md={2.4}>1,2</Col>
        <Col   md={2.4}>1,3</Col>
        <Col   md={2.4}>1,4</Col>
      </Row>
      <Row  align="center" justify="center" id='o'   >
        <Col   md={2.4}>1,0</Col>
        <Col   md={2.4}>1,1</Col>
        <Col   md={2.4}>1,2</Col>
        <Col   md={2.4}>1,3</Col>
        <Col   md={2.4}>1,4</Col>
      </Row>
    </Container>*/}
    </div>
  )
}
