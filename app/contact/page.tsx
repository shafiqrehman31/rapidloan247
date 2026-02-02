'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Fix for page load issues
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Force display of all sections after page loads
    setTimeout(() => {
      const sections = document.querySelectorAll('.contact_info_section, .contact_section');
      sections.forEach(section => {
        if (section instanceof HTMLElement) {
          section.style.opacity = '1';
          section.style.visibility = 'visible';
        }
      });
      
      // Make sure all content blocks are visible
      const blocks = document.querySelectorAll('.contact_block_one');
      blocks.forEach(block => {
        if (block instanceof HTMLElement) {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }
      });
    }, 100);
  }, []);

  return (
    <main className={`contact-page ${isPageLoaded ? 'loaded' : ''}`}>
      {/* Page Breadcrumb */}
      <section className="work_process_section bg_dark" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/background/page-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="page_breadcrumb_shape_one float-bob-x">
          <img src="/assets/images/icons/shape_icon_13.png" alt="Shape Icon" />
        </div>
        <div className="page_breadcrumb_shape_two float-bob-y">
          <img src="/assets/images/icons/shape_icon_1.png" alt="Shape Icon" />
        </div>
        <div className="container">
          <div className="breadcrumb_content centred" style={{ position: 'relative', zIndex: 2 }}>
            <div className="breadcrumb_subtitle"><h6 className='darkw' style={{color: '#fff'}}>Contact us</h6></div>
            <h1 className="breadcrumb_title darkw" style={{color: '#fff'}}>Contact Information</h1>
            <ul className="breadcrumb_menu" style={{color: '#fff'}}>
              <li><Link className='darkw' href="/" style={{color: '#fff'}}>Home</Link></li>
              <li>/</li>
              <li style={{color: '#fff'}}>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Page Breadcrumb End */}

      {/* Contact Info Section */}
      <section className="contact_info_section pt_150 pb_120" style={{ 
        background: '#fff',
        opacity: 1,
        visibility: 'visible'
      }}>
        <div className="container">
          <div className="section_title centred">
            <div className="tag_text"><h6 style={{color: '#4a6cf7'}}>Contact Info</h6></div>
            <h2 style={{color: '#222'}}>Contact Information</h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12">
              <div className="contact_block_one mb_30" style={{
                opacity: 1,
                transform: 'translateY(0)',
                padding: '30px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 5px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid #f0f0f0'
              }}>
                <div className="contact_block_icon"><i className="icon-3" style={{color: '#4a6cf7', fontSize: '50px'}}></i></div>
                <div className="contact_block_title"><h4 style={{color: '#222'}}>Our Location</h4></div>
                <div className="contact_block_text">
                  <p style={{color: '#555', margin: 0}}>3680 Wilshire Blvd Ste P04 Los Angeles, CA 90010</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12">
              <div className="contact_block_one mb_30" style={{
                opacity: 1,
                transform: 'translateY(0)',
                padding: '30px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 5px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid #f0f0f0'
              }}>
                <div className="contact_block_icon"><i className="icon-2" style={{color: '#4a6cf7', fontSize: '50px'}}></i></div>
                <div className="contact_block_title"><h4 style={{color: '#222'}}>Email Address</h4></div>
                <div className="contact_block_text">
                  <p style={{color: '#555', margin: 0}}>
                    <a href="mailto:contact@speedyloan247.com" style={{color: '#555', textDecoration: 'none'}}>
                      info@speedyloan247.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Section End */}

      {/* Contact Section */}
      <section className="contact_section pt_150 pb_120" style={{ 
        background: '#fff',
        opacity: 1,
        visibility: 'visible'
      }}>
        <div className="container">
          <div className="section_title centred">
            <div className="tag_text"><h6 style={{color: '#4a6cf7'}}>Send Message</h6></div>
            <h2 style={{color: '#222'}}>Get In Touch With Us</h2>
          </div>
          <form onSubmit={handleSubmit} className="contact_form" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#222',
                      background: '#fff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email" 
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#222',
                      background: '#fff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows={6}
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#222',
                      background: '#fff',
                      minHeight: '150px',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              
              {submitMessage && (
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="alert alert-success text-center mb-4" style={{
                    padding: '15px 20px',
                    borderRadius: '8px',
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    color: '#155724'
                  }}>
                    {submitMessage}
                  </div>
                </div>
              )}
              
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="form-group centred">
                  <button 
                    type="submit" 
                    className="btn_style_one"
                    disabled={isSubmitting}
                    style={{
                      display: 'inline-block',
                      background: '#4a6cf7',
                      color: '#fff',
                      padding: '15px 40px',
                      borderRadius: '30px',
                      fontSize: '16px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minWidth: '200px'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Section End */}
    </main>
  );
}