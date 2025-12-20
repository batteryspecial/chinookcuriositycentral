'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary z-3" id="navbar" style={{ zIndex: 500 }}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img style={{ marginRight: '1%' }} src="/src/ccc-logo-transparent.png" alt="Chinook Curiosity Central" width="50" height="50" />
          <span className="fs-6">Chinook Curiosity Central</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4 column-gap-3">
            <li className="nav-item slide-target">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item slide-target">
              <Link className="nav-link" href="/team">
                About Us
              </Link>
            </li>
            <li className="nav-item slide-target">
              <Link className="nav-link" href="/events">
                Events
              </Link>
            </li>
            <li className="nav-item dropdown slide-target">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Curiosities
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://medium.com/@xueqi.y16/the-human-eye-as-a-camera-a-review-of-the-ssvep-based-bci-vision-capturing-technique-a308e866d181" target="_blank" rel="noopener noreferrer">
                    Article of the Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://linktr.ee/Chinook_Curiosity_Central" target="_blank" rel="noopener noreferrer">
                    Our Linktree
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="https://open.spotify.com/embed/show/39Qy2HtjEB4EwlXmCf2bAM" target="_blank" rel="noopener noreferrer">
                    The Enigma Express
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row align-items-center column-gap-4">
            <li className="slide-target" style={{ marginTop: '1%' }}>
              <a href="https://discord.gg/SQZnnMtz9B" target="_blank" rel="noopener noreferrer" role="button">
                <img src="/src/discord-logo.png" alt="Discord" width="30" height="auto" />
              </a>
            </li>
            <li className="slide-target" style={{ marginTop: '1%' }}>
              <a href="https://www.instagram.com/chinook_curiosity_central/" target="_blank" rel="noopener noreferrer" role="button">
                <img src="/src/instagram-logo.png" alt="Instagram" width="30" height="auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
