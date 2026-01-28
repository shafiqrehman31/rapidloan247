'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <main>
      {/* Page Breadcrumb */}
      <section className="page_breadcrumb">
        <div className="page_breadcrumb_shape_one float-bob-x">
          <Image 
            src="/assets/images/icons/shape_icon_13.png" 
            alt="Shape Icon" 
            width={100}
            height={100}
          />
        </div>
        <div className="page_breadcrumb_shape_two float-bob-y">
          <Image 
            src="/assets/images/icons/shape_icon_1.png" 
            alt="Shape Icon" 
            width={100}
            height={100}
          />
        </div>
        <div className="container">
          <div className="breadcrumb_content centred">
            <div className="breadcrumb_subtitle"><h6>Contact us</h6></div>
            <h1 className="breadcrumb_title">Contact Information</h1>
            <ul className="breadcrumb_menu">
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Page Breadcrumb End */}

      {/* Contact Info Section */}
      <section className="contact_info_section pt_150 pb_120">
        <div className="container">
          <div className="section_title centred">
            <div className="tag_text"><h6>Contact Info</h6></div>
            <h2>Contact Information</h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                <div className="contact_block_icon"><i className="icon-3"></i></div>
                <div className="contact_block_title"><h4>Our Location</h4></div>
                <div className="contact_block_text">
                  <p>Chicago 12, Melborne City, USA</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                <div className="contact_block_icon"><i className="icon-2"></i></div>
                <div className="contact_block_title"><h4>Email Address</h4></div>
                <div className="contact_block_text">
                  <p>
                    <a href="mailto:contact@rapidloan247.com">info@rapidloan247.com</a>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Section End */}

     
   
    </main>
  );
}