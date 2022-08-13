import { useState } from "react";
import './App.scss';
import  Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

import { Cv } from "./Cv/Cv"

const {contact, aboutMe, education, experience, languages, habilities} = Cv;

function App() {
  const [menu, setMenu] = useState(0);

  return (
    <div className="app">
     <div className="app">
        <Contact contact={contact} />

      <div className="navbar">
        <button 
        className="custom-btn btn-4"
        onClick={() => setMenu(1)}>
          Sobre mi
        </button>
        <button 
        className="custom-btn btn-4"
        onClick={() => setMenu(2)}>
          Formación
        </button><button 
        className="custom-btn btn-4"
        onClick={() => setMenu(3)}>
          Experiencia
        </button><button 
        className="custom-btn btn-4"
        onClick={() => setMenu(4)}>
          Otros datos
        </button>
      </div>
      
        {menu === 1 ? (
        <About aboutMe={aboutMe} />
      ) : menu === 2 ? (
        <Education education={education}/>
      ) : menu === 3 ? (
        <Experience experience={experience} />
      ) : menu === 4 ? (
        <More languages={languages} habilities={habilities} />
      ) : (
        ""
      )}


    </div>
    </div>

  );
}

export default App;
