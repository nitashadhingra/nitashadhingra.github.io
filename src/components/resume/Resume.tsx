import {useState} from 'react';
import Card from "../Card";
import './resume.css';


const Resume = () => {

  const [educaton, setEducation] = useState([
    {
      dates: "Batch of 2022",
      title: "B.Tech, Information Technology",
      subtitle: "IGDTUW, Delhi",
      description: "CGPA: 8.79"
    },
    {
      dates: "Batch of 2018",
      title: "Grade XII",
      subtitle: "DAV Public School, Sreshtha Vihar, Delhi",
      description: "Percentage: 95%"
    },
    {
      dates: "Batch of 2016",
      title: "Grade X",
      subtitle: "Uttam School for Girls, Ghaziabad",
      description: "CGPA: 10"
    },
  ]);


  const [experience, setExperience] = useState([
      {
        dates: "June 2021 - July 2021",
        title: "Summer Analyst",
        subtitle: "Goldman Sachs, Bengaluru",
        description: "Developed a user-friendly web app to display the performance of portfolios in the form of charts and graphs. Implemented using Angular TS. Developed a robust REST API in python and Tornado backend server. Used SQLAlchemy for object relational mapping."
      },
      {
        dates: "October 2020 - November 2020",
        title: "UX Designer",
        subtitle: "TravelBaits",
        description: "A startup for managing and booking trips in India. Worked on figma, designed the wireframes and the final prototype of the mobile app."
      },
      {
        dates: "March 2020 - March 2021",
        title: "Teaching Assistant Intern",
        subtitle: "Coding Blocks",
        description: "Assisted batches for C++ Data Structures and Algorithms. Mentored over 1000 students online"
      },
    ]);
  
    
  
    const [achievements, setAchievements] = useState([
      {
        dates: "2021",
        title: "Student Scholar, Grace Hopper Celebration'21",
        subtitle: "Anita B.Org",
        description: ""
      },
      {
        dates: "April 2021 - Sept 2021",
        title: "Cisco thingQbator Select",
        subtitle:"",
        description: "Selected in top 80 teams out of 800 applicants nationwide. Built Protege as a startup, under the guidance of mentors."
      },
      {
        dates: "December 2020",
        title: "Runner Up",
        subtitle: "GE Healthcare Annual Hackathon",
        description: "Developed Flutter App as a solution to healthcare issues: one stop app in case of medical emergencies. Bagged 2nd prize out of 210+ teams."
      },
      {
        dates: "February 2020",
        title: "Finalist of LeanIn Hackathon",
        subtitle: "",
        description: "Developed a web portal to manage disposal of domestic waste. Designed and developed UI/UX. Only sophomores to have won the Special Mention Award out of 30+ teams."
      },
    ]);


    const [community, setCommunity] = useState([
      {
        dates: "",
        title: "Co-founder, Protégé",
        subtitle: "",
        description: "Providing 1:1 mentorship to college students. 2 successful pilots conducted each with a participation of 200 students."
      },
      {
        dates: "March 2020 - March 2021",
        title: "LeanIN IGDTUW",
        subtitle:"",
        description: "Small groups of women who come together for gaining technical expertise and peer support. Mentored the DSA circle, a batch of 150 female students, helping the women in STEM build their problem solving skills."
      },
      {
        dates: "August 2019 - September 2020",
        title: "IEEE IGDTUW",
        subtitle: "Publishing Head",
        description: "Helped organised sessions and conferences on various computing domains and career guidance. Designed and published posters and certificates for various events conducted, designed the annual IEEE brochure and newsletter. Volunteered at the annual, national event DSC 2019 to publish content."
      },
    ]);

    return (
      <div className="col-grid">
        
        <div className="col">
          <h1>Education</h1>
          <Card cardInfo={educaton}/>
        </div>
        
        <div className="col">
          <h1>Experience</h1>
          <Card cardInfo={experience}/>
        </div>

        <div className="col">
          <h1>Achievements</h1>
          <Card cardInfo={achievements}/>
        </div>

        <div className="col">
          <h1>Community Work</h1>
          <Card cardInfo={community}/>
        </div>
        
      </div>

    )
}

export default Resume