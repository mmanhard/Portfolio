import React from "react"
import resume from '../images/Resume.pdf'

const Resume = ({ allowScroll }) => {

  return (
    <section id={'resume'}>
      <div className={"column_ctr title_container"}>
        <h1>RESUME.</h1>
      </div>

      <div id={'resume_container'} className={allowScroll ? "" : "no_scroll"}>

        <div id={'resume_title'}>
          <h2 id={'resume_name'}>MICHAEL MANHARD</h2>
          <a href={resume}
            id={"download_btn"} className={"nav_btn"} download>
            DOWNLOAD
          </a>
        </div>

        <div id={'resume_content'}>
          <h3>Work Experience</h3>

          <ResumeMainItem
            org={'Calibrate Consulting, LLC'}
            role={'Software Engineer'}
            startDate={'Feb \'20'}
            endDate={'Now'}
            items={bulletPoints.calibrate}/>

          <ResumeMainItem
            org={'WSP USA'}
            role={'Design Engineer'}
            startDate={'Jan \'19'}
            endDate={'Jan \'20'}
            items={bulletPoints.wsp_eng}/>

          <ResumeMainItem
            org={'WSP USA'}
            role={'Structural Designer'}
            startDate={'Mar \'17'}
            endDate={'Jan \'19'}
            items={bulletPoints.wsp_design}/>

          <ResumeMainItem
            org={'Tally App'}
            role={'Software Engineer Intern'}
            startDate={'Jun \'15'}
            endDate={'Aug \'15'}
            items={bulletPoints.tally}/>

          <h3>Education</h3>

          <ResumeMainItem
            org={'Stanford University'}
            role={'MS in Structural Engineering'}
            startDate={'Sep \'15'}
            endDate={'Dec \'16'}
            items={bulletPoints.stanford}/>

          <ResumeMainItem
            org={'Princeton University'}
            role={'BSE in Structural Engineering'}
            startDate={'Sep \'11'}
            endDate={'Jun \'15'}
            items={bulletPoints.princeton}/>

          <h3>Activities</h3>

          <ResumeMainItem
            org={'ACE Mentor Program of America'}
            role={'Mentor'}
            startDate={'Nov \'17'}
            endDate={'Jan \'20'}
            items={bulletPoints.ace}/>

          <ResumeMainItem
            org={'WSP Developing Professionals Network'}
            role={'Office Co-Leader'}
            startDate={'Jan \'18'}
            endDate={'Jan \'20'}
            items={bulletPoints.dpn}/>

          <ResumeMainItem
            org={'Princeton Varsity Men\'s Swimming & Diving'}
            role={'Diving Team Member'}
            startDate={'Sep \'11'}
            endDate={'Mar \'15'}
            items={bulletPoints.pucsdt}/>

        </div>
      </div>
    </section>
  );
}

const ResumeMainItem = ({org, role, startDate, endDate, items}) => (
  <div style={{marginTop: 8, marginBottom: 8, width: '100%'}}>
    <div className={'resume_item_title'}>
      <h5>
        {`${org} ${role ? `| ${role}` : ''}`}
      </h5>
      <h5 style={{marginLeft: 20}}>
        {`${startDate}${endDate ? `-${endDate}` : ''}`}
      </h5>
    </div>

    <ul>
      {items.map(item => (
        <li key={item} className={'resume'}>{item}</li>
      ))}
    </ul>
  </div>
)

const bulletPoints = {
  calibrate: [
    'Implemented caching on the frontend of a React Native application to reduce loading times by over 30%.',
    'Created responsive animations that track user gestures and scale across various screen sizes in React Native.',
    'Communicated with a team of engineers located abroad to ensure software issues were resolved in a timely manner.'
  ],
  wsp_eng: [
    'Managed the structural design for the rehabilitation of the Old Chicago Post Office, a 2.5 million square foot building with a construction budget of over $800 million.',
    'Completed over 100 sketches for the repair of existing structure and the design of new building components at the Old Chicago Post Office. Designs included a rooftop park, redesigned lobby areas, and over 10 new elevators.',
    'Provided recommendations to the developer of the Old Chicago Post Office on opportunities to reduce structural costs. Recommendations included revisions to the framing strategy of a new escalator that resulted in a savings of over $100,000.'
  ],
  wsp_design: [
    'Reduced overall concrete volume use at 210 N Carpenter in Chicago, IL by over 15% through optimization of the geometry and post-tensioning slab reinforcement.'
  ],
  tally: [
    'Collaborated with a group of software engineers and designers to create Tally, an iOS application written in Swift that allows users to order and pay for drinks at crowded bars using their mobile device.',
    'Integrated multiple libraries into the Swift application including a geolocation map that dynamically displays nearby bars.'
  ],
  stanford: [
    'Relevant Coursework: Machine Learning'
  ],
  princeton: [
    'Academic Honors: Summa Cum Laude, George Mueller Engineer-Athlete Award; David Carmichael Thesis Prize; NJ ACI Civil Engineering Scholarship; Phi Beta Kappa, Sigma Xi, and Tau Beta Pi Honor Societies',
    'Relevant Coursework: Algorithms & Data Structures, Programming Systems, Functional Programming, Computing for the Physical and Social Sciences, Advanced Programming Techniques'
  ],
  ace: [
    'Mentored high school students interested in the fields of architecture, construction, and engineering.',
  ],
  dpn: [
    'Increased engagement in WSP’s career growth network by formation of a technical development committee.'
  ],
  pucsdt: [
    '1-Meter School Record Holder',
    '4-Time Academic All-American Honorable Mention'
  ]
}

export default Resume;
