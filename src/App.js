
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const  [text,settext]=useState('enable dark mode')
  const [alert,setalert]=useState('mudlycjccj');


const showalert=(message,type)=>
{
  setalert(
    {
      msg:message,
      type:type
    }

  )
  setTimeout(() => {
    showalert(null)
  }, 2000);
}
  const toggle=()=>
  {
    if(mode==='light')
    {
       setmode('dark')
       document.body.style.backgroundColor="black"
       settext("enable light mode")
       showalert('dark mode enabled','success')
    }
    
    else
    {
      setmode('light')
      document.body.style.backgroundColor="white"
      settext("enable dark mode")
      showalert('light mode enabled','success')
    }
    
  }
  return (
     <>
     
      <Router>
      <Navbar title="textUtlis app" mode={mode} togglefunc={toggle} btntext={text}/>
     <Alert alert={alert}></Alert>
      <Routes>
          <Route path="/" element={<Textform heading="Enter the text here" mode={mode} toggle={toggle} showalert={showalert}/>} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
     </>
  );
}

export default App;
