'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container-fluid fade-target">
      <div className="container overflow-hidden text-center pt-3 pb-5">
        <div className="mb-5">
          <div className="col">
            <Link href="/" className="navbar-brand">
              <img src="/src/logo.webp" alt="Chinook Curiosity Central" width="50" height="50" />
              Chinook Curiosity Central
            </Link>
          </div>
        </div>
        <div className="row" style={{ display: 'flex' }}>
          <div className="col mb-3 responsive-hr" style={{ borderColor: '#dee2e6' }}>
            <h5>Curiosities</h5>
            <ul className="nav flex-column p-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Fact of the Month
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Termite Overmind Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3 border-start border-end responsive-hr" style={{ borderColor: '#dee2e6' }}>
            <h5>Events</h5>
            <ul className="nav flex-column p-3">
              <li className="nav-item mb-2">
                <Link href="/events" className="nav-link p-0 text-muted">
                  Events
                </Link>
              </li>
              <li className="nav-item mb-2 fw-semibold">
                <a href="https://linktr.ee/Chinook_Curiosity_Central" className="nav-link p-0 text-muted" target="_blank" rel="noopener noreferrer">
                  CCC Linktree
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Quick Forms</h5>
            <ul className="nav flex-column p-3">
              <li className="nav-item mb-2">
                <a href="https://forms.gle/hTFZrhrAaCXiZpjs6" className="nav-link p-0 text-muted" target="_blank" rel="noopener noreferrer">
                  Contest Registration
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <button onClick={() => window.open('https://discord.gg/SQZnnMtz9B')} style={{ all: 'unset', cursor: 'pointer', marginRight: '10px' }}>
            <img src="/src/discord-logo.png" alt="Discord" width="30" height="auto" />
          </button>
          <button onClick={() => window.open('https://www.instagram.com/chinook_curiosity_central/')} style={{ all: 'unset', cursor: 'pointer', marginLeft: '10px' }}>
            <img src="/src/instagram-logo.png" alt="Instagram" width="30" height="auto" />
          </button>
        </div>
      </div>
      <div className="pb-2 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-muted fw-lighter fs-6" style={{ opacity: 0.5 }}>
          © 2022 Chinook Curiosity Central. All rights reserved. Created with Bootstrap 5.3.3 & Next.js
        </span>
      </div>
    </footer>
  );
}
