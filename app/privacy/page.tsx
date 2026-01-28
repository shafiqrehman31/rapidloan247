import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Rapid Loan 24/7',
  description: 'Privacy policy explaining how Rapid Loan 24/7 collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
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
                <h2>Privacy Policy</h2>
                <div className="breadcrumb">
                  <Link href="/">Home</Link> 
                  <span className="breadcrumb-separator">/</span>
                  <span className="current">Privacy Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="page_content pt_120 pb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="privacy_content">
                {/* Header Section */}
                <div className="privacy_header mb_40">
                  <h1 className="mb-3">Privacy Policy</h1>
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
                <div className="privacy_intro mb_40">
                  <p>
                    Rapid Loan 24/7 ("Company," "we," "us," or "our") operates a financial lead-generation platform
                    that connects consumers seeking loan products with third-party lenders and financial service
                    providers through a real-time distribution (ping-tree) model.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, share, and protect personal information when you
                    visit www.rapidloan247.com ("Website") or submit information through our forms.
                  </p>
                  <div className="alert_box bg-light-red p-4 mt-4">
                    <h5 className="mb-2">IMPORTANT NOTICE</h5>
                    <p className="mb-0">
                      <strong>By using our services, you acknowledge and consent to the practices described in this Privacy Policy.</strong>
                    </p>
                  </div>
                </div>

                {/* Privacy Sections */}
                <div className="privacy_sections">
                  {/* Section 1 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">1. Our Role (Important Disclosure)</h3>
                    <p className="mb-3">
                      We are not a lender and do not make credit decisions.
                    </p>
                    <p className="mb-3">
                      We operate as a lead generator / marketplace that matches consumers with potential lenders and
                      financial partners.
                    </p>
                    <p className="mb-3">
                      When you submit information:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Your data may be shared with multiple lenders or buyers</li>
                      <li>Distribution occurs via automated decisioning (ping-tree technology)</li>
                      <li>Buyers may evaluate eligibility independently</li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">2. Information We Collect</h3>
                    
                    <h5 className="mb-3">A. Information You Provide</h5>
                    <p className="mb-3">
                      When you submit a loan request or inquiry, we may collect:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Mailing address</li>
                      <li>Date of birth</li>
                      <li>Loan amount requested</li>
                      <li>Employment and income details</li>
                      <li>Banking or financial indicators (as required)</li>
                      <li>Consent and authorization records</li>
                    </ul>

                    <h5 className="mb-3">B. Automatically Collected Information</h5>
                    <ul className="feature_list mb-4">
                      <li>IP address</li>
                      <li>Device and browser data</li>
                      <li>Geolocation (approximate)</li>
                      <li>Time and date stamps</li>
                      <li>Referral and affiliate source data</li>
                    </ul>

                    <h5 className="mb-3">C. Information From Third Parties</h5>
                    <p className="mb-0">
                      We may receive data from:
                    </p>
                    <ul className="feature_list">
                      <li>Affiliate publishers</li>
                      <li>Marketing partners</li>
                      <li>Data verification services</li>
                      <li>Fraud-prevention providers</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">3. How the Ping-Tree Model Uses Your Data</h3>
                    <p className="mb-3">
                      Your information may be used as follows:
                    </p>
                    <div className="process_steps mb-4">
                      <div className="process_step p-4 mb-3 bg-light-blue">
                        <h5 className="mb-2">1. Initial Evaluation (Ping)</h5>
                        <ul className="feature_list mb-0">
                          <li>Limited data is shared with multiple potential lenders</li>
                          <li>Used to determine eligibility and pricing</li>
                          <li>May occur simultaneously or sequentially</li>
                        </ul>
                      </div>
                      
                      <div className="process_step p-4 mb-3 bg-light-blue">
                        <h5 className="mb-2">2. Lead Delivery (Post)</h5>
                        <ul className="feature_list mb-0">
                          <li>Full application data is sent to one or more matched lenders</li>
                          <li>Based on eligibility, availability, and business rules</li>
                        </ul>
                      </div>
                      
                      <div className="process_step p-4 bg-light-blue">
                        <h5 className="mb-2">3. Fallback Distribution</h5>
                        <ul className="feature_list mb-0">
                          <li>If one lender declines, your information may be shared with others</li>
                          <li>Distribution may continue until a match is found or buyers are exhausted</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">4. How We Use Your Information</h3>
                    <p className="mb-3">
                      We use personal information to:
                    </p>
                    <ul className="feature_list">
                      <li>Match consumers with lenders and financial partners</li>
                      <li>Operate and optimize lead-distribution systems</li>
                      <li>Communicate with you regarding your request</li>
                      <li>Verify identity and detect fraud</li>
                      <li>Maintain compliance records</li>
                      <li>Improve platform performance</li>
                      <li>Comply with legal and regulatory obligations</li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">5. Information Sharing & Sale Disclosure</h3>
                    
                    <h5 className="mb-3">A. Lenders & Financial Buyers</h5>
                    <p className="mb-3">
                      We may share or sell your personal information to:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Banks</li>
                      <li>Licensed lenders</li>
                      <li>Loan servicers</li>
                      <li>Financial service providers</li>
                    </ul>
                    <div className="alert_box bg-light-yellow p-3 mb-4">
                      <p className="mb-0">
                        <strong>Important:</strong> This sharing may be considered a "sale" or "sharing" under certain state privacy laws.
                      </p>
                    </div>

                    <h5 className="mb-3">B. Service Providers</h5>
                    <p className="mb-0">Including:</p>
                    <ul className="feature_list mb-4">
                      <li>Lead-routing platforms</li>
                      <li>Hosting providers</li>
                      <li>Analytics services</li>
                      <li>CRM and call-tracking vendors</li>
                      <li>Compliance and audit partners</li>
                    </ul>

                    <h5 className="mb-3">C. Legal & Compliance</h5>
                    <p className="mb-0">We may disclose information to:</p>
                    <ul className="feature_list">
                      <li>Comply with law or court order</li>
                      <li>Respond to regulatory requests</li>
                      <li>Prevent fraud or abuse</li>
                      <li>Enforce agreements</li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">6. TCPA & Communication Consent</h3>
                    <p className="mb-3">
                      By submitting your information, you expressly consent to receive communications from us and our
                      partners, including:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Phone calls</li>
                      <li>Text messages (SMS)</li>
                      <li>Emails</li>
                    </ul>
                    <p className="mb-3">
                      This may include automated dialing systems or prerecorded messages, as permitted by law.
                    </p>
                    <div className="highlight_box p-4 bg-light-green">
                      <p className="mb-2"><strong>Consent:</strong></p>
                      <ul className="feature_list mb-0">
                        <li>Is not required to obtain credit</li>
                        <li>Can be revoked at any time by following opt-out instructions</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">7. Gramm-Leach-Bliley Act (GLBA)</h3>
                    <p className="mb-3">
                      As a financial lead-generation entity, we comply with the GLBA by:
                    </p>
                    <ul className="feature_list">
                      <li>Limiting access to consumer information</li>
                      <li>Implementing security safeguards</li>
                      <li>Sharing data only as permitted by law</li>
                    </ul>
                  </div>

                  {/* Section 8 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">8. Cookies & Tracking</h3>
                    <p className="mb-3">
                      We use cookies and similar technologies to:
                    </p>
                    <ul className="feature_list mb-4">
                      <li>Enable Website functionality</li>
                      <li>Track affiliate attribution</li>
                      <li>Measure performance</li>
                      <li>Detect fraud</li>
                    </ul>
                    <p className="mb-0">
                      You may disable cookies in your browser settings.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">9. Data Retention</h3>
                    <p className="mb-3">
                      We retain personal information only as long as necessary to:
                    </p>
                    <ul className="feature_list">
                      <li>Fulfill lead-generation purposes</li>
                      <li>Meet regulatory requirements</li>
                      <li>Resolve disputes</li>
                      <li>Maintain audit and compliance records</li>
                    </ul>
                  </div>

                  {/* Section 10 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">10. Your Privacy Rights (U.S.)</h3>
                    
                    <div className="rights_section mb-4">
                      <h5 className="mb-3">California Residents (CCPA/CPRA)</h5>
                      <p className="mb-3">You have the right to:</p>
                      <ul className="feature_list mb-4">
                        <li>Know what personal information we collect</li>
                        <li>Request deletion or correction</li>
                        <li>Opt out of the sale or sharing of personal information</li>
                        <li>Limit use of sensitive personal information</li>
                        <li>Not be discriminated against</li>
                      </ul>
                      <div className="opt_out_box p-4 bg-light-gray">
                        <h6 className="mb-2">Opt-Out:</h6>
                        <p className="mb-0">Email: contact@rapidloan247.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 11 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">11. Do Not Track Signals</h3>
                    <p>
                      We do not currently respond to "Do Not Track" signals.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">12. Children's Privacy</h3>
                    <p className="mb-3">
                      Our Website is intended for individuals 18 years or older.
                    </p>
                    <p>
                      We do not knowingly collect information from minors.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">13. Security Measures</h3>
                    <p className="mb-3">
                      We use reasonable safeguards including:
                    </p>
                    <ul className="feature_list">
                      <li>SSL encryption</li>
                      <li>Access controls</li>
                      <li>Secure storage systems</li>
                      <li>Regular security reviews</li>
                    </ul>
                  </div>

                  {/* Section 14 */}
                  <div className="privacy_section mb_40">
                    <h3 className="section_title mb-3">14. Policy Updates</h3>
                    <p>
                      We may update this Privacy Policy periodically. Changes will be posted on this page with a revised
                      effective date.
                    </p>
                  </div>

                  {/* Section 15 */}
                  <div className="privacy_section">
                    <h3 className="section_title mb-3">15. Contact Us</h3>
                    <div className="contact_info p-4 bg-light-gray">
                      <p className="mb-1"><strong>Rapid Loan 24/7</strong></p>
                      <p className="mb-1"><strong>Website:</strong> www.rapidloan247.com</p>
                      <p className="mb-0"><strong>Email:</strong> contact@rapidloan247.com</p>
                    </div>
                  </div>
                </div>

                {/* Acceptance Button */}
                <div className="privacy_acceptance mt_40 text-center">
                  <div className="alert_box bg-light-green p-4 mb-4">
                    <p className="mb-0">
                      By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="/" className="btn_style_one">
                      Return to Home
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