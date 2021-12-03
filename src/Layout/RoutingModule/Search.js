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
         <Carousel variant="dark" margin-top='90px'>
  <Carousel.Item>
    <img
      className="d-block w-100" width='480px' height='540px'
      src="https://s3.amazonaws.com/pbblogassets/uploads/2019/10/11123757/shutterstock_686692210-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"  width='480px' height='480px'
      src="https://th.bing.com/th/id/R.d2a0edf6683f7a5012d7c72e6f8dfd30?rik=mkNcvtoJaaWkQA&riu=http%3a%2f%2fnewwallpapershd.com%2fwp-content%2fuploads%2f2015%2f01%2fBing-Bang-3D-video-Games-HD-wallpapers.jpg&ehk=Anmt8%2f0AtohzgDtaS1zFt55Mh77NXzOYe%2bmN5Gac%2boo%3d&risl=&pid=ImgRaw&r=0"
      alt="Second slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"   width='480px' height='480px'
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    
   
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
