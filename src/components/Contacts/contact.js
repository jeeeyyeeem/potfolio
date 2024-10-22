import React, {useRef}from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_eeqgimr', 'template_ul8hlhf', form.current, {
            publicKey: 'EVWBeZMd49hzOoTb0',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
    return(
        <section id ="contactPage">
            <div id = "contact">
                <h1 className="contactPageTiltle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <form className='contactForm' ref= {form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your-name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">SUBMIT</button>
                    <div className="links">
                        <a href="https://www.facebook.com/JomzkieNiles18?mibextid=ZbWKwL" target="_blank">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        </a>
                        <img src={TwitterIcon} alt="Twitter" className="link"/>
                          <a href="https://youtube.com/@joemarienillos?si=XoeX2W_ytD_hTBuh" target= "_blank">
                         <img src={YoutubeIcon} alt="Youtube" className="link"/>
                         </a>
        <a href="https://www.instagram.com/_ur.sol?igsh=MWcyYzVxeHM2ZTBrZA==" target="_blank">
                        <img src={InstagramIcon} alt=" Instagram" className="link"/>
        </a>
                    </div>
                </form>
            </div>
        </section>
       

    );
}

export default Contact
