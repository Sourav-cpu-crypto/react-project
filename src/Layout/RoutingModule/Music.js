import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import Podcast from './podcast.json'
import {Carousel,Figure,Card,Row,Col,Button,Modal} from 'react-bootstrap'
import {Link}  from 'react-router-dom';
export const Music = (props) => {


    let data= Podcast.Product.find(data=>data.p_name === props.match.params.m9)

    return (
        <div>


            

{data.subCategory.map((value,index)=>   
{return value.s_name !==""  ?        
<div><h1 text-align="center" className="h1movie" margin-left='60px'>{value.s_name}</h1>
<Row>
{value.images.map((value1,index)=>
  
   <Col  md={2}>
<Link  className="link" to={`/Music1/Music/${value.s_name}/${value1.vname}`}>
                <img  height='200px' width='200px'src={value1.image} className="img1"/>
                </Link>
                 </Col>
)}
</Row>
</div>:""}
)}   

    

               
               

     
{/* <h1>music</h1>

<Row>
                

       
          <Col  md={2}> */}
          {/* <Button onClick={()=>handleShow('https://youtu.be/dfwDHGBaaI8?t=4')}>             
<img width='200px' height='200px' src="https://c.saavncdn.com/197/Dil-Galti-Kar-Baitha-Hai-Hindi-2020-20200424220208-500x500.jpg" className="img1"/>

</Button>
</Col>

               
             
<Col  md={2}>
<Button onClick={()=>handleShow('https://youtu.be/jfFrQGCZxBw')}>  
                <img  height='200px' width='200px'src="https://awesong.in/wp-content/uploads/2015/12/DILBARMEREM.jpg" className="img1"/>
                </Button>  
               
                 </Col>
                 <Col  md={2}>
                  
                 <Button onClick={handleShow}>    
               
               <img width='200px'  height='200px' src="https://i.ytimg.com/vi/9wGBsoKfGnc/maxresdefault.jpg" className="img1"/>
                            <h1></h1>
                            </Button>
    
         
           
                 </Col>
                 <Col  md={2}>
                  
                  <Button onClick={handleShow}>    
                
                <img width='200px'  height='200px' src="    
 https://i.ytimg.com/vi/JJ2IKhYmIB0/maxresdefault.jpg
              " className="img1"/>
                             <h1></h1>
                             </Button>
                           
          
            
                  </Col>   
                  <Col  md={2}>
                 <Button onClick={handleShow}>    
               
    <img width='200px'  height='200px' src="https://th.bing.com/th/id/OIP.ffLZMkcCFmmnj3BtjJ_DIwHaDt?pid=ImgDet&rs=1" className="img1"/>
                 <h1></h1>
                 </Button>
                 </Col>
                 <Col  md={2}>
                 <Button onClick={handleShow}>    
                
                <img width='200px'  height='200px' src="    
                 https://i.pinimg.com/originals/c0/75/ff/c075ff0d1a146750571a664dabfccbf5.jpg
              " className="img1"/>
                          
                             </Button>
                 </Col>
</Row>

 */}

     
        </div>
    )
}
