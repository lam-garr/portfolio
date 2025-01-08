import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ProjectComponent from '../components/ProjectComponent';
import "./styles/ProjectPage.css";

function ProjectPage() {
  return (
    <main className="project-main">
      <HeaderComponent/>
      <ProjectComponent/>
    </main>
  );
}

export default ProjectPage;