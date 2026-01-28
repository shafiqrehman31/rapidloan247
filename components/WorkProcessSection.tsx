interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function WorkProcessSection() {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'Step 1: Apply Online',
      description: 'Fill out our quick and secure loan request form no paper work, no long forms.',
      icon: 'icon-35'
    },
    {
      id: 2,
      title: 'Step 2: Review & Verification',
      description: 'Your details are reviewed to ensure accuracy and a smooth approval process',
      icon: 'icon-36'
    },
    {
      id: 3,
      title: 'Step 3: Get Approved',
      description: 'Once verified, receive a loan decision quickly without unnecessary delays.',
      icon: 'icon-37'
    }
  ];

  return (
    <section className="work_process_section bg_dark">
      <div className="credit_card float-bob-y">
        <img src="/assets/images/icons/credit-card.png" alt="Credit Card" />
      </div>
      <div className="master_card float-bob-y">
        <img src="/assets/images/icons/mastercard.png" alt="Mastercard" />
      </div>
      <div className="container">
        <div className="section_title centred light">
          <div className="tag_text">
            <h6>Work Process</h6>
          </div>
          <h2>How it works</h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div key={step.id} className="col-xl-4 col-md-6 col-sm-12">
              <div 
                className={`process_block_one centred style_two ${index === 1 ? 'shape_image' : ''} aos-init aos-animate`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={500 + (index * 50)}
              >
                <div className="process_icon">
                  <i className={step.icon}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}