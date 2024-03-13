import React from 'react'
import Con from '../assets/call.png'
import Con1 from '../assets/whatsapp.png'
import Con2 from '../assets/sms.png'
import Form from './Form'

function Contact() {
  return (
    <>
    <div className="bg-cover">
      <div className="text-center text-light">
        <h2 className='pt-5'>Contact</h2>
          <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>  
      </div>
    </div>

    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4">
          <p style={{fontWeight:'bold'}}>Kindly Call / Chat us or Send us an email.</p>
          <div className='mb-3'>
              <a href='tel:09072211222'className='text-decoration-none text-dark'><img src={Con} alt=""/><span style={{marginLeft:'20px'}}>+234 9072211222</span></a>
          </div>
          <div className='mb-3'>
              <a href='https://wa.me/+2348167000077'className='text-decoration-none text-dark'><img src={Con1} alt=""/><span style={{marginLeft:'20px'}}>+234 8167000077</span></a>
          </div>
          <div>
              <a href='mailto:info@crystalshipment.com'className='text-decoration-none text-dark'><img src={Con2} alt=""/><span style={{marginLeft:'20px'}}>info@crystalshipment.com</span></a>
          </div>
      </div>
                                
          
          

        
        <div className="col-md-8">
          <Form/>
        </div>
      </div>
      </div>
    
      
    </>
  )
}

export default Contact