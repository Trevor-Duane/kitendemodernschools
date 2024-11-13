import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Learn more about our school’s history, mission, and the values that
            drive us to provide quality education and a nurturing environment
            for students.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>123 School St.</li>
            <li>City, State, ZIP</li>
            <li>Email: info@school.edu</li>
            <li>Phone: (123) 456-7890</li>
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
      </div>
      <div className="footer-bottom">
        <p>© 2024 School Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
