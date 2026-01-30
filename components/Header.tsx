'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MenuItem {
  title: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header_inner">
          {/* Logo */}
          <div className="header_logo">
            <Link href="/" className="logo">
              <div className="logo_text">
                <span className="logo_top">SPEEDY</span>
                <span className="logo_bottom">
                  <span className="loan_text">LOAN</span>
                  <span className="hours_text">24/7</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop_nav">
            <ul className="nav_menu">
              {menuItems.map((item, index) => (
                <li key={index} className={`nav_item ${isMenuItemActive(item.href) ? 'active' : ''}`}>
                  <Link href={item.href} className="nav_link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header_cta">
            <Link href="/contact" className="btn_primary">
              Get Loan
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile_menu_toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile_menu_overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile_menu_header">
          <div className="mobile_logo">
            <Link href="/" onClick={closeMobileMenu}>
              <div className="logo_text">
                <span className="logo_top">SPEEDY</span>
                <span className="logo_bottom">
                  <span className="loan_text">LOAN</span>
                  <span className="hours_text">24/7</span>
                </span>
              </div>
            </Link>
          </div>
          <button className="mobile_menu_close" onClick={closeMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="mobile_nav">
          <ul className="mobile_nav_menu">
            {menuItems.map((item, index) => (
              <li key={index} className={`mobile_nav_item ${isMenuItemActive(item.href) ? 'active' : ''}`}>
                <Link 
                  href={item.href} 
                  className="mobile_nav_link"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile_cta">
          <Link href="/contact" className="btn_primary" onClick={closeMobileMenu}>
            Get Loan
          </Link>
        </div>
      </div>
    </header>
  );
}