import Cards from "./card";
import Chat from "../img/chat.png";
import { useEffect, forwardRef } from "react";
const Projects = forwardRef((props, ref) => (
  <div ref={ref} id='project ' style={{ width: "98.5vw", height: "auto" }}>
    <div id='project' className='row mx-2 py-5'>
      <h1 className='pl-5'>Past Projects</h1>

      <div className='row d-flex justify-content-center'>
        <Cards
          cardTitle='Chat Box'
          src={Chat}
          cardText='Created a chat website using React. The website
                          allows you to log in with your google account
                          and start chatting. Each message sent is then
                          uploaded to Firestore.'
          btnText='Open Chatbox'
          date="JUN 21"
          link='https://secret-chat-box.web.app/'
        ></Cards>
        {/*   <Cards
            cardTitle="Neuf"
            src={Neuf}
            cardText="This is my girlfriend, she is the prettiest person in the word. Her name is Neuf and I love her soooooo much.
                          This open her instragram"
            btnText="Instragram"
            link="https://www.instagram.com/neufii/"
          ></Cards> */}
        <Cards cardTitle='placeholder '></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </div>
  </div>
));

export default Projects;
