import React from 'react';
import App1 from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import video3 from './video3.mp4'
import Routes from './Layout/RoutingModule/Routes.js'

function App() {

  
  return (
  <div className="App">
   
  <video  autoPlay loop  muted style={{position:"absolute",
  width:"100%",left:"50%" ,top:"50%",height:"50%",
  objectfit:"cover",transform:"translate(-50%,-50%)",
  zindex:"-1"

  }}>
<source src ={video3} type="video/mp4"/>
    

    </video>
    <Routes/> 
     
    
     
 
</div>
  
  );
}

export default App;
