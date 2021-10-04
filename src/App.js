import './App.css';
import { Banner } from './components/Banner/Banner';
import { CompanyLogos } from './components/CompanyLogos.js/CompanyLogos';
import { HowWeMight } from './components/HowWeMight/HowWeMight';
import { ProfessionalWork } from './components/ProfessionalWork/ProfessionalWord';
import { Personal } from './components/Personal/Personal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProjectPage } from './components/ProjectPage/ProjectPage';

function FrontPage() {
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/" component={FrontPage} />
      </Switch>
    </Router>
  )
}

export default App;
