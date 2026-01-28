import Link from 'next/link';

export const metadata = {
  title: 'California Privacy Notice (CCPA/CPRA) - Rapid Loan 24/7',
  description: 'California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) notice for California residents.',
};

export default function CaliforniaPrivacyPage() {
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
                <h2>California Privacy Notice (CCPA/CPRA)</h2>
                <div className="breadcrumb">
                  <Link href="/">Home</Link> 
                  <span className="breadcrumb-separator">/</span>
                  <span className="current">California Privacy Notice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Privacy Content */}
      <section className="page_content pt_120 pb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="california_privacy_content">
                {/* Header Section */}
                <div className="california_privacy_header mb_40">
                  <h1 className="mb-3">California Privacy Notice (CCPA / CPRA)</h1>
                  <div className="meta_info">
                    <div className="meta_item">
                      <strong>Effective Date:</strong> January 06, 2026
                    </div>
                    <div className="meta_item">
                      <strong>Last Updated:</strong> January 06, 2026
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="california_privacy_intro mb_40">
                  <div className="alert_box bg-light-blue p-4 mb-4">
                    <h5 className="mb-2">NOTICE FOR CALIFORNIA RESIDENTS</h5>
                    <p className="mb-0">
                      This California Privacy Notice supplements the Privacy Policy of Rapid Loan 24/7 ("Company," "we," "us," or "our") and applies solely to California residents ("Consumers") as defined by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
                    </p>
                  </div>
                </div>

                {/* Sections */}
                <div className="california_privacy_sections">
                  {/* Section 1 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">1. Our Role</h3>
                    <p className="mb-3">
                      Rapid Loan 24/7 operates a financial lead-generation and distribution platform that connects
                      consumers seeking loan products with third-party lenders and financial service providers through
                      real-time routing and ping-tree technology.
                    </p>
                    <div className="highlight_box p-4 bg-light-red">
                      <p className="mb-0">
                        <strong>Important Disclosure:</strong> Rapid Loan 24/7 is not a lender, does not make credit decisions, and does not issue loans.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">2. Categories of Personal Information Collected</h3>
                    <p className="mb-3">
                      Within the last 12 months, we may have collected the following categories of personal
                      information:
                    </p>
                    
                    <div className="categories_grid">
                      <div className="category_card p-4 mb-3 bg-light-gray">
                        <h5 className="mb-2">A. Identifiers</h5>
                        <ul className="feature_list mb-0">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>IP address</li>
                          <li>Online identifiers</li>
                        </ul>
                      </div>
                      
                      <div className="category_card p-4 mb-3 bg-light-gray">
                        <h5 className="mb-2">B. Personal Information (Cal. Civ. Code §1798.80)</h5>
                        <ul className="feature_list mb-0">
                          <li>Mailing address</li>
                          <li>Date of birth</li>
                          <li>Employment information</li>
                          <li>Income-related indicators</li>
                          <li>Loan request details</li>
                        </ul>
                      </div>
                      
                      <div className="category_card p-4 mb-3 bg-light-gray">
                        <h5 className="mb-2">C. Internet or Network Activity</h5>
                        <ul className="feature_list mb-0">
                          <li>Website interaction data</li>
                          <li>Browsing behavior</li>
                          <li>Referral and affiliate source data</li>
                        </ul>
                      </div>
                      
                      <div className="category_card p-4 mb-3 bg-light-gray">
                        <h5 className="mb-2">D. Geolocation Data</h5>
                        <ul className="feature_list mb-0">
                          <li>Approximate location derived from IP address</li>
                        </ul>
                      </div>
                      
                      <div className="category_card p-4 bg-light-gray">
                        <h5 className="mb-2">E. Sensitive Personal Information</h5>
                        <ul className="feature_list mb-0">
                          <li>Financial information provided in connection with a loan request</li>
                          <li>Authentication or verification data (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">3. Sources of Personal Information</h3>
                    <p className="mb-3">
                      We collect personal information from:
                    </p>
                    <div className="sources_list p-4 bg-light-blue">
                      <ul className="feature_list mb-0">
                        <li>Consumers directly</li>
                        <li>Affiliate publishers and marketing partners</li>
                        <li>Lead generators</li>
                        <li>Data verification and fraud-prevention providers</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">4. Purposes for Collection and Use</h3>
                    <p className="mb-3">
                      We collect and use personal information to:
                    </p>
                    <ul className="feature_list">
                      <li>Match consumers with potential lenders or financial partners</li>
                      <li>Operate and optimize ping-tree lead-distribution systems</li>
                      <li>Communicate regarding loan inquiries</li>
                      <li>Verify identity and prevent fraud</li>
                      <li>Maintain compliance and audit records</li>
                      <li>Improve website performance and user experience</li>
                      <li>Comply with legal and regulatory obligations</li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">5. Disclosure, Sale, and Sharing of Personal Information</h3>
                    
                    <h5 className="mb-3">A. Disclosure for Business Purposes</h5>
                    <p className="mb-3">
                      We may disclose personal information to:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Service providers</li>
                      <li>Technology and lead-routing platforms</li>
                      <li>Hosting, analytics, and compliance vendors</li>
                    </ul>

                    <h5 className="mb-3">B. Sale or Sharing of Personal Information</h5>
                    <p className="mb-3">
                      Rapid Loan 24/7 may sell or share personal information to third-party lenders and financial
                      buyers in exchange for monetary or other valuable consideration.
                    </p>
                    <p className="mb-3">
                      This may include:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Identifiers</li>
                      <li>Financial and loan-related information</li>
                      <li>Internet or network activity data</li>
                    </ul>
                    
                    <div className="opt_out_notice p-4 bg-light-yellow">
                      <h5 className="mb-2">Opt-Out Instructions</h5>
                      <p className="mb-2">You may opt out of the sale or sharing of your personal information at any time.</p>
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <a href="mailto:contact@rapidloan247.com" className="btn_style_three">
                          Email: contact@rapidloan247.com
                        </a>
                        <Link href="/do-not-sell" className="btn_style_four">
                          Do Not Sell or Share My Personal Information
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">6. Sensitive Personal Information</h3>
                    <p className="mb-3">
                      Sensitive personal information is used only as reasonably necessary to:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Provide requested services</li>
                      <li>Match consumers with lenders</li>
                      <li>Maintain platform security</li>
                      <li>Meet compliance obligations</li>
                    </ul>
                    <p>
                      We do not use sensitive personal information for unrelated purposes.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">7. Your California Privacy Rights</h3>
                    <p className="mb-3">
                      If you are a California resident, you have the right to:
                    </p>
                    
                    <div className="rights_cards">
                      <div className="right_card p-4 mb-3 bg-light-green">
                        <h5 className="mb-2">A. Right to Know</h5>
                        <p className="mb-2">Request disclosure of:</p>
                        <ul className="feature_list mb-0">
                          <li>Categories of personal information collected</li>
                          <li>Sources of personal information</li>
                          <li>Business or commercial purposes for collection</li>
                          <li>Categories of third parties with whom information is shared</li>
                        </ul>
                      </div>
                      
                      <div className="right_card p-4 mb-3 bg-light-green">
                        <h5 className="mb-2">B. Right to Delete</h5>
                        <p className="mb-0">
                          Request deletion of personal information, subject to legal exceptions.
                        </p>
                      </div>
                      
                      <div className="right_card p-4 mb-3 bg-light-green">
                        <h5 className="mb-2">C. Right to Correct</h5>
                        <p className="mb-0">
                          Request correction of inaccurate personal information.
                        </p>
                      </div>
                      
                      <div className="right_card p-4 mb-3 bg-light-green">
                        <h5 className="mb-2">D. Right to Opt Out of Sale or Sharing</h5>
                        <p className="mb-0">
                          You may opt out of the sale or sharing of your personal information at any time.
                        </p>
                      </div>
                      
                      <div className="right_card p-4 mb-3 bg-light-green">
                        <h5 className="mb-2">E. Right to Limit Use of Sensitive Personal Information</h5>
                        <p className="mb-0">
                          You may request limitations on how sensitive personal information is used.
                        </p>
                      </div>
                      
                      <div className="right_card p-4 bg-light-green">
                        <h5 className="mb-2">F. Right to Non-Discrimination</h5>
                        <p className="mb-0">
                          We will not discriminate against you for exercising your privacy rights.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">8. How to Submit a Privacy Request</h3>
                    <p className="mb-3">
                      You may submit a request by contacting us at:
                    </p>
                    <div className="contact_box p-4 bg-light-gray text-center">
                      <h5 className="mb-2">Email: contact@rapidloan247.com</h5>
                      <p className="mb-0">
                        We may verify your identity before processing your request.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">9. Authorized Agents</h3>
                    <p>
                      You may designate an authorized agent to submit a request on your behalf. Proof of authorization
                      may be required.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">10. Data Retention</h3>
                    <p className="mb-3">
                      We retain personal information only as long as necessary to:
                    </p>
                    <ul className="feature_list">
                      <li>Fulfill lead-generation purposes</li>
                      <li>Meet legal and regulatory obligations</li>
                      <li>Resolve disputes</li>
                      <li>Enforce agreements</li>
                    </ul>
                  </div>

                  {/* Section 11 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">11. Minors</h3>
                    <p>
                      Rapid Loan 24/7 does not knowingly sell or share the personal information of individuals under
                      16 years of age.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div className="california_privacy_section mb_40">
                    <h3 className="section_title mb-3">12. Updates to This Notice</h3>
                    <p>
                      We may update this California Privacy Notice from time to time. Any updates will be posted on
                      this page with a revised effective date.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div className="california_privacy_section">
                    <h3 className="section_title mb-3">13. Contact Information</h3>
                    <div className="contact_info p-4 bg-light-blue text-center">
                      <h5 className="mb-2">Rapid Loan 24/7</h5>
                      <p className="mb-1"><strong>Website:</strong> www.rapidloan247.com</p>
                      <p className="mb-0"><strong>Email:</strong> contact@rapidloan247.com</p>
                    </div>
                  </div>
                </div>

                {/* Acceptance Button */}
                <div className="california_privacy_acceptance mt_40 text-center">
                  <div className="alert_box bg-light-green p-4 mb-4">
                    <p className="mb-0">
                      This notice is provided in accordance with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
                    </p>
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="/" className="btn_style_one">
                      Return to Home
                    </Link>
                    <Link href="/privacy" className="btn_style_two">
                      View Privacy Policy
                    </Link>
                    <Link href="/terms" className="btn_style_two">
                      View Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}