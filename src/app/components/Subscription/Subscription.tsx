import './Subscription.css';
import { Button } from '@mui/material';

const Subscription = () => {
  return (
    <div className="subscription-container">
      <div className="round-container">
        <div className="left-side">
          <h1>Ready to Get Our New Stuff?</h1>
          <div className="input-container">
            <input placeholder="Search ShopyShop" />
            <Button className="black-btn">Send</Button>
          </div>
        </div>
        <div className="right-side">
          <h4>ShopyShop for Homes and Needs</h4>
          <p>We'll listen to your needs,identify the best approach, and then create a bespoke smart EV charging solution that's right for you.</p>
        </div>
      </div>
    </div>
  )
}

export default Subscription