import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="instagram-icon">
        <a href="https://www.instagram.com/nischestore/">
          <InstagramIcon
            variant="outlinedSizeSmall"
            color="inherit"
            fullWidth={false}
          />
        </a>
      </div>
      <div>
        <div className="copyright-text">
          <p>NISCHE STORE. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
