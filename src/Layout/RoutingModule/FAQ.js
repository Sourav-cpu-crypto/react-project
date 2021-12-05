import React from 'react'
import FAQ1 from './FAQ.css'
import {Accordion}  from 'react-bootstrap'
export const FAQ = () => {
    return (
        <div className="FAQ">
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>HOW TO VIEW CONTENTS</Accordion.Header>
    <Accordion.Body>
   CLICK ON CATEGORY DROPDOWN
    SELECT WHICH VIDEO YOU WANT TO SEE
then movies page open 
then click on the images 
    Then you redirect into video page,where you see your favoritee video 
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
     
        </div>
    )
}
