import React from 'react'
import Pic1 from '../assets/pic1.png'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.png'
import Pic4 from '../assets/pic4.png'
import Pic5 from '../assets/pic5.png'
import Pic6 from '../assets/gallary4.png'

function Card2() {
    const cardData = [
      {image: Pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation... '},
      {image:Pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain solutions...' },
      {image: Pic3, title:'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...  '},
      {image: Pic4, title:'Warehousing', content: 'Package and store your things effectively and securely to make sure them in storage, have certif...'},
      {image: Pic5, title:'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design a solution. hand...'},
      {image: Pic6, title:'Packaging & Storage', content: 'Package and store your things effectively and securely to make sure them in storage, We...'},
        ]
      return (
        <>
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-4 mb-5">
                  <div className="card">
                    <img src={card.image} className='card-img-top' alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p style={{textAlign:'justify'}}>{card.content}<a href="" className="text-danger text-decoration-none">Read more</a></p>
               </div>
             </div>
           </div>
          ))}
        
  
    </div>  
    </>
    )
  
  }
export default Card2