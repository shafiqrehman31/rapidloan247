import { Service } from '@/types';

export default function WhyChooseUsSection() {
  const features: Service[] = [
    {
      title: 'Expert Consultant',
      description: 'Duis aute irure dolor in velit onerepreh enderit in voluptate more esse',
      icon: 'icon-28',
      link: '#'
    },
    {
      title: 'Worldpay Solutions',
      description: 'Duis aute irure dolor in velit onerepreh enderit in voluptate more esse',
      icon: 'icon-27',
      link: '#'
    },
    {
      title: 'Innovative Fintech',
      description: 'Duis aute irure dolor in velit onerepreh enderit in voluptate more esse',
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
          <h2>We are the best in Market</h2>
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