// Experience.jsx

import React from 'react';
import './Experience.css';
import ShapeDivider from './ShapeDivider';
const Experience = () => {
  return (
    <div className="experience-section" id='experience'>
    <ShapeDivider/>
      <h2 className="experience-heading">Experience<span className='dot'>.</span></h2>
      <div className="experience-timeline">
        <div className="experience-timeline-line"></div>
        <div className="experience-timeline-item left">
          <div className="experience-content">
            <h3>Salesforce</h3>
            <p>Salesforce Developer</p>
            <p>August 2023 - October 2023</p>
            <p className='salesforce_content'>Completed a virtual internship in Salesforce development. Collaborated on project requirements and contributed to application development using Apex and Visualforce. Developed and customized Salesforce applications to enhance functionality and user experience. Participated in code reviews and used Agile methodologies to manage tasks and meet project deadlines.</p>
          </div>
        </div>
        <div className="experience-timeline-item right">
          <div className="experience-content">
            <h3>InternIQ</h3>
            <p>Data Science Intern</p>
            <p>December 2023 - January 2024</p>
            <p className='interniq_content'>Proficient in advanced analytics, machine learning, and statistical modeling, I leverage Python, R, and SQL to clean, preprocess, and analyze data. I uncover trends, communicate findings through data storytelling, and collaborate cross-functionally to optimize algorithms and drive business growth.</p>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Experience;
