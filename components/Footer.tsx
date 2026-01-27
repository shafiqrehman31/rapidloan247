import Link from 'next/link';
import { FooterLink } from '@/types';

export default function Footer() {
  const pagesLinks: FooterLink[] = [
    { title: 'About us', href: '/about' },
    { title: 'Blogs', href: '/blog' },
    { title: 'FAQ\'s', href: '/faq' },
    { title: 'Contact', href: '/contact' },
    { title: 'Support', href: '/support' },
  ];

  const primaryPagesLinks: FooterLink[] = [
    { title: 'Services', href: '/services' },
    { title: 'Careers', href: '/careers' },
    { title: 'Pricing Plans', href: '/pricing' },
    { title: 'Portfolio', href: '/projects' },
    { title: 'News', href: '/blog' },
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
                    <img src="/assets/images/footer-logo.png" alt="Financer Logo" />
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
                <h4 className="footer_widget_title">Pages</h4>
                <ul className="page_list">
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
                <h4 className="footer_widget_title">Primary Pages</h4>
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
                <h4 className="footer_widget_title">Subscribe Newsletter</h4>
                <p>
                  To add complexity, this is happening against a back drop of 
                  significant challenges
                </p>
                <div className="subscribe-inner">
                  <form action="/contact" method="post" className="subscribe-form">
                    <div className="form-group">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        required 
                      />
                      <button type="submit" className="btn_style_one">
                        Subscribe
                      </button>
                    </div>
                  </form>
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
            <Link href="/">Financer</Link>
            , Inc. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="footer_shape"></div>
    </footer>
  );
}