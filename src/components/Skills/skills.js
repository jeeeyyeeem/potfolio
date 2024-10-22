import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
          <span className="skillTitle"> What I do</span>
          <span className="skillDesc">I am a student learning these things. I'm willing to learn more about this things because I know it can help me someday in the future.</span>
      <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>Focuses on creating intuitive, aesthetically pleasing, and user-friendly interfaces and experiences for digital products.</p>

            </div>
           
          </div>

          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>Refers to the process of creating the visual layout, structure, and overall user experience of a mobile or web application.</p>

            </div>
          </div>

          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>Refers to the process of creating the visual look, layout, structure, and usability of websites.</p>

            </div>
          </div>
       </div>

        </section>
    );
}
export default Skills;