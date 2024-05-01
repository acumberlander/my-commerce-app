import facebookIcon from '../../../../icons/icons8-facebook-50 (1).png';
import instagramIcon from '../../../../icons/icons8-instagram-50.png';
import linkedinIcon from '../../../../icons/icons8-linkedin-50.png';
import xIcon from '../../../../icons/icons8-x-96.png';
import tbcIcon from '../../../../icons/tbc_logo.png';
import './MobileView.css';

const MobileView = () => {
  return (
    <div className="mobile-footer-container">
      {/* Logo */}
      <div className="logo-section">
        <img className="tbc-logo" src={tbcIcon} alt="The Black Codes" />
      </div>

      {/* Mission Statement */}
      <div className="org-info">
        <h4 className="text-white footer-header">Mission Statement</h4>
        <p className="text-white">
          We are tech resource hub for the black community. We strive to empower
          and position our community to be leaders in the tech industry.
        </p>
        <div className="flex items-center justify-center">
          <h4 className="text-white footer-header">EIN:</h4>{' '}
          <p className="text-white pt-2 ml-3">93-2013251</p>
        </div>
      </div>

      {/* Social */}
      <div className="column">
        <div className="mobile-social-container">
          <a
            href="https://www.instagram.com/theblackcodesorg/"
            className="social-link text-white"
          >
            <img className="social-icon" src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/the-black-codes/"
            className="social-link"
          >
            <img className="social-icon" src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/theblackcodes_" className="social-link">
            <img className="social-icon" src={xIcon} alt="X (Twitter)" />
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
