import React,{useEffect} from "react";
import Nav from './Components/Header'
import Home from './Components/Home'
import Service from './Components/Service'
import Tracking from './Components/Tracking'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      
    });
  }, [])

  return (
    <div>
        <Nav/>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Service' element={<Service/>}/>
                    <Route exact path='/Tracking' element={<Tracking/>}/>
                    <Route exact path='/Contact' element={<Contact/>}/>
                </Routes>
            </Router>
        <Footer/>
    </div>
  )
}

export default App