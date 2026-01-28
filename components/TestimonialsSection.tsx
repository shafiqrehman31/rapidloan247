'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  title: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "The application was quick and easy, and I didn’t feel overwhelmed at any step. I got the funds when I really needed them, and everything was clearly explained.",
      author: "Daniel W",
      title: "CEO, TechCorp",
      rating: 5
    },
    {
      id: 2,
      content: "I wasn’t sure what to expect, but the process turned out to be very smooth. The loan helped me cover an unexpected expense without stress.",
      author: "Melissa H.",
      title: "Finance Director, Global Inc",
      rating: 5
    },
    {
      id: 3,
      content: "What I liked most was how simple everything was. No confusing steps, no surprises, and the money showed up fast.",
      author: "Robert K.",
      title: "Investment Manager, WealthBuild",
      rating: 5
    },
    {
      id: 4,
      content: "I’ve used online loan services before, but this one felt more straightforward. I always knew what was happening and what my repayment looked like.",
      author: "Angela P.",
      title: "Business Owner, SuccessCo",
      rating: 5
    }
  ];

  useEffect(() => {
    // Initialize Owl Carousel for testimonials in a row
    const initializeCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        
        const carousel = $('.three-item-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 700,
          navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1200: {
              items: 3
            }
          },
          onChanged: (event: any) => {
            setActiveIndex(event.item.index);
          }
        });
      }
    };

    const timer = setTimeout(() => {
      initializeCarousel();
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Destroy carousel on unmount
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        const carousel = $('.three-item-carousel');
        if (carousel.length && carousel.data('owl.carousel')) {
          carousel.trigger('destroy.owl.carousel');
          carousel.removeClass('owl-loaded owl-hidden');
        }
      }
    };
  }, []);

  const nextTestimonial = () => {
    if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
      const $ = (window as any).$;
      $('.three-item-carousel').trigger('next.owl.carousel');
    }
  };

  const prevTestimonial = () => {
    if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
      const $ = (window as any).$;
      $('.three-item-carousel').trigger('prev.owl.carousel');
    }
  };

  return (
    <section className="testimonial_section_row">
      <div className="container">
        <div className="section_title centred">
          <div className="tag_text">
            <h6>Testimonials</h6>
          </div>
          <h2>What People Are Saying</h2>
          <p className="section_subtitle">See how Rapid Loan 24/7 made borrowing simple and stress-free</p>
        </div>
        
        {/* Testimonials in a Row */}
        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial_card">
              <div className="testimonial_inner">
                <div className="quort_icon">
                  <i className="icon-19"></i>
                </div>
                <p className="testimonial_text">{testimonial.content}</p>
                
                {/* Star Rating */}
                <div className="testimonial_rating">
                  <div className="star_rating">
                    {[...Array(5)].map((_, index) => (
                      <i 
                        key={index} 
                        className={`fas fa-star ${index < testimonial.rating ? 'active' : ''}`}
                      ></i>
                    ))}
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="testimonial_author">
                  <div className="author_details">
                    <h4 className="author_name">{testimonial.author}</h4>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Navigation Dots */}
        <div className="testimonial_nav_dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav_dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
                  const $ = (window as any).$;
                  $('.three-item-carousel').trigger('to.owl.carousel', [index]);
                }
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Manual Navigation Buttons */}
        <div className="testimonial_nav_buttons">
          <button className="nav_btn prev" onClick={prevTestimonial}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav_btn next" onClick={nextTestimonial}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}