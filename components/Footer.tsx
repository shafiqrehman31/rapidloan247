import Link from 'next/link';
import { FooterLink } from '@/types';

export default function Footer() {
  const pagesLinks: FooterLink[] = [
    { title: 'About us', href: '/about' },
    { title: 'FAQ\'s', href: '/faq' },
    { title: 'Contact', href: '/contact' },
  ];

  const primaryPagesLinks: FooterLink[] = [
    { title: 'Terms and Conditions', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'California Privacy Notice', href: '/california-privacy' },
    { title: 'Before you Apply', href: '/before-you-apply' },
  ];

  return (
    <footer className="main_footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="footer_widget about_widget aos-init aos-animate" 
                data-aos="fade-right" 
                data-aos-easing="linear" 
                data-aos-duration="500"
              >
                <figure className="footer_logo">
                  <Link href="/">
                    <img src="/assets/images/footer-speedy.png" alt="Financer Logo" />
                  </Link>
                </figure>
                <p>
                  The future is fast approaching, and the consumer industry is on 
                  the precipice of dramatic change
                </p>
                <ul className="social-links">
                  <li><Link href="#"><i className="icon-43"></i></Link></li>
                  <li><Link href="#"><i className="icon-42"></i></Link></li>
                  <li><Link href="#"><i className="icon-40"></i></Link></li>
                  <li><Link href="#"><i className="icon-41"></i></Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="footer_widget page_widget aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-easing="linear" 
                data-aos-duration="550"
              >
                <h4 className="footer_widget_title">Quick Links</h4>
                <ul className="primary_page_list">
                  {pagesLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="footer_widget primary_page_widget aos-init aos-animate" 
                data-aos="fade-down" 
                data-aos-easing="linear" 
                data-aos-duration="600"
              >
                <h4 className="footer_widget_title">Importance Links</h4>
                <ul className="primary_page_list">
                  {primaryPagesLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="footer_widget newsletter_widget aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-easing="linear" 
                data-aos-duration="650"
              >
                <h4 className="footer_widget_title">Get In Touch</h4>

                <div>
                  
                    Address: 3680 Wilshire Blvd Ste P04 Los Angeles, CA 90010 <br></br>
                    Email: <Link href="mailto:info@rapidloan247.com">Info@rapidloan247.com</Link> <br></br>
                <p>
                <br></br>
                  Rapid Loan 24/7 is a trading style of Name Limited company registered in name and name.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} &nbsp;
            <Link href="/">RapidLoan24/7</Link>
            , Inc. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="footer_shape"></div>
    </footer>
  );
}