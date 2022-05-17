import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

export default function ContactForm({closeContactForm}) {
  const form = useRef();
  const [isForm, setForm] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
      setForm(false);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div className="chat-message contact-form-wrp">
      {isForm && <form ref={form} onSubmit={sendEmail}>
        <label>Name*</label>
        <input type="text" name="from_name" required/>
        <label>Email*</label>
        <input type="email" name="from_email" required/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit-btn" />
      </form>}
      {!isForm && <React.Fragment>
        <h6>Your request is currently being processed</h6>
        <div className="thank-you">Thank you for your interest in my work. I'll contact you just in a few days. Stay tuned and see you soon.</div>
        </React.Fragment>}
      <p onClick={closeContactForm}>Go back</p>
    </div>
  );
};