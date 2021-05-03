import React from 'react';
import '../../../App.css';


const Footer = () => {
  return (
    <div className="footer">
     <div className="text-center my-3">
        <a href="https://www.facebook.com/wahetelryhan" target="_blank"><i className="fab fa-facebook footer-icon"></i></a>
        <a href="https://www.instagram.com/wahetelryhan/" target="_blank"><i className="fab fa-instagram footer-icon"></i></a>
        <a href="https://twitter.com/wahetelryhan" target="_blank"><i className="fab fa-twitter footer-icon"></i></a>
        <a href="https://www.youtube.com/channel/UC9tVcl8o5oR1lupl4isVJdA" target="_blank"><i className="fab fa-youtube footer-icon"></i></a>
      </div>
        
      <p className="text-muted  text-center">&copy; All Copyrights reserved to Wahet Elrayhan Company</p>
    </div>
  );
};

export default Footer;
