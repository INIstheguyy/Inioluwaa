import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_suyr24l', 'contact_form', e.target, '4PPkTBlppf_ypQdrV')
          .then(
            (result) => {
              console.log(result.text);
              alert('Message Sent!');
              setFormData({
                name: '',
                email: '',
                message: ''
              });
            },
            (error) => {
              console.log(error.text);
              alert('An error occurred, please try again.');
            }
          );
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.name}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(event) => setFormData({ ...formData, name: event.target.value})}
        placeholder="Enter your name"
        required
      />
    </div>
    <div className={styles.email}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(event) => setFormData({ ...formData, email: event.target.value})}
        placeholder="Enter your email"
        required
      />
    </div>
   
    <div className={styles.message}>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={(event) => setFormData({ ...formData, message: event.target.value})}
        placeholder="Enter your message"
        required
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  );
}

export default ContactForm;
