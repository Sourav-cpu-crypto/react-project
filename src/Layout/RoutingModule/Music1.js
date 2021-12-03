import React,{useState} from 'react'
import ReactPlayer from 'react-player';

import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';



  export const Music1 = (props) => {
  

    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m10)
    let action= data.subCategory.find(data=>data.s_name === props.match.params.m11)
    let details= action.details.find(data=>data.vname === props.match.params.m12)
  
  
  console.log(data)
  

      return (
          <div className="movie1p" >
  <Row className="p5s">
      <Col md={6}>
 <ReactPlayer className="movie1p2"  url={details.url}/>
    </Col>
     <Col md={7}>
       <p className="movies1des">

</p>
</Col>
</Row>
          </div>
      )
  }
  




