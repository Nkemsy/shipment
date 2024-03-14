import REACT from 'react'

function Tracking() {
  return (
    <>
    <div className="bg-cover" data-aos="zoom-in">
      <div className="text-center text-light">
        <h2 className='pt-5'>Service</h2> 
          <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Tracking</p>  
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <h2>TRACK YOUR SHIPMENT</h2>
          <div className="bg-red"></div>
          <p style={{textAlign:'justify'}} className='mt-5'>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <input type="Email" placeholder='Enter your Tracking ID Here' className='form-control mb-3 mt-3' />
          <button className="btn btn-danger">Track</button>
        </div>
      </div>

    </div>

    </>
  )
}

export default Tracking