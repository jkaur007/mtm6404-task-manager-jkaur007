import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Task Manager.2025 @ by jasmine.All rights reserved.</p>
    </footer>
  );
};

export default Footer;
