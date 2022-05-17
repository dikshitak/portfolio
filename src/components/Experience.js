import React from 'react';
import './Experience.scss';

export default function Experience() {
  return (
    <section className="pf-experience-wrp" id="experience">
      <h4 className="section-heading"><span>Experience</span></h4>
      <div className="pf-experience">
        <div className="pf-exp">
          <h6>UI Developer 2</h6>
          <h3>Media.net</h3>
          <p className="desc">❇️ Focusing on front-end development and integrating Ads on the websites.</p>
          <p className="desc">🔥 Analyzing and optimizing the websites to improve the score as per PageSpeed suggestions.</p>
          <div className="date-loc">Jan 2019 - Present | Mumbai, India</div>
        </div>
        <div className="pf-exp">
          <h6>Trainee Software Engineer</h6>
          <h3>Jardine Lloyd Thompson</h3>
          <p className="desc">💫 Wrote, updated, and maintained technical program for business process management workflows.</p>
          <p className="desc">🏆 Awarded 'Spot Award' for showing values such as Client-focus and Rigor within only one year of service.</p>
          <div className="date-loc">Nov 2017 - Jan 2019 | Mumbai, India</div>
        </div>
      </div>
    </section>
  )
}
