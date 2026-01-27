'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll to target functionality
  useEffect(() => {
    const initializeScrollToTarget = () => {
      const scrollButtons = document.querySelectorAll('.scroll-to-target');
      
      scrollButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const targetElement = button.getAttribute('data-target');
          
          if (targetElement) {
            const target = document.querySelector(targetElement);
            if (target) {
              const offset = 100; // Adjust offset as needed
              const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeScrollToTarget();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <button 
      className={`scroll-top scroll-to-target ${isVisible ? 'show' : ''}`} 
      data-target="html"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}