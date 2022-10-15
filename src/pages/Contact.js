import React from "react";
// import Footer from "../component/Footer";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="email-card">
          <p className="contact-field">
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=noellerjd@gmail.com"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              noellerjd@gmail.com
            </a>
          </p>
        </div>
        <div className="linkedIn">
          <p className="contact-field">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/justin-noeller-797181235/"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              Justin Noeller
            </a>
          </p>
        </div>
        <div className=""></div>
        <div className="social-links"></div>
      </div>
    </section>
  );
}
