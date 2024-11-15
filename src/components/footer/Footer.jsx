import React from "react";
import "./Footer.css";
import { logo } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Section */}
        <div className="footer-column">
            <h3>Kitende Modern Schools</h3>
          <img src={logo} height="160" width="160" alt="" />
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/faculty">Classes</a></li>
            <li><a href="/events">Our Teachers</a></li>
            <li><a href="/events">Gallery</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>P.O.Box 24356, Kampala</li>
            <li>Kitende, Entebbe Rd</li>
            <li>Email: info@kitendemodernschools.com</li>
            <li>Phone: (0414) 2000933 </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        {/* Column 5: Contact Form */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        
      </div>
      <div className="footer-bottom">
        <p>© 2024 Kitende Modern Schools. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
