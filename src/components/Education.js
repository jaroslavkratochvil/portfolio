// Education.js

import React from 'react';
import EducationItem from './EducationItem';
import '../App.css';

function Education() {
  // Education records data
  const educations = [
    {
      program: "Applied Informatics",
      institution: "University of Hradec Králové",
      degree: "Bachelor",
      startDate: "09/2012",
      endDate: "06/2016"
    },
    {
      program: "Applied Informatics",
      institution: "University of Ljubljana",
      degree: "Bachelor",
      startDate: "09/2015",
      endDate: "01/2016"
    },
    {
      program: "Analytical Chemistry",
      institution: "Secondary Technical School of Chemistry",
      degree: "high-school diploma",
      startDate: "09/2004",
      endDate: "06/2008"
    }
  ];

  return (
    <div>
      <div className='componentName'>Education</div>
      <br/>
      {educations.map((education, index) => (
        <EducationItem
          key={index}
          program={education.program}
          institution={education.institution}
          degree={education.degree}
          startDate={education.startDate}
          endDate={education.endDate}
        />
      ))}
    </div>
  );
}

export default Education;
