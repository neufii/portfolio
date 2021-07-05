import {
  faFileCode,
  faGraduationCap,
  faHeart,
  faHeartbeat,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='py-5'>
      <h1 className='pl-5'>About Me</h1>
      <VerticalTimeline layout={"1-column-left"} animate>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Febuary 2021 - May 2021'
          icon={<FontAwesomeIcon icon={faInfo} size='2x' transform='right-4' />}
        >
          <h3 className='vertical-timeline-element-title'>Data Collector</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Office of Justice Affairs of Thailand, Bangkok Thailand
          </h4>
          <p>
            Traveled across many provinces of Thailand and surveyed people about
            any criminal activity they may have encountered during the last
            year. Transformed the acquired information into researchable data.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='January 2021'
          icon={<FontAwesomeIcon icon={faGraduationCap} size='lg' />}
        >
          <h3 className='vertical-timeline-element-title'>Graduate</h3>
          <h5 className='vertical-timeline-element-subtitle'>
            The University of Texas at Dallas, Richardson, TX
          </h5>
          <p>Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>
        {/* remove */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='December 2020'
          icon={<FontAwesomeIcon icon={faHeartbeat} size='lg' />}
        >
          <h3 className='vertical-timeline-element-title'>
            Met My Baby
          </h3>
          <h5 className='vertical-timeline-element-subtitle'>
            
          </h5>
          <p>
            Quack
          </p>
        </VerticalTimelineElement>
        {/* this */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2020 - December 2020'
          icon={<FontAwesomeIcon icon={faFileCode} size='2x'/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Full-Stack Developer
          </h3>
          <h5 className='vertical-timeline-element-subtitle'>
            AccessMyResearch, Richardson, TX
          </h5>
          <p>
            Worked with a nonprofit company to develop a website as a senior
            project. Used Vue.js to create an account management system and
            emailing functionality for the website.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
});

export default About;
