import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'
import Projects from './Projects';
import Projectsdetails from './Projectsdetails';
import axios from 'axios';
import HomePage from './HomePage';
import {NewsProvider} from './NewsContext';
function App() {

  return (
    <NewsProvider>
    <div className="App">
      
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectid" element={<Projectsdetails />} />

      </Routes>
    </div>
    </NewsProvider>
  );
}

export default App;
