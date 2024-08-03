import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skills.css';
import ShapeDivider from './ShapeDivider';

const Skills = () => {
return (
<div id="skills">
<div>
<ShapeDivider />
</div>
  
  <center><h1 className="skills__heading">Skills<span className='dot'>.</span></h1></center>
  <br></br>
  <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Front-end Development</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>HTML</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>CSS</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>JavaScript</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>React</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Bootstrap</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Material UI</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Tailwind</h4>
        </article>
      </div>
    </div>
    <div className="experience__backend">
      <h3>Back-end Development</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Node.js</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Express.js</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>MySQL</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>MongoDB</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Django</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>SQL</h4>
        </article>
      </div>
    </div>
    <div className="experience__aiml">
      <h3>AIML</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Numpy</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Pandas</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Matplotlib</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Scikit-learn</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>TensorFlow</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Machine Learning</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Deep Learning</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>NLP</h4>
        </article>
        
      </div>
    </div>
    <div className="experience__devops">
      <h3>Programming, Database & Tools</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>C</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Java</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Python</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Pygame</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Data Structures, Algorithms</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Relational Databases</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Amazon Web Services (AWS)</h4>
        </article>
        <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>Git/Github</h4>
        </article>
        
        
      </div>
    </div>
  </div>
</div>
);
}

export default Skills;
