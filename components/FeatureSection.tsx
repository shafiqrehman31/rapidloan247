'use client';

import { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
}

export default function FeatureSection() {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 1,
      title: 'Who We Are',
      content: 'Rapid Loan 24/7 is a trusted platform focused on helping individuals access loan options quickly and conveniently. We prioritize simplicity, transparency, and secure processes to make borrowing easier and more accessible for everyone.',
      isActive: false
    },
    {
      id: 2,
      title: 'Our Mission & Values',
      content: 'Our mission is to remove the stress and confusion from borrowing. We believe in clear information, honest guidance, and responsible connections—so users can make informed financial decisions with confidence.',
      isActive: false
    },
    {
      id: 3,
      title: 'How We Help You',
      content: 'Whether you’re facing an unexpected expense or need short-term financial support, Rapid Loan 24/7 connects you with loan solutions that match your situation. Our streamlined process helps you move forward without delays or unnecessary complications.',
      isActive: true
    }
  ]);

  const toggleAccordion = (id: number) => {
    setAccordionItems(items =>
      items.map(item => ({
        ...item,
        isActive: item.id === id ? !item.isActive : false
      }))
    );
  };

  return (
    <section className="feature_section_two">
      <div className="star_shape rotate-me">
        <img src="/assets/images/icons/star_icon.png" alt="Star Icon" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div 
              className="feature_image_block aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="icon_box_one float-bob-y">
                <i className="icon-44"></i>
              </div>
              <div className="icon_box_two float-bob-y">
                <i className="icon-29"></i>
              </div>
              <div className="feture_image">
                <img src="/assets/images/resource/website-graphics-04.png" alt="Feature" />
              </div>
              <div className="chart_image_five float-bob-x">
                <img src="/assets/images/resource/website-graphics-05.png" alt="Chart" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
            <div 
              className="feature_content_block aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              <div className="section_title">
                <div className="tag_text">
                  <h6>About Us</h6>
                </div>
                <h2>About Rapid Loan 24/7</h2><br></br>
                
                <p>Rapid Loan 24/7 is dedicated to helping individuals access loan options quickly and conveniently. We focus on simplicity, transparency, and security making the borrowing process easier for people facing everyday financial needs.</p>
                <br></br>
              </div>
              <ul className="accordion_box">
                {accordionItems.map((item, index) => (
                  <li 
                    key={item.id} 
                    className={`accordion block ${item.isActive ? 'active-block' : ''} aos-init aos-animate`}
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration={600 + (index * 50)}
                  >
                    <div 
                      className={`acc-btn ${item.isActive ? 'active' : ''}`}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <h4>{item.title}</h4>
                      <div className="icon-box">
                        <span className={`fa-solid ${item.isActive ? 'fa-minus' : 'fa-plus'}`}></span>
                      </div>
                    </div>
                    <div className={`acc-content ${item.isActive ? 'current' : ''}`}>
                      <div className="text">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}