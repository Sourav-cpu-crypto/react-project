import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import home from './home.css';
import Contents from './podcast1.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal,CardGroup} from 'react-bootstrap'
import {Link}  from 'react-router-dom';

import s1 from './s1.jpg'
export const Search = (props) => {
    

 
  const [p,setp]=useState();
  

  const [productState1,setProductState1]=useState("");


    return (
        <div>
  


    
   
  <>
  <CardGroup>


    <Row>
    <input
         type="text"
            placeholder="search" onChange={(event)=>{
                setProductState1(event.target.value)
            }}
          />    
               
{
Contents.Content.filter((value)=>{
    if (props.match.params.se ===""){
        return value;
    }
    else if(value.vname.toLowerCase().includes(props.match.params.se.toLowerCase()) || value.p_name.toLowerCase().includes(props.match.params.se.toLowerCase()) )
    {
        return value;
    }
}).map((value,index) =>{

    return (
     
            <Col  md={4} key={index}>
                  
 <Link  className="link" to={`/${value.pathname}/${value.p_name}/${value.s_name}/${value.vname}`}>
<h1>{value.vname}</h1></Link>

</Col>
    )
})}

    
  </Row>
</CardGroup>
</>



  
         
               
           
 
      <Row>
 
  
  </Row>

    
        </div>
    )
}
