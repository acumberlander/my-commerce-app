import { useEffect, useState } from 'react';
import facebookIcon from '../../../icons/facebook-48.png';
import instagramIcon from '../../../icons/icons8-instagram-50.png';
import linkedinIcon from '../../../icons/white_linkedin.png';
import xIcon from '../../../icons/icons8-x-96.png';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="column-container">
        <div className="left-footer-column">
          <div className="about-column">
            <h2>About</h2>
            <a href="" className="footer-links">Blog</a>
            <a href="" className="footer-links">Meet The Team</a>
            <a href="" className="footer-links">Contact Us</a>
          </div>
          <div className="support-column">
            <h2>Support</h2>
            <a href="" className="footer-links">Contact Us</a>
            <a href="" className="footer-links">Shipping</a>
            <a href="" className="footer-links">Return</a>
            <a href="" className="footer-links">FAQ</a>
          </div>
        </div>
        <div className="right-footer-column">
          <span>Social Media</span>
          <div className="social-container">
            <div className="social-link-wrapper">
              <Image className="social-link" src={xIcon} alt="" />
            </div>
            <div className="social-link-wrapper">
              <Image className="social-link" src={facebookIcon} alt="" />
            </div>
            <div className="social-link-wrapper">
              <Image className="social-link" src={linkedinIcon} alt="" />
            </div>
            <div className="social-link-wrapper">
              <Image className="social-link" src={instagramIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
