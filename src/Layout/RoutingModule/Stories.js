import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';
export const Stories = (props) => {

    console.log(props)
    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m2)
   




    return (

        <div>
          



<Row margin='900px'>
                

{data.subCategory.map((value,index)=>   
{return value.s_name !==""  ?        
<div><h1 text-align="center" className="h1movie" margin-left='60px'>{value.s_name}</h1>
<Row>
{value.details.map((value1,index)=>
  
   <Col  md={2}>
<Link  className="link" to={`/Stories1/Stories/${value.s_name}/${value1.vname}`}>
                <img  height='200px' width='200px'src={value1.image} className="img1"/>
                </Link>
                 </Col>
)}
</Row>
</div>:""}
)}  

               
             

            
               
</Row> 

        </div>
    )
}
