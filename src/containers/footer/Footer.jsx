import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">How about you step in to the future and unravel the mystery before anyone else?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>You can Make an Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Olamphzydev, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Olamphzydev</p>
        <p>+234-905-259-9524</p>
        <p>Olamphzydev@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 GPT-3 OpenAI. All rights reserved.</p>
    </div>
  </div>
);
}

export default Footer
