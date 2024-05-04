/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Image from 'next/image'
import soundIcon from '../../../icons/volume.png';
import electricIcon from '../../../icons/lightning.png';
import cleanIcon from '../../../icons/clean.png';
import './MarketingSection.css';
import Slider from '../Slider/Slider';

const MarketingSection = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1251
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <div className="marketing-container">

      <div className="top-half">
        {
          mobileView ? (
            <>
              <div  className="image-column">
              </div>
              <div className="text-column">
            <p>NEW ARRIVAL</p>
            <h1>EarDrummer Sound</h1>
            <p>Discover auido excellece with EarDrummer - a revolutionary speaker merging cutting-edge tech and captivating design. Immerse yourself in rich soundscapes, elevating your listening experience to unparalled heights.</p>

            <div className="marketing-points-container">
              <div className="icon-and-text">
                <div className="marketing-point-container">
                  <Image className="marketing-icon" src={soundIcon} alt="" />
                </div>
                <div className="point-description">
                  <h3>Super Sound</h3>
                  <span>The sound will reach your neighborhood</span>
                </div>
              </div>
              <div className="icon-and-text">
                <div className="marketing-point-container">
                  <Image className="marketing-icon" src={electricIcon} alt="" />
                </div>
                <div className="point-description">
                  <h3>Samson Battery</h3>
                  <span>The battery that won't stop</span>
                </div>
              </div>
              <div className="icon-and-text">
                <div className="marketing-point-container">
                  <Image className="marketing-icon" src={cleanIcon} alt="" />
                </div>
                <div className="point-description">
                  <h3>Clean Design</h3>
                  <span>A simple yet elegant aesthetic</span>
                </div>
              </div>
            </div>
              </div>
            </>
          ) : (
              <>
                <div className="text-column">
                  <p>NEW ARRIVAL</p>
                  <h1>EarDrummer Sound</h1>
                  <p>Discover auido excellece with EarDrummer - a revolutionary speaker merging cutting-edge tech and captivating design. Immerse yourself in rich soundscapes, elevating your listening experience to unparalled heights.</p>

                  <div className="marketing-points-container">
                    <div className="icon-and-text">
                      <div className="marketing-point-container">
                        <Image className="marketing-icon" src={soundIcon} alt="" />
                      </div>
                      <div className="point-description">
                        <h3>Super Sound</h3>
                        <span>The sound will reach your neighborhood</span>
                      </div>
                    </div>
                    <div className="icon-and-text">
                      <div className="marketing-point-container">
                        <Image className="marketing-icon" src={electricIcon} alt="" />
                      </div>
                      <div className="point-description">
                        <h3>Samson Battery</h3>
                        <span>The battery that won't stop</span>
                      </div>
                    </div>
                    <div className="icon-and-text">
                      <div className="marketing-point-container">
                        <Image className="marketing-icon" src={cleanIcon} alt="" />
                      </div>
                      <div className="point-description">
                        <h3>Clean Design</h3>
                        <span>A simple yet elegant aesthetic</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="image-column">
                </div>
              </>
          )
        }
      </div>

      <div className="bottom-half">
        <div className="carousel-header-container">
          <h1>Explore our curated categories and transform your living spaces</h1>
        </div>
        <Slider />
      </div>

    </div>
  )
}

export default MarketingSection