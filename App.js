import './App.css';
import Hero_Section from './Components/Hero_Section/Hero_Section'
import Bio_Section from './Components/Bio_Section/Bio_Section'
import Skills_Section from './Components/Skills_Section/skills_section'
import Education_Section from './Components/Education_Section/education_section'
import Contacts_Section from './Components/Contacts_Section/contacts_section'

function App() {
  return (
    <div className="App">
    <Hero_Section/>
    <Bio_Section/>
    <Skills_Section/>
    <Education_Section/>
    <Contacts_Section/>
    </div>
  );
}

export default App;
