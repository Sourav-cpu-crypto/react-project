import React,{lazy,Suspense} from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import {Movies} from './movies.js'
import Protected from './Protected.js'
import {Movies1}  from './Movies1.js'
import {FAQ}   from './FAQ.js'
import {Music} from './Music.js'
import {Search} from './Search.js'
import {Music1} from './Music1.js'
import feedback  from './feedback.js'
import {Stories} from './Stories.js'
import {Stories1}  from './Stories1.js'
import {Home} from './home.js'
import {Contact} from './Contact.js'
import {About} from './About.js'

import RegForm1 from '../../auth/RegForm1'

import Login from '../../auth/login.js'



import Header from '../Header/Header.js'
import Footer from '../Header/Footer.js'


export default function Routes() {
  
    return (
     
        <Router>

        <Header/>
 
        <Switch>
          
        <Route exact path="/" component={Home}></Route>
      
        <Route exact path="/RegForm1" component={RegForm1}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Movies/:m1" component={Movies}></Route>
        <Route  exact path="/Music/:m9" component={Music}></Route>
        <Route exact path="/Music1/:m10/:m11/:m12" component={Music1}></Route>
        <Route exact path="/Stories/:m2" component={Stories}></Route>
        <Route exact path="/Movies1/:m3/:m4/:m5" component={Movies1}></Route>
        <Route exact path="/Stories1/:m6/:m7/:m8" component={Stories1}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/FAQ" component={FAQ}></Route>
        <Route exact path="/feedback" component={feedback}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Search/:se" component={Search}></Route>
            <Suspense fallback={<h1>Loading...</h1>}>
         
     </Suspense>
  
       <Route render={()=><h1>error not found</h1>}/>
   
        </Switch>
        <Footer/>
    </Router>
    )
}

