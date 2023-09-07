import React from 'react';
import './footer.css'; // Import your CSS file for footer styling

function Footer() {
  return (
    <footer className="footer" >
      <div className="container">
        <div className="section">
          <h4 className="section-title">Phone</h4>
          <p className="section-content">+27 (079) 149-3853</p>
        </div>

        <div className="section">
          <h4 className="section-title">Email</h4>
          <p className="section-content">nursentombi0@gmail.com</p>
        </div>

        <div className="section">
          <h4 className="section-title">Follow Me:</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

