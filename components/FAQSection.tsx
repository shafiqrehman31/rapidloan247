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
      question: '1. What is Rapid Loan 24/7?',
      answer: 'Rapid Loan 24/7 is an online loan service that helps users access loan options through a fast and simple application process.',
      isActive: false
    },
    {
      id: 2,
      question: '2. What type of loan do you offer?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
  
      id: 3,
      question: '3. How much can I borrow?',
      answer: 'Loan amounts depend on your eligibility, income, and other factors, with amounts starting at $100 and going up to $5,000.',
      isActive: false
    },
    {
      id: 4,
      question: '4. Are loans available in all states?',
      answer: 'Loan availability depends on state laws and lender participation. Options will be shown based on your location after applying.',
      isActive: false
    },
    {
      id: 5,
      question: '5. Do you check credit scores?',
      answer: 'A soft credit check may be used to display loan options, which does not affect your credit score. A hard check may occur before final approval.',
      isActive: false
    },
    {
      id: 6,
      question: '6. Can I apply with bad credit?',
      answer: 'Yes. Applications from all credit backgrounds are considered. Factors such as income and employment may also be reviewed.',
      isActive: false
    },
    {
      id: 7,
      question: '7. How fast will I receive the money?',
      answer: 'Once approved, funds are typically deposited into your bank account the same day or the next business day.',
      isActive: false
    },
    {
      id: 8,
      question: '8. Are there any hidden fees?',
      answer: 'No. All fees and interest rates are clearly disclosed before you accept any loan offer.',
      isActive: false
    },
    {
      id: 9,
      question: '9. Can I repay early?',
      answer: 'Yes, early repayment is allowed and may help reduce overall interest costs.',
      isActive: true
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