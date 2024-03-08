// EducationItem.js

import React from 'react';

function EducationItem({ program, institution, degree, startDate, endDate }) {
  return (
    <div className="education-item">
      <h3>{program} @ {institution}</h3>
      <h3>{degree}</h3>
      <p>{startDate} - {endDate}</p>
    </div>
  );
}

export default EducationItem;
