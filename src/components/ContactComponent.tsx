import React from "react";
import "./styles/ContactComponent.css";

function ContactComponent() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-container-email">
          <text className="email-text">email</text>
        </div>
        <div className="contact-container-github">
          <text className="github-text">github</text>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;