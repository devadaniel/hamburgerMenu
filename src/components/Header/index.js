// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {AiFillHome} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-header-container">
    <div className="logo-menu-icon-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-image"
        />
      </Link>
      <Popup
        mode
        trigger={
          <button data-testid="hamburgerIconButton" type="button">
            <GiHamburgerMenu size="30" />
          </button>
        }
        modal
        nested
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="close-icon-button "
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color=" #616e7c" />
            </button>
            <ul className="link-list-items-container ">
              <li className="home-list-item">
                <Link to="/" className="nav-link-items" onClick={() => close()}>
                  <AiFillHome size="32" className="home-icon" />
                  <h1 className="home-heading">Home</h1>
                </Link>
              </li>

              <li className="about-items">
                <Link
                  to="/about"
                  className="nav-link-items"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill size="32" />
                  <h1 className="about-heading">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
    <hr className="separator" />
  </nav>
)

export default Header
