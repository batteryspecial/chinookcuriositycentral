'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import './styles/index.css';
import './styles/universal.css';

function scrollToPromotion() {
  const element = document.getElementById('promotion-main');
  const headerOffset = 76;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*
<div className="p-5 promotionbox" style={{ backgroundImage: 'linear-gradient(0, #ecf1ff, white)' }} id="promotion-main">
  <div className="pt-4 pb-4 text-center">
    <h1>Upcoming Events</h1>
  </div>
  <div className="promotion-content pb-5">
    <div className="promotion-text">
      <h2 className="promotion-title">Nature of Things</h2>
      <p className="promotion-description">
        Are you a physics or chemistry student in Calgary? Register for our newest in-person
        event. In the span of one hour we will have a competition along with some talks about
        how we were all able to succeed under the rigorous Alberta curriculum.
      </p>
      <Link href="/events" className="promotion-cta">
        Learn More
      </Link>
    </div>
    <div className="promotion-image-container">
      <img src="/src/contest/NOTcontest/physics.png" alt="alberta physics" width="100%" height="auto" />
    </div>
  </div>
</div>
*/

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      
      <div className="headerbox">
        <div className="container p-5">
          <div className="row row-col-2 justify-content-center" style={{ marginTop: '20vh' }}>
            <div className="col-md-4" style={{ marginBottom: '10%' }}>
              <img
                type="image"
                className="slide-target gradient-div responsive-centering"
                style={{ marginBottom: '2rem', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)' }}
                src="/src/logo.webp"
                width="90%"
                height="auto"
                alt="Logo"
              />
              <div className="slide-target text-center text-lg-start">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg responsive-centering"
                  onClick={scrollToPromotion}>
                  LEARN MORE →
                </button>
              </div>
            </div>
            <div className="col-md-8 text-md-start text-center">
              <h1 className="slide-target">Welcome to the Beginning.</h1>
              <div className="slide-target hr"></div>
              <p className="slide-target content fw-lighter fs-4">
                Chinook Curiosity Central is a student-led, non-profit initiative committed to empowering youth through curiosity.
                We operate in the Calgary area. If you are a student who wants to perceive and learn in a new
                way, join our 
                <a className="gradient-text" style={{ textDecoration: 'none', color: '#000000' }} href="https://discord.gg/2vQJ4QbBFq" target="_blank" rel="noopener noreferrer"> discord server </a>
                to be notified for all further events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5" style={{ backgroundImage: 'linear-gradient(90deg, rgb(248, 252, 255), #e6ecff)' }}>
        <div className="textbox">
          <div className="pt-4 pb-4 text-center">
            <h1 className="fade-target fw-bold">Why Curiosity?</h1>
          </div>
          <div className="mx-auto fs-4 poppins-regular dictionary-entry fade-target">
            <h2 className="fade-target fw-bold mb-2">cu·ri·os·i·ty</h2>
            <h6 className="fade-target text-secondary mb-4 fs-5">/ˌkyo͝orēˈäsədē/</h6>
            <p className="fade-target text-muted fst-italic mb-3">noun</p>
            <div className="definition-block fade-target ps-4 border-start border-2">
              <p className="mb-2">1. The desire to do something even with no clear benefit in mind.</p>
              <p className="mb-2">2. The innate human drive to venture into the unknown.</p>
            </div>
          </div>
          <hr className="fade-target" />
          <div className="dictionary-entry mx-auto fs-5 poppins-regular fade-target">
            At Chinook Curiosity Central, we believe that curiosity is a part of human nature.
            We are here to transform systematic education into curiosity and inspiration.
          </div>
        </div>
      </div>
      
      

      <div className="p-5" style={{ backgroundImage: 'linear-gradient(270deg, rgb(248, 252, 255), #e6ecff)' }}>
        <div className="dictionary-entry">
          <div className="pt-4 pb-4 text-center">
            <h1 className="slide-target">The Enigma Express</h1>
          </div>
          <div className="mb-5 mx-auto fs-5 poppins-regular">
            <p className="slide-target">
              For all the curious people out there. Are you interested in what happens in the minds of CCC's executives?
              Welcome to the first season of{' '}
              <a
                className="gradient-text"
                style={{ textDecoration: 'none', color: '#000000' }}
                href="https://open.spotify.com/embed/show/39Qy2HtjEB4EwlXmCf2bAM"
                target="_blank"
                rel="noopener noreferrer">
                The Enigma Express Podcast
              </a>
              , where we talk about everything that intrigues us and our perspectives on phenomena around the world.
            </p>
          </div>
          <iframe
            className="slide-target"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/show/39Qy2HtjEB4EwlXmCf2bAM?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="p-5" style={{ backgroundImage: 'linear-gradient(180deg, #ecf1ff, white)' }}>
        <div className="pt-4 pb-4">
          <h1 className="slide-target text-center">Past Curiosity Contests</h1>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
            <div className="col">
              <div className="card slide-target card-lift-1 borderless-card">
                <img
                  src="/src/contest/2024CCCcontest/2024-contest-card.jpg"
                  height="auto"
                  width="auto"
                  className="card-img-top"
                  alt="2024 Curiosity Contest"
                />
                <div className="card-header">10/27/2024</div>
                <div className="card-body">
                  <h5 className="card-title">2024 Curiosity Contest</h5>
                  <p className="card-text">
                    Thank you to everybody that attended the 2024 Curiosity Contest.
                    Our contest featured three rounds and a mix of both math
                    and science questions. The event was successful in spite of a 
                    cyberattack. The energy was unparalleled, and we are hoping that
                    everybody can bring that same level of enthusiasm to 2025's contest.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card slide-target card-lift-1 borderless-card">
                <img
                  src="/src/contest/2024CCCcontest/2023-contest-card.jpg"
                  height="auto"
                  width="auto"
                  className="card-img-top"
                  alt="2023 Curiosity Contest"
                />
                <div className="card-header">10/21/2023</div>
                <div className="card-body">
                  <h5 className="card-title">2023 Curiosity Contest</h5>
                  <p className="card-text">
                    2023 was when Chinook Curiosity Central got rolling. CCC acquired 
                    sponsorships from four different sources and received CTV coverage. 
                    The event was very successful, featuring two rounds and a lot of
                    participants. Our success gave us a clear indication of where to
                    go next and what we should aspire to achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
