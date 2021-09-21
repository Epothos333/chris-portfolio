import './App.css';
import { Banner } from './components/Banner/Banner';
import { CompanyLogos } from './components/CompanyLogos.js/CompanyLogos';
import { HowWeMight } from './components/HowWeMight/HowWeMight';
import { ProfessionalWork } from './components/ProfessionalWork/ProfessionalWord';
import { Personal } from './components/Personal/Personal';


function App() {
  return (
    <>
      <Banner />
      <CompanyLogos />
      <HowWeMight />
      <ProfessionalWork />
      <Personal />
    </>
  );
}

export default App;
