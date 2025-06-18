import React from 'react';
import '../assets/css/style.css';



const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

    
      <div className="map-container" style={{ width: '100%', height: '400px', marginBottom: '30px' }}>
        <iframe
          title="New York Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43825000722!2d-74.11808622985484!3d40.70582543804507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b9c8e883db%3A0x6c19519a96477f1!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1696555459844!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact-sections">
        <div className="contact-box">
          <h2>Visit Our Store</h2>
          <p><strong>Address:</strong> 64 Main St, New York, Zip Code: 10001</p>
          <p><strong>Phone:</strong> (123) 324-1840</p>
          <p><strong>Email:</strong> company@example.com</p>
          <p><strong>Open Hours:</strong> Every day 11 AM - 7 PM</p>
        </div>

        <div className="contact-box">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
