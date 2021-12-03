import React  from 'react'

import {Navbar,Nav,Container,NavDropdown,Button ,FormControl}  from 'react-bootstrap' 

import {Link,useHistory} from 'react-router-dom';
import Footer1 from './Footer1.css'
import './Header.css'

export default function Footer() {
  const history=useHistory();


  const name="Header"
    return (
   
        <footer>
          <div class="content">
            <div class="top">
              <div class="logo-details">
                <i class="fab fa-slack"></i>
               
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="link-boxes">
              <ul class="box">
                <li class="link_name">         <Link  to="/feedback"className="Link_name">FEEDBACK
</Link></li>
  
              </ul>
            
              <ul class="box">
                <li class="link_name">
                  
                <Link  to="/About"className="Link_name">ABOUT US
</Link>
</li>
  
              </ul>
              <ul class="box">
                <li class="link_name">
                <Link  to="/FAQ"className="Link_name">FAQ
</Link>
</li>
  
              </ul>
              <ul class="box">
                <li class="link_name">
                <Link  to="/feedback"className="Link_name">FEEDBACK
</Link>
</li>
  
              </ul>
            </div>
          </div>
          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">Copyright © 2021 All rights reserved</span>
              <span class="policy_terms">
                <a href="#">Privacy policy</a>
                <a href="#">Terms & condition</a>
              </span>
            </div>
          </div>
        </footer>
      
      
      
    )
}

