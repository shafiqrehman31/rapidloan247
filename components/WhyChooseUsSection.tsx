import { Service } from '@/types';

export default function WhyChooseUsSection() {
  const features: Service[] = [
    {
      title: 'Fast & Easy Process',
      description: 'Apply online in minutes with a straightforward form designed to save your time.',
      icon: 'icon-28',
      link: '#'
    },
    {
      title: 'Clear Loan Terms',
      description: 'All details are shown upfront so you know exactly what you’re agreeing to.',
      icon: 'icon-27',
      link: '#'
    },
    {
      title: 'Secure Information Handling',
      description: 'Your personal and financial information is protected using modern security standards.',
      icon: 'icon-26',
      link: '#'
    }
  ];

  return (
    <section className="why_choose_us style_two">
      <div className="mouse_pointer float-bob-y">
        <img src="/assets/images/icons/mouse-pointer.png" alt="Mouse Pointer" />
      </div>
      <div className="container">
        <div className="section_title centred">
          <div className="tag_text">
            <h6>Why Choose us</h6>
          </div>
          <h2>Why Borrowers Trust Rapid Loan 24/7</h2><br></br>
          <p  className="section_subtitle">
          We’re built for speed, simplicity, and peace of mind. Our platform is designed to help everyday borrowers access loans without unnecessary complications.
          </p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div 
                className={`why_choose_block_two mb_40 aos-init aos-animate ${index === 1 ? 'hover' : ''}`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={500 + (index * 50)}
              >
                <div className="choose_icon">
                  <i className={feature.icon}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <div className="link_btn">
                  <a href={feature.link}>
                    Discover More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}