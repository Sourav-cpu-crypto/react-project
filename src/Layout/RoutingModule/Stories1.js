import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import {Movies2}  from './Movies1.css'

import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';


  export const Stories1 = (props) => {
  
  
    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m6)
    let action= data.subCategory.find(data=>data.s_name === props.match.params.m7)
    let images1= action.details.find(data=>data.vname === props.match.params.m8)
  console.log(data);
  
  
  

      return (
          <div className="movie1p" >
  <Row className="p5s">
      <Col md={6}>
 <ReactPlayer className="movie1p2"  url={images1.url}/>
    </Col>
     <Col md={7}>
       <p className="movies1des">

</p>
</Col>
</Row>
          </div>
      )
  }
  

