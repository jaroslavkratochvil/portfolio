// ExperienceItem.js

import React from 'react';
import '../App.css';

function ExperienceItem({ title, employer, startDate, endDate, skills, achievements }) {
  return (
    <div className="experience-item">
      <h3>{title} @ {employer}</h3>
      <p>{startDate} - {endDate}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>Achievements: {achievements}</p>
    </div>
  );
}

export default ExperienceItem;
