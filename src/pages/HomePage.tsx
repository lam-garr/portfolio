import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import '../styles/HomePage.css';

function HomePage() {
  return (
    <main className="home-main">
      <HeaderComponent/>
      <header className="home-header">
        <p></p>
      </header>
      <section className="home-section-one">
        <AboutPage/>
        <ProjectPage/>
      </section>
      <section className="home-section-two">
      </section>
    </main>
  );
}

export default HomePage;
