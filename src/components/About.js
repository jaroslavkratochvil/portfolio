// About.js

import React from 'react';

function About() {
  // Vypočítání počtu let pracovní zkušenosti
  const currentYear = new Date().getFullYear();
  const startYear = 2015; // Rok, kdy jsi začal pracovat
  const yearsOfExperience = currentYear - startYear;

  return (
    <div>
      <div className='componentName'>About me</div>
      <br/>
        <div className='componentText'>
        My work experience includes {yearsOfExperience} years in the field of Information Technology (IT). 
        I have extensive experience in reporting, data analysis, customer support, planning, gathering requirements from clients, 
        and scripting (HTML, CSS, SQL, TypeScript). Between 2018 and 2023, I gained valuable experience in manual testing, project management, 
        client interaction, user and performance testing, and user experience. Since September 2023, I have also ventured into personal transportation, 
        discovering a passion for driving, which I enjoy incorporating into my life as a side activity. 
        <br/>
        In my career, I aim to continue in a role where I can leverage my expertise while pursuing opportunities beyond the technical realm. 
        Although I am proficient in scripting languages and databases, I do not aspire to pursue a developer's path exclusively.
        </div>
    </div>
  );
}

export default About;
