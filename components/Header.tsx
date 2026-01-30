'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  href: string;
  dropdown?: any[];
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about-us' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact Us', href: '/contact' },
  ];

  const isMenuItemActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index.toString() ? null : index.toString());
  };

  return (
    <header className="header">
      {/* Main Header - Always visible when not sticky */}
      <div className={`main_header ${isSticky ? 'hidden' : ''}`}>
        <div className="container">
          <div className="main_header_inner">
            <div className="main_header_logo">
              <Link href="/">
                <img src="/assets/images/speedy-logo.png" alt="Company Logo" />
              </Link>
            </div>
            <div className="main_header_menu menu_area">
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <div className="menu-bar">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
              <nav className="main-menu">
                <ul className="navigation">
                  {menuItems.map((item, index) => (
                    <li key={index} className={isMenuItemActive(item.href) ? 'active' : ''}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="header_right_content">
              <div className="link-btn">
                <Link href="/contact" className="btn_style_one">Get Loan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header - Only shows when scrolling */}
      <div className={`sticky_header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="main_header_inner">
            <div className="main_header_logo">
              <Link href="/">
                <img src="/assets/images/speedy-logo.png" alt="Company Logo" />
              </Link>
            </div>
            <div className="main_header_menu menu_area">
              <nav className="main-menu">
                <ul className="navigation">
                  {menuItems.map((item, index) => (
                    <li key={index} className={isMenuItemActive(item.href) ? 'active' : ''}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="header_right_content">
              <div className="link-btn">
                <Link href="/contact" className="btn_style_one">Get Loan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-overlay" onClick={closeMobileMenu}></div>
        <div className="menu-container">
          <div className="menu-header">
            <div className="mobile-logo">
              <Link href="/" onClick={closeMobileMenu}>
                <img src="/assets/images/speedy-logo.png" alt="Mobile Logo" />
              </Link>
            </div>
            <button className="menu-close-btn" onClick={closeMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="menu-content">
            <nav className="mobile-nav">
              <ul className="mobile-navigation">
                {menuItems.map((item, index) => {
                  const isActive = isMenuItemActive(item.href);
                  return (
                    <li key={index} className={`mobile-menu-item ${isActive ? 'current' : ''}`}>
                      <Link 
                        href={item.href} 
                        className={`mobile-menu-link ${isActive ? 'current' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            <div className="mobile-contact-info">
              <h4 className="contact-title">Contact Info</h4>
              <ul className="contact-list">
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Chicago 12, Melborne City, USA</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-phone"></i>
                  <Link href="tel:+8801682648101" onClick={closeMobileMenu}>
                    +88 01682648101
                  </Link>
                </li>
                <li className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <Link href="mailto:contact@rapidloan247.com" onClick={closeMobileMenu}>
                    contact@rapidloan247.com
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mobile-social-links">
              <h4 className="social-title">Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <Link href="#" onClick={closeMobileMenu}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={closeMobileMenu}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={closeMobileMenu}>
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={closeMobileMenu}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={closeMobileMenu}>
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}