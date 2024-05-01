import { useEffect, useState } from 'react';
import facebookIcon from '../../../icons/icons8-facebook-50 (1).png';
import instagramIcon from '../../../icons/icons8-instagram-50.png';
import linkedinIcon from '../../../icons/icons8-linkedin-50.png';
import xIcon from '../../../icons/icons8-x-96.png';
import tbcIcon from '../../../icons/tbc_logo.png';
import MobileView from './Views/MobileView';

import './Footer.css';

const Footer = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <div>
      {mobileView ? (
        <MobileView />
      ) : (
        <div className="footer-container">
          <div className="grid-container grid grid-cols-4 gap-5">
            {/* Logo */}
            <div className="column">
              <h4 className="text-white footer-header">The Black Codes</h4>
              <img className="tbc-logo" src={tbcIcon} alt="The Black Codes" />
            </div>

            {/* Mission Statement */}
            <div className="column">
              <h4 className="text-white footer-header">Mission Statement</h4>
              <p className="text-white">
                We are tech resource hub for the black community. We strive to
                empower and position our community to be leaders in the tech
                industry.
              </p>
              <h4 className="text-white footer-header">EIN:</h4>{' '}
              <p className="text-white">93-2013251</p>
            </div>

            {/* Nav */}
            <div className="column nav-column">
              <h4 className="text-white footer-header">Nav</h4>
              <a className="text-white nav-link" href="#home">
                Home
              </a>
              <a className="text-white nav-link" href="#about-us">
                About Us
              </a>
              <a className="text-white nav-link" href="#milestones">
                Milestones
              </a>
              <a className="text-white nav-link" href="#contact-us">
                Contact Us
              </a>
              <a className="text-white nav-link" href="#donate">
                Donate
              </a>
            </div>

            {/* Social */}
            <div className="column">
              <h4 className="text-white footer-header">Social</h4>
              <div className="social-container">
                <a
                  href="https://www.instagram.com/theblackcodesorg/"
                  className="social-link text-white"
                >
                  <img
                    className="social-icon"
                    src={instagramIcon}
                    alt="Instagram"
                  />
                  <p className="text-white">Instagram</p>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-black-codes/"
                  className="social-link"
                >
                  <img
                    className="social-icon"
                    src={linkedinIcon}
                    alt="LinkedIn"
                  />
                  <p className="text-white">LinkedIn</p>
                </a>
                <a
                  href="https://twitter.com/theblackcodes_"
                  className="social-link"
                >
                  <img className="social-icon" src={xIcon} alt="X (Twitter)" />
                  <p className="text-white">X (Twitter)</p>
                </a>
                <a
                  href="https://www.facebook.com/theblackcodes01/"
                  className="social-link"
                >
                  <img
                    className="social-icon"
                    src={facebookIcon}
                    alt="Facebook (Meta)"
                  />
                  <p className="text-white">Facebook (Meta)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
