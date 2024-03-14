import React,{ useState, useEffect} from "react";
import Preloader from './Components/Preloader'
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
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setInitialLoad(false);
  }, 3500)
  }, [])
    
  useEffect(() => {
    AOS.init({
      duration: 3000,   
    });
  }, [])

  return (
    <div className="preloader">
      {initialLoad ? 
        <Preloader/>
      :
  
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
}
    </div>
  );
}

export default App