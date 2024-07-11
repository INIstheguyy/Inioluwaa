import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
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
                subject: '',
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
        onChange={handleChange}
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
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
    </div>
    <div className={styles.subject}>
    <label htmlFor="name">subject:</label>
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Enter your subject"
      required
    />
  </div>
    <div className={styles.message}>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
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
