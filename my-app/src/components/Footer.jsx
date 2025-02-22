import React from "react";
import "./Footer.css";

const Footer = ({children}) => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


