import React, {useState, useEffect,useContext} from 'react';
import {NewsContext} from './NewsContext';
function Projects() {
    const [news, setNews] = useContext(NewsContext);
    console.log("news",news);

  return (
    <div className="Projects">
      <h1>Projects</h1>
    </div>
  );
}

export default Projects;
