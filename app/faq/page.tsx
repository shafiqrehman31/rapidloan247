'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FAQPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1); // Start with second item open

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const faqItems = [
        {
      id: 1,
      question: 'What is Rapid Loan 24/7?',
      answer: 'Rapid Loan 24/7 is an online loan service that helps users access loan options through a fast and simple application process.',
      isActive: false
    },
    {
      id: 2,
      question: 'What type of loan do you offer?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.',
      isActive: false
    },
    {
  
      id: 3,
      question: 'How much can I borrow?',
      answer: 'Loan amounts depend on your eligibility, income, and other factors, with amounts starting at $100 and going up to $5,000.',
      isActive: false
    },
    {
      id: 4,
      question: 'Are loans available in all states?',
      answer: 'Loan availability depends on state laws and lender participation. Options will be shown based on your location after applying.',
      isActive: false
    },
    {
      id: 5,
      question: 'Do you check credit scores?',
      answer: 'A soft credit check may be used to display loan options, which does not affect your credit score. A hard check may occur before final approval.',
      isActive: false
    },
    {
      id: 6,
      question: 'Can I apply with bad credit?',
      answer: 'Yes. Applications from all credit backgrounds are considered. Factors such as income and employment may also be reviewed.',
      isActive: false
    },
    {
      id: 7,
      question: 'How fast will I receive the money?',
      answer: 'Once approved, funds are typically deposited into your bank account the same day or the next business day.',
      isActive: false
    },
    {
      id: 8,
      question: 'Are there any hidden fees?',
      answer: 'No. All fees and interest rates are clearly disclosed before you accept any loan offer.',
      isActive: false
    },
    {
      id: 9,
      question: 'Can I repay early?',
      answer: 'Yes, early repayment is allowed and may help reduce overall interest costs.',
      isActive: true
    }
  ];

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
            <div className="breadcrumb_subtitle"><h6>FAQ</h6></div>
            <h1 className="breadcrumb_title">Frequently Asked Questions</h1>
            <ul className="breadcrumb_menu">
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Page Breadcrumb End */}

      {/* Faq Section */}
      <section className="faq_section inner_page pt_150">
        <div className="container">
          <div className="section_title centred aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="tag_text"><h6>General FAQ</h6></div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="inner_box">
            <ul className="accordion_box">
              {faqItems.map((faq, index) => (
                <li 
                  key={faq.id}
                  className={`accordion block aos-init aos-animate ${openAccordion === faq.id ? 'active-block' : ''}`}
                  data-aos="fade-up" 
                  data-aos-easing="linear" 
                  data-aos-duration={600 + (index * 100)}
                >
                  <div 
                    className={`acc-btn ${openAccordion === faq.id ? 'active' : ''}`}
                    onClick={() => toggleAccordion(faq.id)}
                  >                        
                    <h4>{index + 1}. {faq.question}</h4>
                    <div className="icon-box">
                      <span className="icon">
                        {openAccordion === faq.id ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                  <div className={`acc-content ${openAccordion === faq.id ? 'current' : ''}`}>
                    <div className="text">
                      <p 
                        dangerouslySetInnerHTML={{ 
                          __html: faq.answer.replace(
                            /<Link href='([^']+)'>([^<]+)<\/Link>/g, 
                            '<a href="$1" class="text-primary hover:underline">$2</a>'
                          ) 
                        }} 
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Faq Section End */}
    </main>
  );
}