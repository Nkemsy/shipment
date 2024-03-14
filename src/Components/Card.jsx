import React from 'react'
import Pic1 from '../assets/pic1.png'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
  // Array of card data
  const cardData = [
    {image: Pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation... '},
    {image:Pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain solutions...' },
    {image: Pic3, title:'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...  '},
  // Add more card data objects as needed
];    

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
      {
        breakpoint: 1024, // breakpoint for desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
      <>
        <div className="row">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div className="col-md-4 mb-5">
              <div className="slider-item" style={{ marginRight: '1rem' }}>
                <div className="card">
                  <img src={card.image} className='card-img-top' alt="" />
                <div className="card-body">
                  <h4 className="card-title">{card.title}</h4>
                  <p style={{textAlign:'justify'}}>{card.content}<a href="" className="text-danger text-decoration-none">Read more</a></p>
             </div>
           </div>
           </div>
         </div>
        ))}
      
      </Slider>
  </div>  
  </>
  )

}


export default Card