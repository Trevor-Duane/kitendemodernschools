import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaWhatsappSquare, FaCaretDown, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { facebook, instagram, logo, twitter, whatsapp } from "../../assets/assets";
import "./Navbar.css";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocateOutline, IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navbarRef = useRef(null);

  // Close the dropdown and mobile menu when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="mynav container-fluid g-0">

      {/* topbar */}
      <div className="topbarWrapper container-fluid g-0">
        <div className="container topbar">

          {/* left logo */}
          <div className="topbar-left">
            <img className="topbar-logo" src={logo} height="90" width="90" alt="Logo" />
            <h4>Kitende Modern<br></br> Nusery and Primary School</h4>
          </div>

          {/* right socialmediaand buttons */}
          <div className="topbar-right">
            <div className="topbar-icons">
              <img src={facebook} height={32} width={32} alt="" className="topbar-social-icon" />
              <img src={instagram} height={32} width={32} alt="" className="topbar-social-icon" />
              <img src={twitter} height={32} width={32} alt="" className="topbar-social-icon" />
              <img src={whatsapp} height={32} width={32} alt="" className="topbar-social-icon" />
            </div>
            <div className="topbar-buttons">
              <button className="topbar-contact-button">Contact Us</button>
              <button className="topbar-admission-button">Admission</button>
            </div>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="navbar p-0 g-0 container-fluid" ref={navbarRef}>
        <div className="container d-none d-md-block desktop p-0 my-0">
          <nav className="navbar-links g-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : "navbar-link"
              }
            >
              Home
            </NavLink>

            <div
              className="navbar-link-span"
              onClick={() => toggleDropdown("about")}
            >
              <span>
                About
                <FaCaretDown className="dropdown-icon" size={14} />
              </span>
              {dropdownOpen === "about" && (
                <div className="dropdown-menu p-0">
                  <NavLink
                    to="/about/meet_our_teachers"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                    }
                  >
                    Meet Our Teachers
                  </NavLink>
                  <NavLink
                    to="/about/school_transport"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                    }
                  >
                    School Transport
                  </NavLink>
                  <NavLink
                    to="/about/gallery"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                    }
                  >
                    Gallery
                  </NavLink>
                </div>
              )}
            </div>
            <div
              className="navbar-link-span"
              onClick={() => toggleDropdown("academics")}
            >
              <span>
                Academics
                <FaCaretDown className="dropdown-icon" size={14} />
              </span>
              {dropdownOpen === "academics" && (
                <div className="dropdown-menu p-0">
                  <NavLink
                    to="/academics/admissions"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                    }
                  >
                    Admissions
                  </NavLink>
                  <NavLink
                    to="/academics/academic_calendar"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-link"
                    }
                  >
                    Academic Calendar
                  </NavLink>
                  <NavLink
                    to="/academics/classes"
                    className={({ isActive }) =>
                      isActive ? "active-navbar-dropdown-link" : "navbar-link"
                    }
                  >
                    Classes
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/newz"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : "navbar-link"
              }
            >
              News
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : "navbar-link"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : "navbar-link"
              }
            >
              Contact
            </NavLink>
          </nav>

          <div>
            <div className="infographics">
              <div>
                <IoLocationOutline size={24} color="#080b53"/>
                <span>Kitende, Off Entebbe Road Near Stabex</span>
              </div>
              <div className="custom-divider"></div>
              {/* <div>
                <IoMailOpenOutline size={24} color="#080b53"/>
                <span>info@kitendemodernschools.com</span>
              </div> */}
              <div className="custom-divider"></div>
              {/* <div>
                <MdPhoneInTalk size={24} color="#080b53"/>
                <span>Kitende, Off Entebbe Road</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* <div className="container d-block d-md-none mobile">
        <div className="navbar-header">
          <img src={logo} height="50" width="50" alt="Logo" />
          <FaBars className="menu-icon" size={24} onClick={toggleMenu} />
        </div>

        {menuOpen && (
          <nav className="navbar-links">
            <NavLink to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</NavLink>

            <div className="navbar-link-button">
              <button onClick={() => toggleDropdown('mobileAbout')}>
                About
                <FaChevronDown className="dropdown-icon" size={14} />
              </button>
              {dropdownOpen === 'mobileAbout' && (
                <div className="dropdown-menu">
                  <Link to="/home/overview" onClick={() => setMenuOpen(false)}>Meet Our Teachers</Link>
                  <Link to="/home/features" onClick={() => setMenuOpen(false)}>School Transport</Link>
                  <Link to="/home/pricing" onClick={() => setMenuOpen(false)}>Gallery</Link>
                </div>
              )}
            </div>

            <div className="navbar-link-button">
              <button onClick={() => toggleDropdown('mobileAcademics')}>
                Academics
                <FaChevronDown className="dropdown-icon" size={14} />
              </button>
              {dropdownOpen === 'mobileAcademics' && (
                <div className="dropdown-menu">
                  <Link to="/services/design" onClick={() => setMenuOpen(false)}>Admissions</Link>
                  <Link to="/services/development" onClick={() => setMenuOpen(false)}>Academic Calendar</Link>
                  <Link to="/services/marketing" onClick={() => setMenuOpen(false)}>Classes</Link>
                </div>
              )}
            </div>

            <Link to="/news" className="navbar-link" onClick={() => setMenuOpen(false)}>News</Link>
            <Link to="/events" className="navbar-link" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div> */}
      </header>
    </div>
  );
};

export default Navbar;
