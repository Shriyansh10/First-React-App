import './App.css';
// import ReactDOM from "react-dom/client";
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import FormText from './Components/FormText';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        type: type,
        message: message
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
  if(mode==="light")
  {
    setMode("dark");
    document.body.style.background= "#042743";
    showAlert("DarkMode has been enabled","success")
  }
  else{
    setMode("light");
    document.body.style.background= "white";
    showAlert("DarkMode has been disabled","success")
  }}

  return (
    <BrowserRouter>
      <>
        <Navbar title= "TextUtils" mode= {mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>
        <Routes>
          <Route exact path="/" element={<FormText showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
