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
      title: '1. Improve operational performance',
      content: 'More than of the public reviews by our users mention amazing and super fast customer support as one of our',
      isActive: false
    },
    {
      id: 2,
      title: '2. Focus on core competencies',
      content: 'More than of the public reviews by our users mention amazing and super fast customer support as one of our',
      isActive: false
    },
    {
      id: 3,
      title: '3. Go to market quickly',
      content: 'More than of the public reviews by our users mention amazing and super fast customer support as one of our',
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
                <img src="/assets/images/resource/feature_image_1.jpg" alt="Feature" />
              </div>
              <div className="chart_image_five float-bob-x">
                <img src="/assets/images/resource/chart_5.png" alt="Chart" />
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
                  <h6>Features</h6>
                </div>
                <h2>The Specialists in fund administration</h2>
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