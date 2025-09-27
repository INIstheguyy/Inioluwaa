import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [submitMsg, setSubmitMsg] = useState(false); // Manages button state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMsg(true); // Disable button and show "Submitting"

    try {
      const result = await emailjs.sendForm(
        "service_suyr24l",
        "contact_form",
        e.target,
        "4PPkTBlppf_ypQdrV"
      );
      console.log(result.text);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success(`Yelp! Got your message.`, {
        position: "top-left",
      });
    } catch (error) {
      console.log(error.text);
      toast.error(`Oops :( your message wasn't delivered, please kindly contact me via any of my socials or send me a mail.`, {
        position: "top-left",
      });
    } finally {
      setSubmitMsg(false); // Re-enable button after request is complete
    }
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
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
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
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
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
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          placeholder="Enter your message"
          required
        />
      </div>
      <div>
        <button disabled={submitMsg} type="submit">
          {submitMsg ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
