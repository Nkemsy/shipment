import REACT from 'react'
import Gallary1 from '../assets/gallary1.png'
import Gallary2 from '../assets/gallary2.png'
import Gallary3 from '../assets/gallary3.png'
import Gallary4 from '../assets/gallary4.png'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>CRYSTAL SHIPMENT</h4>
            <p style={{textAlign:'justify'}}>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
          </div>
          <div className="col-md-3" >
            <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">All Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Land Freight</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sea Freight</a></li>
              <li><a href="#" className="text-light text-decoration-none">Air Freight</a></li>
            </ul>

          </div>
          <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2"> 
                  <img src={Gallary1} alt="" className='img-fluid rounded' />
                </div>
                <div className="flex-grow-1 ms-2">
                 <img src={Gallary2} alt="" className='img-fluid rounded' />
                </div> 
            </div>
            <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2"> 
                  <img src={Gallary3} alt="" className='img-fluid rounded' />
                </div>
                <div className="flex-grow-1 ms-2">
                 <img src={Gallary4} alt="" className='img-fluid rounded' />
                </div> 
            </div>
            
          </div>
          <div className="col-md-3">
            <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="Email" placeholder='Enter your email here' className='form-control mb-3 mt-3' />
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>

        <p className='text-center mt-5'>© Copyright 2023 All Right Reserved.</p>
      </div>

    </div>

    </>
  )
}

export default Footer