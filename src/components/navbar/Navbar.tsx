import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/Group.png";
import ProfileImg from "../../assets/images/image 4.png";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/Vector.svg";
import NotificationIcon from "../../assets/icons/np_notification_2425223_000000 1.png";
import DropdownArrow from "../../assets/icons/dropdown.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="search-container">
          <form>
            <input type="text" placeholder="Search for anything..." />
            <button className="search-btn">
              <img src={SearchIcon} alt="" />
            </button>
          </form>
        </div>

        <div className="navbar-right">
          <Link to="/">Docs</Link>
          <div className="notification">
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="profile-img-wrapper">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="navbar-dropdown" ref={dropdownRef}>
            <button className="profile-name" onClick={toggleDropdown}>
              Adedeji
              <img src={DropdownArrow} alt="" />
            </button>
            {isOpen && (
              <div className="dropdown-items">
                <Link to='' className="dropdown-link">item 1</Link>
                <Link to='' className="dropdown-link">item 2</Link>
                <Link to='' className="dropdown-link">item 3</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
