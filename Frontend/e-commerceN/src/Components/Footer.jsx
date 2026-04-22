import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="logo">ShopEasy</h2>
          <p>Your one-stop shop for all amazing products.</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Orders</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 E-Commerce | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;