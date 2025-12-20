'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import '../styles/events.css';

export default function Events() {
  const [showModal2025, setShowModal2025] = useState(false);
  const [showModal2024, setShowModal2024] = useState(false);
  const [showModal2023, setShowModal2023] = useState(false);

  return (
    <>
      <ScrollAnimations />
      <Navbar />

      <div style={{ paddingTop: '75.98px' }}>

        {/* Past Events Section */}
        <div className="p-5" style={{ backgroundImage: 'linear-gradient(180deg, white, #ecf1ff)' }}>
          <div className="container">
            <h2 className="text-center mb-5 slide-target">Events Archive</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              {/* Past Event Card 3 */}
              <div className="col slide-target">
                <div className="event-card past-event">
                  <img src="/src/contest/2024CCCcontest/2023-contest-card.jpg" alt="2023 Curiosity Contest" />
                  <div className="event-content">
                    <span className="event-date">June 1, 2025</span>
                    <h4>2025 Nature of Things</h4>
                    <p>A science contest that showcased the application of math in the natural sciences.</p>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setShowModal2025(true)} disabled>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              {/* Past Event Card 2 */}
              <div className="col slide-target">
                <div className="event-card past-event">
                  <img src="/src/contest/2024CCCcontest/2024-contest-card.jpg" alt="2024 Curiosity Contest" />
                  <div className="event-content">
                    <span className="event-date">October 27, 2024</span>
                    <h4>2024 Curiosity Contest</h4>
                    <p>Our annual flagship event featuring challenging math and science problems.</p>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setShowModal2024(true)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Past Event Card 1 */}
              <div className="col slide-target">
                <div className="event-card past-event">
                  <img src="/src/contest/2024CCCcontest/2023-contest-card.jpg" alt="2023 Curiosity Contest" />
                  <div className="event-content">
                    <span className="event-date">October 21, 2023</span>
                    <h4>2023 Curiosity Contest</h4>
                    <p>Our inaugural contest that kicked off Chinook Curiosity Central's journey.</p>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setShowModal2023(true)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2025 Modal */}
      {showModal2025 && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">2023 Curiosity Contest Results</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal2025(false)}
                ></button>
              </div>
              <div className="modal-body">
                Results will be migrated soon =)
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal2025(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2024 Modal */}
      {showModal2024 && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">2024 Curiosity Contest Results</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal2024(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Podium Section */}
                <div className="podium-wrapper text-center mb-5">
                  <div className="podium d-flex align-items-end justify-content-center">
                    <div className="podium-block silver">
                      <div className="winner">
                        <div className="name">Team 6</div>
                        <div className="position">2nd</div>
                      </div>
                      <div className="podium-base">2</div>
                    </div>
                    <div className="podium-block gold">
                      <div className="winner">
                        <div className="name">Team 9</div>
                        <div className="position">1st</div>
                      </div>
                      <div className="podium-base">1</div>
                    </div>
                    <div className="podium-block bronze">
                      <div className="winner">
                        <div className="name">Team 2</div>
                        <div className="position">3rd</div>
                      </div>
                      <div className="podium-base">3</div>
                    </div>
                  </div>
                </div>

                {/* Results Table */}
                <h3>Final Results</h3>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Position</th>
                      <th scope="col">Team</th>
                      <th scope="col">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1st</th>
                      <td>Team 9</td>
                      <td>89 points</td>
                    </tr>
                    <tr>
                      <th scope="row">2nd</th>
                      <td>Team 6</td>
                      <td>87 points</td>
                    </tr>
                    <tr>
                      <th scope="row">3rd</th>
                      <td>Team 2</td>
                      <td>85 points</td>
                    </tr>
                    <tr>
                      <th scope="row">4th</th>
                      <td>Team 5</td>
                      <td>82 points</td>
                    </tr>
                    <tr>
                      <th scope="row">5th</th>
                      <td>Team 1</td>
                      <td>80 points</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  The 2024 contest was a tremendous success with over 200 participants. Thank you all for attending!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal2024(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2023 Modal */}
      {showModal2023 && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">2023 Curiosity Contest Results</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal2023(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  The 2023 Curiosity Contest was our inaugural event that marked the beginning of
                  Chinook Curiosity Central. It was a great success with positive community feedback.
                </p>

                <h3>Highlights</h3>
                <ul>
                  <li>150+ participants</li>
                  <li>Sponsorships from 4 different sources</li>
                  <li>CTV news coverage</li>
                  <li>Two-round competition format</li>
                </ul>

                <p>
                  This inaugural event set the foundation for the annual tradition we continue today.
                  We're grateful for everyone who made 2023 possible!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal2023(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
