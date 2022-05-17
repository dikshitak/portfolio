import React from 'react';
import './Skills.scss';
import HtmlSvg from './HtmlSvg';
import CssSvg from './CssSvg';
import SassSvg from './SassSvg';
import ReactSvg from './ReactSvg';
import JQuerySvg from './JQuerySvg';
import JavaScriptSvg from './JavaScriptSvg';
import WordPressSvg from './WordPressSvg';
import GithubSvg from './GithubSvg';

export default function Skills() {
  return (
    <section className="pf-skills-wrp" id="skills">
      <h4 className="section-heading"><span>Skills</span></h4>
      <div className="pf-skills-row">
        <div className="pf-skills-col"><HtmlSvg/></div>
        <div className="pf-skills-col"><CssSvg/></div>
        <div className="pf-skills-col"><SassSvg/></div>
        <div className="pf-skills-col"><JQuerySvg/></div>
        <div className="pf-skills-col"><JavaScriptSvg/></div>
        <div className="pf-skills-col"><ReactSvg/></div>
        <div className="pf-skills-col"><WordPressSvg/></div>
        <div className="pf-skills-col"><GithubSvg/></div>
      </div>
    </section>
  )
}
