import './contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zpli22e', 'template_pp3z5zr', form.current, 'wgT6E1H-w1vMs6GqP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <div className='contact-container'>
            <h2 className='contact-header'>CONTACT ME</h2>
            <div className='contact-wrapper'>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your message' required></textarea>
                    <button type='submit' className='send-button'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;