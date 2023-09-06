import React from 'react';
import './contact.css'; // Import your CSS file for contact page styling

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
