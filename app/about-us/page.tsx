import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Rapid Loan 24/7',
  description: 'Learn about Rapid Loan 24/7 and our mission to transform financial services.',
};

export default function AboutPage() {
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
            <div className="breadcrumb_subtitle"><h6>About Rapid Loan 24/7</h6></div>
            <h1 className="breadcrumb_title">Fast, Simple & Secure Loan Solutions</h1>
            <ul className="breadcrumb_menu">
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Page Breadcrumb End */}

      {/* About Page Banner */}
      <section 
        className="about_page_banner aos-init aos-animate" 
        data-aos="fade-up" 
        data-aos-easing="linear" 
        data-aos-duration="500"
      >
        <div className="container">
          <div className="banner_content centred">
            <div className="tag_text"><h6>About us</h6></div>
            <h1>Reimagining the power of <br />Loan Service</h1>
            <p>Rapid Loan 24/7 is built to simplify borrowing. With a user-friendly process, reliable connections, and transparent information, we help you explore loan options with confidence without unnecessary delays or confusion.</p>
            <div className="banner_image">
              <Image 
                src="/assets/images/resource/about_banner_image.jpg" 
                alt="About Rapid Loan 24/7" 
                width={1200}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Page Banner End */}

      {/* Why Choose Us Section Home Four */}
      <section 
        className="why_choose_us about_page aos-init aos-animate" 
        data-aos="fade-up" 
        data-aos-easing="linear" 
        data-aos-duration="500"
      >
        <div className="shape_circle float-bob-y">
          <Image 
            src="/assets/images/icons/ring_shape.png" 
            alt="Ring Shape" 
            width={100}
            height={100}
          />
        </div>
        <div className="mouse_pointer float-bob-x">
          <Image 
            src="/assets/images/icons/mouse-pointer.png" 
            alt="Mouse Pointer" 
            width={50}
            height={50}
          />
        </div>
        <div className="container">
          <div className="border_top"></div>
          <div className="section_title centred">
            <div className="tag_text"><h6>Why Choose us</h6></div>
            <h2>We are the best in Market</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div 
                className="why_choose_block_two mb_40 aos-init aos-animate" 
                data-aos="fade-right" 
                data-aos-easing="linear" 
                data-aos-duration="500"
              >
                <div className="choose_icon">
                  <i className="icon-28"></i>
                </div>
                <h4>24/7 Service</h4>
                <p>Get loan inquiries processed anytime, anywhere. Our always-on platform works around the clock to connect you with potential lenders, so you’re never limited by office hours.</p>
                <div className="link_btn">
                  <Link href="/contact">
                    Learn More <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div 
                className="why_choose_block_two mb_40 hover aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-easing="linear" 
                data-aos-duration="500"
              >
                <div className="choose_icon">
                  <i className="icon-27"></i>
                </div>
                <h4>Fast Processing</h4>
                <p>Powered by smart technology, Rapid Loan 24/7 helps match your request quickly. Submit your application and receive multiple loan options within minutes saving you time when it matters most.</p>
                <div className="link_btn">
                  <Link href="/contact">
                    Apply Now <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div 
                className="why_choose_block_two mb_40 aos-init aos-animate" 
                data-aos="fade-left" 
                data-aos-easing="linear" 
                data-aos-duration="500"
              >
                <div className="choose_icon">
                  <i className="icon-26"></i>
                </div>
                <h4>Secure Platform</h4>
                <p>Your privacy is our priority. We use advanced, bank-level encryption and strict security standards to ensure your personal and financial information stays safe at every step.</p>
                <div className="link_btn">
                  <Link href="/privacy">
                    View Privacy <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section Style Two End */}


    </main>
  );
}