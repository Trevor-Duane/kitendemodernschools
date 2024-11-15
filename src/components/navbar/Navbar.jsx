import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaBars, FaChevronDown} from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/assets";
import { facebook, instagram, twitter, whatsapp } from "../../assets/assets";
import "./Navbar.css";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navbarRef = useRef(null);

  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/contact")
  }
  const handleAdmissionButtonClick = () => {
    navigate("/academics/admissions");
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
              <button onClick={handleContactClick} className="topbar-contact-button">Contact Us</button>
              <button onClick={handleAdmissionButtonClick} className="topbar-admission-button">Admission</button>
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
                   to="/about/school_portfolio"
                   className={({ isActive }) =>
                     isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                   }
                 >
                   Our Portfolio
                 </NavLink>
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
              to="/student_life"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : "navbar-link"
              }
            >
              Student Life
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
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="container d-block d-md-none mobile">
          <div className="navbar-header-mobile">
            <img src={logo} height="50" width="50" alt="Logo" />
            <FaBars className="menu-icon" size={24} color ="#1f1d35" onClick={toggleMenu} />
          </div>

        {menuOpen && (
           <nav className="mobile-navigation g-0 p-0 m-0">
           <div>
           <NavLink
             to="/"
             className={({ isActive }) =>
               isActive ? "active-navbar-link" : "navbar-link"
             }
           >
             Home
           </NavLink>
           </div>

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
                   to="/about/school_portfolio"
                   className={({ isActive }) =>
                     isActive ? "active-navbar-dropdown-link" : "navbar-dropdown-link"
                   }
                 >
                   Our Portfolio
                 </NavLink>
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

           <div>
           <NavLink
             to="/student_life"
             className={({ isActive }) =>
               isActive ? "active-navbar-link" : "navbar-link"
             }
           >
             Student Life
           </NavLink>
           </div>
           <div>
           <NavLink
             to="/events"
             className={({ isActive }) =>
               isActive ? "active-navbar-link" : "navbar-link"
             }
           >
             Events
           </NavLink>
           </div>
           <div>
           <NavLink
             to="/contact"
             className={({ isActive }) =>
               isActive ? "active-navbar-link" : "navbar-link"
             }
           >
             Contact
           </NavLink>
           </div>
          </nav>
        )}
      </div>
      </header>
    </div>
  );
};

export default Navbar;
