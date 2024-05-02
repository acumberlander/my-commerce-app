import Image from "next/image";
import searchIcon from '../../../icons/search-interface-symbol.png';
import './MidSearch.css';
import { Button, Input } from "@mui/material";

const MidSearch = () => {
  return (
    <div className="extra-search-div">
      <div className="header-and-search-container">
        <h1>Give All You Need</h1>
        <div className="search-container-2">
          <Image className="search-icon" src={searchIcon} alt="" />
          <input placeholder="Search ShopyShop" />
          <Button className="black-btn">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default MidSearch