import React from "react";
export function Footer() {
  return (
    <footer className="signal-footer">
      <div>
        <a className="signal-footer-cta" href="mailto:arjuniyer123@gmail.com">
          Reach Arjun <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="signal-footer-side">
        <p>Arjun Iyer<br />UX Designer based in Houston, TX</p>
        <div className="signal-footer-links">
          <a href="mailto:arjuniyer123@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/arjuniyer123/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/arjun-iyer-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  );
}
