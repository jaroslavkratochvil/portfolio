// Experience.js

import React from 'react';
import ExperienceItem from './ExperienceItem';
import '../App.css';

function Experience() {
  // Work experience items data
  const experiences = [
    {
      title: "Personal driver",
      employer: "Jaroslav Kratochvil (freelancer)",
      startDate: "09/2023",
      endDate: "present",
      skills: ["Communication", "Assertiveness", "English", "Driving"],
      achievements: ""
    },
    {
      title: "QA Automation Test Engineer",
      employer: "Blackboard Czech s.r.o./Anthology Inc.",
      startDate: "09/2022",
      endDate: "06/2023",
      skills: ["English", "Teamwork", "Teamleading","User Acceptance Testing","TypeScript","Selenium","Testing","Tests development"],
      achievements: ["Implemented an internal automated tests framework.", "Improved the Quality Assurance process for the product development."]
    },
    {
      title: "Application Manager",
      employer: "Elvoris s.r.o.",
      startDate: "03/2020",
      endDate: "08/2022",
      skills: ["Customer support", "Project management", "English", "Polish", "Accounting closing", "Scripting"],
      achievements: ["Implemented new communication tool, improving internal communication and cooperation.", "Automated closing procedures for 3 key clients."]
    },
    {
      title: "ServiceNow Consultant",
      employer: "GuideVision s.r.o.",
      startDate: "01/2019",
      endDate: "11/2019",
      skills: ["ServiceNow", "JavaScript", "English", "Teamwork", "Scripting", "Office management"],
      achievements: ["Designed and implemented the renovation of office space."]
    },
    {
      title: "Java Developer/Senior Business Analyst",
      employer: "Zebra Technologies Europe Ltd.",
      startDate: "02/2018",
      endDate: "09/2018",
      skills: ["HTML", "CSS", "JavaScript", "Java", "VBA for Excel", "TeamWork", "Process management", "Business Intelligence"],
      achievements: ["Developed a new user interface for internal and external reporting.", "Developed an external print module for OracleBI reports."]
    },
    {
      title: "Senior Business Analyst",
      employer: "IBM Global Service Delivery Center Czech Republic s.r.o.",
      startDate: "04/2016",
      endDate: "01/2018",
      skills: ["Asset management", "VBA for Excel", "Process management", "Teamwork", "Presentations", "English"],
      achievements: ["Automated DACH Asset Mgmt Reporting Process and thus improved the quality and effectiveness of the team work."]
    },
/*     {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      skills: [],
      achievements: [""]
    }, */
  ];

  return (
    <div>
      <div className='componentName'>Work Experience</div>
      <br/>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          employer={experience.employer}
          startDate={experience.startDate}
          endDate={experience.endDate}
          skills={experience.skills}
          achievements={experience.achievements}
        />
      ))}
    </div>
  );
}

export default Experience;
