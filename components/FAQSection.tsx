'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
}

export default function FAQSection() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: '1. How To Cancel Chase Card?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
      id: 2,
      question: '2. What is GlobalWebPay Alternative?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: true
    },
    {
      id: 3,
      question: '3. What are BIC and SWIFT codes?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
      id: 4,
      question: '4. Explaining what Britain\'s exit from the EU means?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
      id: 5,
      question: '5. What is Gross Domestic Product or GDP?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
      id: 6,
      question: '6. What is Gross Domestic Product or GDP?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems(items =>
      items.map(item => ({
        ...item,
        isActive: item.id === id ? !item.isActive : false
      }))
    );
  };

  return (
    <section className="faq_section inner_page">
      <div className="container">
        <div className="section_title centred">
            <h2>Frequently Asked Questions</h2>
        </div>
        <div className="inner_box">
          <ul className="accordion_box">
            {faqItems.map((item, index) => (
              <li 
                key={item.id} 
                className={`accordion block ${item.isActive ? 'active-block' : ''}`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={300 + (index * 100)}
              >
                <div 
                  className={`acc-btn ${item.isActive ? 'active' : ''}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <h4>{item.question}</h4>
                  <div className="icon-box">
                    <span className={`fas ${item.isActive ? 'fa-minus' : 'fa-plus'}`}></span>
                  </div>
                </div>
                <div className={`acc-content ${item.isActive ? 'current' : ''}`}>
                  <div className="text">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}