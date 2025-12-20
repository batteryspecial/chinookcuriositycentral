'use client';

import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    /*** Transitions, currently including "slide", "fade", and "spin" ***/
    const transitions = [
      { 
        class: 'fade-target', 
        animation: 'fading',
      },
      {
        class: 'slide-target', 
        animation: 'sliding',
      },
      {
        class: 'spin-target', 
        animation: 'spinning',
      },
    ];

    // Create the observer for all transitions
    const observer = new IntersectionObserver(entries => {
      let delay = 0;
      const delayIncrement = 100;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          transitions.forEach(transition => {
            if (entry.target.classList.contains(transition.class)) {
              setTimeout(() => {
                entry.target.classList.add(transition.animation);
                entry.target.classList.remove(transition.class);
              }, delay);
              
              delay += delayIncrement;
            }
          });
        }
      });
    });

    // Observe elements
    document.querySelectorAll('.fade-target, .slide-target, .spin-target').forEach(target => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Card Lift animation
    const cards = document.querySelectorAll('.card.card-lift-1');
    
    cards.forEach(card => {
      card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
      });
      
      card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });
  }, []);

  return null;
}
