import React from 'react';
import './Projects.scss';
import ProjectsGit from './ProjectsGit';
import ProjectsLink from './ProjectsLink';

export default function Projects() {

    return (
        <section className="pf-projects-wrp" id="projects">
            <h4 className="section-heading"><span>Projects</span></h4>
            <div className="pf-projects">
                <div className="pj-card">
                    <div className="pj-content-wrp">
                        <h6>Web App - REACT</h6>
                        <h4>Wordle Clone</h4>
                        <p>Wordle is a clone of web-based word game by The New York Times. No daily word limit with hints to crack the puzzle easily and improve your vocabulary with definitions provided!</p>
                        <div className="pj-links-wrp">
                            <a href="https://dikshitak.github.io/wordle-clone/" target="_blank" className="pj-redirection pj-link"><ProjectsLink/></a>
                            <a href="https://github.com/dikshitak/wordle-clone" target="_blank" className="pj-git pj-link"><ProjectsGit/></a>
                        </div>
                    </div>
                </div>
                <div className="pj-card">
                    <div className="pj-content-wrp">
                        <h6>Web App - REACT</h6>
                        <h4>Photo Editor</h4>
                        <p>Photo Editor makes image creation super easy with premade templates, options to upload image/logo of your choice and even edit the text that appears on the image. The created image can also be downloaded in various sizes.</p>
                        <div className="pj-links-wrp">
                            <a href="https://dikshitak.github.io/photo-editor-web-app/" target="_blank" className="pj-redirection pj-link"><ProjectsLink/></a>
                            <a href="https://github.com/dikshitak/photo-editor-web-app" target="_blank" className="pj-git pj-link"><ProjectsGit/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
