'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const bodyLockRef = useRef(false);

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

  // Initialize component
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
        setIsSticky(true);
      } else {
        setScrolled(false);
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset mobile menu on route change
  useEffect(() => {
    if (isMounted) {
      closeMobileMenu();
    }
  }, [pathname, isMounted]);

  // Handle body overflow locking
  useEffect(() => {
    if (!isMounted) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      bodyLockRef.current = true;
    } else {
      // Only unlock if we previously locked it
      if (bodyLockRef.current) {
        document.body.style.overflow = 'auto';
        bodyLockRef.current = false;
      }
    }

    return () => {
      if (bodyLockRef.current) {
        document.body.style.overflow = 'auto';
        bodyLockRef.current = false;
      }
    };
  }, [isMobileMenuOpen, isMounted]);

  // Force close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth > 991 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, isMounted]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      bodyLockRef.current = false;
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    // Only update if menu is actually open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent hydration mismatch by rendering nothing on server
  if (!isMounted) {
    return (
      <header className="header">
        <div className="main_header">
          <div className="container">
            <div className="main_header_inner">
              {/* Skeleton header for SSR */}
              <div className="main_header_logo">
                <div className="logo-text">
                  <span className="logo-top">SPEEDY</span>
                  <span className="logo-bottom">
                    <span className="loan-text">LOAN</span>
                    <span className="hours-text">24/7</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Main Header - Single header that changes on scroll */}
      <div className={`main_header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="main_header_inner">
            <div className="main_header_logo">
              <Link href="/" onClick={closeMobileMenu}>
                <div className="logo-text">
                  <span className="logo-top">SPEEDY</span>
                  <span className="logo-bottom">
                    <span className="loan-text">LOAN</span>
                    <span className="hours-text">24/7</span>
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="main_header_menu menu_area">
              {/* Mobile Navigation Toggler */}
              <button 
                className="mobile-nav-toggler" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="menu-bar">
                  <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
              </button>
              
              {/* Desktop Navigation */}
              <nav className="main-menu">
                <ul className="navigation">
                  {menuItems.map((item, index) => (
                    <li key={index} className={isMenuItemActive(item.href) ? 'active' : ''}>
                      <Link 
                        href={item.href}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="header_right_content">
              <div className="link-btn">
                <Link href="/contact" className="btn_style_one" onClick={closeMobileMenu}>
                  Get Loan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div 
          className="menu-overlay" 
          onClick={closeMobileMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && closeMobileMenu()}
        ></div>
        <div className="menu-container">
          <div className="menu-header">
            <div className="mobile-logo">
              <Link href="/" onClick={closeMobileMenu}>
                <div className="logo-text">
                  <span className="logo-top">SPEEDY</span>
                  <span className="logo-bottom">
                    <span className="loan-text">LOAN</span>
                    <span className="hours-text">24/7</span>
                  </span>
                </div>
              </Link>
            </div>
            <button 
              className="menu-close-btn" 
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="menu-content">
            <nav className="mobile-nav" aria-label="Mobile navigation">
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
                  <span>3680 Wilshire Blvd Ste P04 Los Angeles, CA 90010, USA</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-phone"></i>
                  <Link href="tel:+8801682648101" onClick={closeMobileMenu}>
                    +88 01682648101
                  </Link>
                </li>
                <li className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <Link href="mailto:contact@speedyloan247.com" onClick={closeMobileMenu}>
                    contact@speedyloan247.com
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