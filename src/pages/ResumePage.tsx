import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ResumeComponent from "../components/ResumeComponent";
import '../styles/ResumePage.css';

function ResumePage() {
  return (
    <main className="resume-main">
      <HeaderComponent/>
      <ResumeComponent/>
    </main>
  );
}

export default ResumePage;