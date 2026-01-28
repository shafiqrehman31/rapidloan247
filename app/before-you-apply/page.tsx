import Link from 'next/link';

export const metadata = {
  title: 'Before You Apply - Important Information | Rapid Loan 24/7',
  description: 'Essential information you need to know before applying for any financial product',
};

export default function BeforeYouApplyPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="page_header" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/background/page-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page_header_content">
                <h2>Before You Apply</h2>
                <div className="breadcrumb">
                  <Link href="/">Home</Link> 
                  <span className="breadcrumb-separator">/</span>
                  <span className="current">Before You Apply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="faq_section pt_120 pb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="faq_content">
                <div className="section_title mb_40">
                  <div className="tag_text">
                    <h6>Important Information</h6>
                  </div>
                  <h2>Before You Apply</h2>
                  <p className="mt-3">
                    Taking out a loan is a serious financial decision. Before you accept any loan offer, 
                    make sure you understand how it works and what could happen if you don't follow the loan terms.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="faq_block mb_40">
                  <h3 className="faq_title mb-3">If You Pay Late or Miss Payments</h3>
                  <p className="mb-3">
                    When you accept a loan, you agree to pay it back:
                  </p>
                  <ul className="feature_list mb-3">
                    <li>On time</li>
                    <li>With interest</li>
                    <li>According to the repayment schedule set by the lender</li>
                  </ul>
                  <div className="alert_box bg-light-yellow p-3 mb-3">
                    <p className="mb-2"><strong>Important:</strong> If you pay late, miss a payment, or don't repay the loan, the lender may charge:</p>
                    <ul>
                      <li>Late fees</li>
                      <li>Penalties</li>
                      <li>Additional interest</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Rapid Loan 24/7</strong> is not a lender, and we do not control loan fees, penalties, or repayment rules. 
                    Always read the lender's loan agreement carefully so you know what happens if a payment is late or missed.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="faq_block mb_40">
                  <h3 className="faq_title mb-3">How Your Credit Score May Be Affected</h3>
                  <p className="mb-3">
                    Lenders may check your credit to decide whether to offer you a loan.
                  </p>
                  <ul className="feature_list mb-3">
                    <li>Some lenders use a soft credit check, which does not affect your credit score.</li>
                    <li>If you move forward with a loan, the lender may perform a hard credit check, which can affect your credit score.</li>
                  </ul>
                  <p>
                    Missing or late payments can also hurt your credit score and stay on your credit report.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="faq_block mb_40">
                  <h3 className="faq_title mb-3">Debt Collection</h3>
                  <p className="mb-3">
                    <strong>Rapid Loan 24/7</strong> does not collect payments and does not handle debt collection.
                  </p>
                  <p>
                    If you do not repay your loan, the lender may contact you to collect the debt. 
                    The lender's collection rules will be explained in your loan agreement. 
                    If you have questions about payments or collections, contact your lender directly.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="faq_block mb_40">
                  <h3 className="faq_title mb-3">How Long It Takes to Get Your Money</h3>
                  <p className="mb-3">
                    If a lender approves your loan, the time it takes to receive funds can vary.
                  </p>
                  <p className="mb-3"><strong>It depends on:</strong></p>
                  <ul className="feature_list mb-3">
                    <li>The lender</li>
                    <li>Your bank</li>
                    <li>The day and time of approval</li>
                  </ul>
                  <p>
                    <strong>Rapid Loan 24/7</strong> does not control funding times.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="faq_block">
                  <h3 className="faq_title mb-3">Our Role</h3>
                  <p className="mb-3">
                    <strong>Rapid Loan 24/7</strong> helps connect you with lenders — we do not provide loans.
                  </p>
                  <ul className="feature_list mb-3">
                    <li>We do not decide who gets approved</li>
                    <li>We do not set loan terms</li>
                    <li>We do not control interest rates or fees</li>
                  </ul>
                  <p>
                    All loan decisions and terms come directly from the lender.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                {/* Contact Info */}
                <div className="sidebar_widget mb_30">
                  <h4 className="sidebar_title">Need Help?</h4>
                  <div className="contact_info_box">
                    <div className="contact_item">
                      <i className="icon-11"></i>
                      <div className="content">
                        <h6>Email Us</h6>
                        <Link href="mailto:info@rapidloan247.com">info@rapidloan247.com</Link>
                      </div>
                    </div>
                    <div className="contact_item">
                      <i className="icon-12"></i>
                      <div className="content">
                        <h6>Office Hours</h6>
                        <p>Mon-Fri: 9AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="sidebar_widget mb_30">
                  <h4 className="sidebar_title">Quick Links</h4>
                  <ul className="page_list">
                    <li><Link href="/faq">Frequently Asked Questions</Link></li>
                    <li><Link href="/terms">Terms & Conditions</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/apply-now">Apply Now</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="cta_box bg-blue text-white p-4 rounded">
                  <h4 className="mb-3">Ready to Apply?</h4>
                  <p className="mb-4">Make sure you understand all terms before proceeding.</p>
                  <Link href="/apply-now" className="btn_style_one w-100 text-center">
                    Start Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta_section bg-light-blue pt_80 pb_80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-3">Still Have Questions?</h3>
              <p className="mb-0">Our financial advisors are here to help you understand everything.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/contact" className="btn_style_two">
                Contact Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}