import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import home from './home.css';
import Contents from './podcast1.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal,CardGroup} from 'react-bootstrap'
import {Link}  from 'react-router-dom';
import Podcast from './podcast.json'
import s1 from './s1.jpg'
export const Home = () => {


 
  const [p,setp]=useState();
  const [show, setShow] = useState({key:false,key1:''});
  function handleShow (url){   setShow({...show,key:true,key1:url}) };

  const handleClose = () => setShow(false);

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


    
    {/* {Podcast.Product.map((value,index)=>( 
          
       
      <h1>{value.p_name}</h1> 
      <img src={value.images}/>
 
     ))}   */}
  <>
  <CardGroup>
  {/* {Contents.Content.map((value,index)=>( 
      <Col md={3}>
  
    <img src={value.image} />

  
  </Col>))} */}

    <Row>
    {Podcast.Product.map((value,index)=>( 
      <Col md={3}>
  <Card>
    <h1>{value.p_name}</h1>
    <Card.Img variant="top" src={value.images} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  </Col>))}
  
  </Row>
</CardGroup>
</>



      <Modal show={show.key} onHide={handleClose}>
        <Modal.Header closeButton>
        <ReactPlayer width='480px' height='240px' url={show.key1}/>
        </Modal.Header>
   
        
      </Modal>
   
         
               
           
 
      <Row>
 
  
  </Row>

    
        </div>
    )
}
