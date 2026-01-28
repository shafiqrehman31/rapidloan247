export default function BannerSection() {
  return (
    <section className="banner_style_two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div 
              className="banner_content aos-init aos-animate" 
              data-aos="fade-right" 
              data-aos-easing="linear" 
              data-aos-duration="500"
            >
              <div className="tag_text">
                <h6>Rapid Loan 24/7</h6>
              </div>
              <h1>
                Loans Available <br />
                $100 – $5,000,
              </h1>
              <p>
               Quick access to funds for everyday needs, emergencies, or unexpected expenses.
              </p>
              <div className="subscribe-inner">
                <form action="/contact" method="post" className="subscribe-form">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Enter your email" />
                    <button type="submit" className="btn_style_one">
                      Get Loan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div 
              className="banner_left_image aos-init aos-animate" 
              data-aos="fade-left" 
              data-aos-easing="linear" 
              data-aos-duration="500"
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 clomun">
                  <div className="chart_box float-bob-y">
                    <div className="tranding_icon">
                      <i className="icon-29"></i>
                    </div>
                    <div className="shape_four">
                      <img src="/assets/images/icons/shape_icon_4.png" alt="Shape Icon" />
                    </div>
                    <div className="chart_image">
                      <img src="/assets/images/resource/chart_4.png" alt="Chart" />
                    </div>
                  </div>
                  <div className="income_chart float-bob-y">
                    <div className="title_box">
                      <h6>Total Loan Issued</h6>
                      <div className="rate">$ 58532.52</div>
                    </div>
                    <div className="percentage">
                      <i className="fa-solid fa-arrow-trend-up"></i> +11%
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 clomun">
                  <div className="banner_image_two">
                    <img src="/assets/images/resource/banner_image_1.jpg" alt="Banner" />
                  </div>
                  <div className="banner_image_three">
                    <img src="/assets/images/resource/banner_image_three.png" alt="Banner Three" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}