import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import SummaryComponent from "../components/SummaryComponent";
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <main className="about-main">
      <HeaderComponent/>
      <SummaryComponent/>
    </main>
  );
}

export default AboutPage;