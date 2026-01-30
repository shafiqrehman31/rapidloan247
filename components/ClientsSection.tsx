'use client';

import { useEffect } from 'react';
import { Client } from '@/types';

export default function ClientsSection() {
  const clients: Client[] = [
    { name: 'Client 1', logo: '/assets/images/clients/1.png', alt: 'Client 1' },
    { name: 'Client 2', logo: '/assets/images/clients/2.png', alt: 'Client 2' },
    { name: 'Client 3', logo: '/assets/images/clients/3.png', alt: 'Client 3' },
    { name: 'Client 4', logo: '/assets/images/clients/4.png', alt: 'Client 4' },
    { name: 'Client 5', logo: '/assets/images/clients/5.png', alt: 'Client 5' },
  ];

  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    const initializeCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        
        $('.five-item-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          smartSpeed: 700,
          responsive: {
            0: {
              items: 2
            },
            576: {
              items: 3
            },
            768: {
              items: 4
            },
            992: {
              items: 5
            }
          }
        });
      }
    };

    // Wait for jQuery and Owl Carousel to load
    const timer = setTimeout(() => {
      initializeCarousel();
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Destroy carousel on unmount
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        const carousel = $('.five-item-carousel');
        if (carousel.length && carousel.data('owl.carousel')) {
          carousel.trigger('destroy.owl.carousel');
          carousel.removeClass('owl-loaded owl-hidden');
        }
      }
    };
  }, []);

  return (
    <section className="clients-section">
      <div className="container">
        <div className="five-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
          {clients.map((client, index) => (
            <div className="clients_block_one" key={index}>
              <img 
                src={client.logo} 
                alt={client.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}