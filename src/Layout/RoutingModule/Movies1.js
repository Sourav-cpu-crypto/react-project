import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import {Movies2}  from './Movies1.css'
import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';


  export const Movies1 = (props) => {
  
  
    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m3)
    let action= data.subCategory.find(data=>data.s_name === props.match.params.m4)
    let images1= action.images.find(data=>data.vname === props.match.params.m5)
  
  
  console.log(data)
  

      return (
          <div className="movie1p" >
  <Row className="p5s">
      <Col md={6}>
 <ReactPlayer className="movie1p2"  url={images1.url}/>
    </Col>
     <Col md={7}>
       <p className="movies1des">
3 Idiots Is An Award Winning Bollywood 
Comedy Movie, Directed By Rajkumar Hirani, 
Starring Aamir Khan And Kareena Kapoor 
In The Lead Roles. 
The Film Won 35 Awards. In College, 
Farhan And Raju Form A Great Bond With 
Rancho Due To His Positive And Refreshing 
Outlook To Life. Years Later, A Bet Gives 
Them A Chance To Look For Their Long-lost 
Friend Whose Existence Seems Rather Elusive.

</p>
</Col>
</Row>
          </div>
      )
  }
  




