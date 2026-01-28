import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions - Rapid Loan 24/7',
  description: 'Terms and conditions of use for Rapid Loan 24/7 services and website.',
};

export default function TermsPage() {
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
                <h2>Terms & Conditions</h2>
                <div className="breadcrumb">
                  <Link href="/">Home</Link> 
                  <span className="breadcrumb-separator">/</span>
                  <span className="current">Terms & Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="page_content pt_120 pb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms_content">
                {/* Header Section */}
                <div className="terms_header mb_40">
                  <h1 className="mb-3">Terms and Conditions of Use</h1>
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
                <div className="terms_intro mb_40">
                  <p>
                    RapidLoan247.com and its owner and operator ("Rapid Loan 24/7," "we," "us," or "our")
                    provide loan referral and lead-generation services (described below), related content, and
                    technology through our website located at www.rapidloan247.com (the "Site") and any related
                    applications, tools, features, or technologies (collectively, the "Service").
                  </p>
                  <p>
                    By accessing, browsing, or using any part of the Service, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and Conditions of Use ("Terms").
                  </p>
                  <div className="alert_box bg-light-red p-4 mt-4">
                    <h5 className="mb-2">IMPORTANT NOTICE</h5>
                    <p className="mb-0">
                      <strong>If you do not agree to these Terms, you must not use the Service.</strong>
                    </p>
                  </div>
                </div>

                {/* Arbitration Notice */}
                <div className="terms_arbitration mb_40">
                  <h4 className="section_title mb-3">IMPORTANT NOTICE REGARDING ARBITRATION</h4>
                  <div className="highlight_box p-4 bg-light-blue">
                    <p className="mb-0">
                      <strong>PLEASE READ THESE TERMS CAREFULLY.</strong>
                      They include a binding arbitration agreement, a class-action waiver, and limitations on your legal
                      rights. By using the Service, you agree that disputes will be resolved individually through
                      arbitration, not in court, and not as part of a class action.
                    </p>
                  </div>
                </div>

                {/* Terms Sections */}
                <div className="terms_sections">
                  {/* Section 1 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">1. Loan Referral & Lead Generation Service</h3>
                    <p className="mb-3">
                      Rapid Loan 24/7 operates an online loan referral and lead-distribution platform that connects
                      consumers with third-party lenders, lender networks, and financial service providers ("Lender
                      Partners").
                    </p>
                    <p className="mb-3">
                      To use the Service, you must complete an online request form ("Request Form") that may require
                      personal information, including but not limited to:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Name</li>
                      <li>Address</li>
                      <li>Phone number</li>
                      <li>Email address</li>
                      <li>Employment and income information</li>
                      <li>Banking or financial details</li>
                      <li>Social Security number (where required by lenders)</li>
                    </ul>
                    <p>
                      Our <Link href="/privacy">Privacy Policy</Link> governs how we collect and use this information and is incorporated into these
                      Terms by reference.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">2. No Lending or Credit Decisions</h3>
                    <p className="mb-3">
                      Rapid Loan 24/7 is not a lender, does not issue loans, and does not make credit decisions.
                    </p>
                    <p className="mb-3">
                      We do not guarantee:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>That you will receive a loan offer</li>
                      <li>That you will be matched with a lender</li>
                      <li>Any specific loan amount, rate, fee, or term</li>
                    </ul>
                    <p>
                      All lending decisions are made solely by Lender Partners.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">3. Information Sharing & Contact Consent</h3>
                    <p className="mb-3">
                      By submitting a Request Form, you:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Authorize Rapid Loan 24/7 to share your information with multiple Lender Partners</li>
                      <li>Acknowledge that you are requesting loan offers from third parties</li>
                      <li>Agree that Rapid Loan 24/7 and Lender Partners may contact you via:</li>
                    </ul>
                    <div className="ml-4 mb-3">
                      <ul className="feature_list">
                        <li>Phone calls</li>
                        <li>Text messages (SMS)</li>
                        <li>Emails</li>
                        <li>Automated dialing systems or prerecorded messages (where permitted by law)</li>
                      </ul>
                    </div>
                    <p>
                      Consent is not required to purchase goods or services.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">4. Credit Checks</h3>
                    <p className="mb-3">
                      Lender Partners may review your information in real time and may perform:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Soft credit checks (which do not affect credit scores), or</li>
                      <li>Hard credit inquiries (which may affect your credit score)</li>
                    </ul>
                    <p className="mb-3">
                      These checks may be conducted through:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Experian</li>
                      <li>Equifax</li>
                      <li>TransUnion</li>
                      <li>Alternative credit bureaus or data providers (e.g., DataX, MicroBilt, Teletrack)</li>
                    </ul>
                    <p>
                      By submitting a Request Form, you authorize such reviews.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">5. Redirection to Lender Websites</h3>
                    <p className="mb-3">
                      If a Lender Partner determines that your information meets its criteria, you may be redirected to
                      the lender's website.
                    </p>
                    <p className="mb-3">
                      Once redirected:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Rapid Loan 24/7 is no longer involved</li>
                      <li>The lender's own terms and privacy policies apply</li>
                      <li>Rapid Loan 24/7 is not responsible for lender actions or decisions</li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">6. Electronic Disclosures & E-Sign Consent</h3>
                    <p className="mb-3">
                      By using the Service, you consent to receive:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Electronic disclosures</li>
                      <li>Notices</li>
                      <li>Agreements</li>
                      <li>Communications</li>
                    </ul>
                    <p className="mb-3">
                      Lender Partners may require electronic signatures, which are legally binding and equivalent to
                      handwritten signatures.
                    </p>
                    <p>
                      You may withdraw electronic consent directly with the lender, though doing so may affect your
                      ability to obtain a loan.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">7. Accuracy of Information</h3>
                    <p className="mb-3">
                      You represent that all information you submit is accurate, current, and truthful.
                    </p>
                    <p className="mb-3">
                      Providing false or misleading information may result in:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Rejection of your request</li>
                      <li>Suspension or termination of access to the Service</li>
                    </ul>
                  </div>

                  {/* Section 8 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">8. Changes to the Service</h3>
                    <p className="mb-3">
                      Rapid Loan 24/7 may modify, suspend, or discontinue any part of the Service at any time without
                      notice.
                    </p>
                    <p>
                      We are not responsible for delays or failures caused by:
                    </p>
                    <ul className="feature_list">
                      <li>Incorrect user information</li>
                      <li>Internet or system issues beyond our control</li>
                    </ul>
                  </div>

                  {/* Section 9 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">9. Disclaimers</h3>
                    <p className="mb-3">
                      <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."</strong>
                    </p>
                    <p className="mb-3">
                      Rapid Loan 24/7 DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Merchantability</li>
                      <li>Fitness for a particular purpose</li>
                      <li>Non-infringement</li>
                    </ul>
                    <p>
                      USE OF THE SERVICE IS AT YOUR OWN RISK.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">10. Limitation of Liability</h3>
                    <p className="mb-3">
                      To the maximum extent permitted by law, Rapid Loan 24/7, its partners, affiliates, and service
                      providers are not liable for:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>Indirect or consequential damages</li>
                      <li>Credit decisions or lender actions</li>
                      <li>Loss of data or business</li>
                      <li>Unauthorized access beyond reasonable security measures</li>
                    </ul>
                    <p>
                      Some states may not allow these limitations; rights may vary.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">11. Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Rapid Loan 24/7 and its partners from any claims,
                      damages, or expenses arising from:
                    </p>
                    <ul className="feature_list">
                      <li>Your use of the Service</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any law or third-party rights</li>
                    </ul>
                  </div>

                  {/* Section 12 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">12. Third-Party Links</h3>
                    <p>
                      The Service may include links to third-party websites.
                      Rapid Loan 24/7 does not control or endorse third-party content or services.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">13. Binding Arbitration & Class Action Waiver</h3>
                    <p className="mb-3">
                      Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively
                      through binding arbitration, governed by the Federal Arbitration Act, administered by the
                      American Arbitration Association (AAA).
                    </p>
                    <p className="mb-3">
                      You agree:
                    </p>
                    <ul className="feature_list mb-3">
                      <li>No class actions</li>
                      <li>No representative claims</li>
                      <li>Arbitration on an individual basis only</li>
                    </ul>
                    <p>
                      You may pursue qualifying claims in small-claims court.
                    </p>
                  </div>

                  {/* Section 14 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">14. Governing Law</h3>
                    <p>
                      These Terms are governed by the laws of the United States and the applicable state, without
                      regard to conflict-of-law principles.
                    </p>
                  </div>

                  {/* Section 15 */}
                  <div className="terms_section mb_40">
                    <h3 className="section_title mb-3">15. Changes to These Terms</h3>
                    <p>
                      We may update these Terms at any time by posting changes on the Site.
                      Continued use of the Service constitutes acceptance of the revised Terms.
                    </p>
                  </div>

                  {/* Section 16 */}
                  <div className="terms_section">
                    <h3 className="section_title mb-3">16. Contact Information</h3>
                    <div className="contact_info p-4 bg-light-gray">
                      <p className="mb-1"><strong>Rapid Loan 24/7</strong></p>
                      <p className="mb-1"><strong>Website:</strong> www.rapidloan247.com</p>
                      <p className="mb-0"><strong>Email:</strong> contact@rapidloan247.com</p>
                    </div>
                  </div>
                </div>

                {/* Acceptance Button */}
                <div className="terms_acceptance mt_40 text-center">
                  <div className="alert_box bg-light-green p-4 mb-4">
                    <p className="mb-0">
                      By using our Service, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="/" className="btn_style_one">
                      Return to Home
                    </Link>
                    <Link href="/privacy" className="btn_style_two">
                      View Privacy Policy
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