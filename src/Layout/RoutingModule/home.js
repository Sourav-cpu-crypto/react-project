import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import home from './home.css';
import video3 from './video3.mp4'
import Contents from './podcast1.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal,CardGroup} from 'react-bootstrap'
import {Link}  from 'react-router-dom';
import Podcast from './podcast.json'
import s1 from './s1.jpg'
export const Home = () => {


 
  const [p,setp]=useState();

  const [productState1,setProductState1]=useState("");


    return (
        <div>
         {/* <Carousel variant="dark" margin-top='90px'>
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
  
</Carousel> */}

<video  autoPlay loop  muted style={{position:"absolute",
  width:"100%",left:"50%" ,top:"40%",height:"50%",
  objectfit:"fill",transform:"translate(-50%,-50%)",
  zindex:"-1"

  }}>
<source src ={video3} type="video/mp4"/>
    

    </video>
    
  <>
  <CardGroup className="homecg">


    <Row >
    {Podcast.Product.map((value,index)=>( 
      <Col md={3}>
  <Card >
    <h1>{value.p_name}</h1>
    {value.p_name ==="Stories"?
    <Card.Img variant="top" src={value.images}  height='230px' />:   <Card.Img variant="top" src={value.images} />}
 
    <Card.Body>
 
   
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  
  </Col>))}
  
  </Row>
</CardGroup>
</>



  
   
         
               
           
 
      <Row>
 
  
  </Row>

    
        </div>
    )
}
