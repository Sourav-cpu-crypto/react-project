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
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
     
        </div>
    )
}
