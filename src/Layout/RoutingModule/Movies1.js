import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import {Movies2}  from './Movies1.css'
import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';


  export const Movies1 = (props) => {
  
  
    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m3)
    let action= data.subCategory.find(data=>data.s_name === props.match.params.m4)
    let details= action.details.find(data=>data.vname === props.match.params.m5)
  
  
  console.log(data)
  

      return (
          <div className="movie1p" >
  <Row className="p5s">
      <Col md={6}>
 <ReactPlayer  width='700px' className="movie1p2"  url={details.url}/>
    </Col>
     <Col md={8}>
       <p className="movies1des">
{details.description}
</p>
</Col>
</Row>
          </div>
      )
  }
  




