'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import '../styles/team.css';

const teamMembers = [
  {
    id: 'aurelia',
    name: 'Aurelia Fry',
    role: 'Executive',
    image: '/src/logo.webp',
    bgColor: 'aliceblue',
    bio: "Aurelia is a Grade 12 student with a big passion for math and the wonders of the universe. As an Executive of the CCC, she's excited to share and bring math into the lives of many! She loves school and is a high achieving student in Western Canada. In addition, she has won numerous medals in cross country and track and field with her passion for competing and running. She also loves volleyball and coming up with theories in which the galaxy and universe works.",
  },
  {
    id: 'silvana',
    name: 'Silvana Sabzevari',
    role: 'Lead Executive',
    image: '/src/logo.webp',
    bgColor: 'aliceblue',
    bio: "Silvana Sabzevari is an accomplished mathematician who has won Distinction for the Fermat, Gauss, CLMC, CIMC, Cayley, and Hypatia Math competitions. She has gotten 1st place in her division for running competitions like the FONA 5KM, the French Run 5KM, and Melissa's Road Race 10KM and has a 2nd Degree Black belt in Taekwondo. She does competitive speech and debate in more than just English, and fondly remembers one of the highlights of 2024 when she competed at the French National Debating Championships. She is proud to have fundraised $1450 in the Calgary Marathon Charity Challenge, where she raised money for the CMHA and BBBS Charities while training for her first 21.1KM in May. Silvana not only won the award for the Top Youth Individual Fundraiser, but her team won the #1 Youth Team for the Calgary Marathon Charity Challenge. Additionally, Silvana is super competitive on the Track and on the field, and when she’s not demolishing hurdles, she loves to sing and play the flute. She is a proud Co-Author of the Poisonous Pages of Magical Help and was a featured poet in the Stroll of Poets festival by the Alberta Writers Guild. When she's not drowning in IB, she loves encouraging growth and learning in her community and hopes to help other students find a passion and love for what they're doing.",
  },
  {
    id: 'haohan',
    name: 'Haohan Wu Yang',
    role: 'Executive',
    image: '/src/logo.webp',
    bgColor: 'aliceblue',
    bio: "Haohan is an enthusiastic mathematician that hopes to share his interest in mathematics with others. In his free time, he enjoys working on CS projects and is an avid reader.",
  },
  {
    id: 'khloe',
    name: 'Khloe Chang',
    role: 'Executive',
    image: '/src/logo.webp',
    bgColor: 'white',
    bio: "Khloe is a Grade 12 student who loves competing in math and challenging herself and others with higher level math! She is a homeschooler and is very excited to help advertise and plan with the CCC as an executive. In her free time, she likes watching anime and listening to music!",
  },
  {
    id: 'larissa',
    name: 'Larissa Tan',
    role: 'Executive',
    image: '/src/logo.webp',
    bgColor: 'white',
    bio: "Larissa is currently taking cosmetology and culinary classes, with the goal of looking fabulous while cooking. She has been dancing for about six or seven years and enjoys showing off her moves. Outside of school, Larissa volunteered at Westside for two years, from age 13 to 15. She values having fun, whether she's styling hair, cooking, or dancing.She's a big fan of art and has a creative soul. Larissa loves to dance and turn up the vibes. Vibing, staying sassy, and chasing having fun. Keep it real, keep it fun. That’s Larissa in a nutshell!",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [closingModal, setClosingModal] = useState(false);

  useEffect(() => {
    if (selectedMember) {
      // Prevent scrolling outside modal
      document.body.style.overflow = 'hidden';
      // Trigger animation on next frame
      setTimeout(() => setShowModal(true), 0);
    } else {
      document.body.style.overflow = 'unset';
      setShowModal(false);
    }
  }, [selectedMember]);

  const handleCloseModal = () => {
    setClosingModal(true);
    setTimeout(() => {
      setSelectedMember(null);
      setClosingModal(false);
    }, 300); // Bootstrap fade animation duration
  };

  return (
    <>
      <ScrollAnimations />
      <Navbar />

      <div style={{ paddingTop: '76px' }}>
        <div className="container slide-target p-5 col-sm-9 mt-md-5 border border-black" style={{ color: 'rgb(48, 48, 48)', boxShadow: '10px 10px rgb(0, 0, 0)' }}>
          <section className="mb-4">
            <h1 className="slide-target">The Chinook Curiosity Central Team of 2025</h1>
          </section>
          <div className="ps-4 text-wrap slide-target">
            <p className="poppins-regular lh-lg">
              <span className="fw-bold">Curious</span>.<span className="fw-bold"> Aspiring</span>.<span className="fw-bold"> Motivators</span>.
              Every year, the Chinook Curiosity Central team strives to inspire curiosity into the local community. We are not geniuses (but we hope you are). We are simply curious, and we want to imbue that quality 
              into you. Because curiosity has taken us very far.
            </p>
            <p className="poppins-regular lh-lg">
              We are high-achieving students who found opportunities to pursue our true interests. Being curious is not an automatic ticket
              to success, although most successful people stay curious for all their lives.
            </p>
          </div>
        </div>

        <div className="mx-auto" style={{ width: '50%', margin: '6rem 0 3rem 0' }}>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-4 fade-target">
                <img
                  src={member.image}
                  className="slide-target img-fluid rounded-circle responsive-centering"
                  alt={member.name}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedMember(member)}
                />
                <h3 className="memberlabel">{member.name}</h3>
                <h6 className="text-center fst-italic">{member.role}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className={`modal fade ${showModal && !closingModal ? 'show' : ''} d-block`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content" style={{ backgroundColor: selectedMember.bgColor }}>
                <div className="modal-header border-bottom border-2 border-black">
                  <h1 className="modal-title fs-5">{selectedMember.role}</h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedMember.image}
                    className="rounded-5 card-img-top m-3 mx-auto"
                    style={{ height: '200px', width: 'auto' }}
                    alt={selectedMember.name}
                  />
                  <div className="hr"></div>
                  <p className="card-text">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
