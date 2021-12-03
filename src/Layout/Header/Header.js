import React,{useEffect, useState}  from 'react'
import Contents from '../RoutingModule/podcast1.json'
import Search from '../RoutingModule/Search.js'
import Home from '../RoutingModule/home.js'
import {Navbar,Nav,Container,NavDropdown,Button ,FormControl,Form,Dropdown,Row,Col}  from 'react-bootstrap' 

import {Link,useHistory} from 'react-router-dom';

import './Header.css'

export default function Header() {
  function logout(){
    if(localStorage.getItem('token')!==""){
      localStorage.clear();
  }}
  let islog=window.sessionStorage.getItem('token');
  // console.log(islog);
  const [s,sets]=useState(0);
  const [productState1,setProductState1]=useState("");
  const history=useHistory();
function logout(){

}

useEffect(() => {
  if(productState1 == "" )
  history.push("/")

  else{
    {console.log(productState1);}

   history.push(`/Search/${productState1}`)
  }
},[productState1])
  const name="Header"
    return (
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Nav.Link className="link" as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
       
          { 
             islog === null?
<div className="p">             
 <Nav.Link as={Link} to="/RegForm1">Register</Nav.Link>
             
             
             
             
             <Nav.Link as={Link} to="/Login">Login
             </Nav.Link></div>:
            
        <Button onClick={logout}>Logout</Button>}
       
       
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/Movies/Movies">Movies</NavDropdown.Item>
           <NavDropdown.Item as={Link} to="/Music/Music">Music</NavDropdown.Item>
           <NavDropdown.Item as={Link} to="/Stories/Stories">Stories</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl className="headersearch" variant="outline-success"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setProductState1(e.target.value)}/>
       
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

