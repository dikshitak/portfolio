import React from 'react';
import './Contact.scss';
import EmailSvg from './EmailSvg';
import GithubContactSvg from './GithubContactSvg';
import LinkedInSvg from './LinkedInSvg';

export default function Contact() {
  return (
    <section className="pf-contact-wrp" id="contact">
        <h4 className="section-heading"><span>Contact</span></h4>
        <div className="pf-contact-row">
            <div className="pf-contact-col">
                <a href="mailto:dikshitakasodariya26@gmail.com" target="_blank"><EmailSvg/></a>
            </div>
            <div className="pf-contact-col">
                <a href="https://github.com/dikshitak/" target="_blank"><GithubContactSvg/></a>
            </div>
            <div className="pf-contact-col">
                <a href="https://www.linkedin.com/in/dikshita-kashodriya/" target="_blank"><LinkedInSvg/></a>
            </div>
        </div>
    </section>
  )
}
