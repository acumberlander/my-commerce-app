import { Button } from '@mui/material'
import playIcon from '../../../icons/icons8-play-100.png';
import Image from 'next/image'
import React from 'react'
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section-container">
      <Button className="black-btn play-btn">
        <Image id="play-icon" src={playIcon} alt="" />
        Play Video
      </Button>
      <div className="video-overlay">
        <h1>ShopyShop is the #1 Supplier for all your Needs</h1>
        <p>Never gonna desert you.</p>
      </div>
    </div>
  )
}

export default VideoSection