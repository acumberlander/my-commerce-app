import Slider from 'react-slick';
import './ImageSlider.css';
import { useEffect, useState } from 'react';
import speaker from '../../../images/speaker.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [sliderItems, setSliderItems] = useState('');

  useEffect(() => {
  //   const imageMultiplier = (quantity: number) => {
  //     for (let i = 0; i + 1 < quantity; i++) {
  //       console.log(i);
  //       return (
  //         `<div className='slider-item'>
  //           <h3>{${i+1}}</h3>
  //         </div>`
  //       )
  //     }
  //   }
  // setSliderItems(imageMultiplier(10))
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
        <div className='slider-item'>
          <div className='category-container'>
            <span>Electronics</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

