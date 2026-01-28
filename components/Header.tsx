'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      href: '/',
     
    },
    {
      title: 'About Us',
      href: '/about',
    },
    
    {
      title: 'FAQ',
      href: '/faq',
    },
    {
      title: 'Contact Us',
      href: '/contact',
    },
  ];

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    setActiveMobileDropdown(null);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileDropdown = (itemKey: string) => {
    if (activeMobileDropdown === itemKey) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(itemKey);
      setActiveMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (submenuKey: string) => {
    if (activeMobileSubmenu === submenuKey) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(submenuKey);
    }
  };

  // Render desktop menu
  const renderDesktopMenu = () => (
    <ul className="navigation">
      {menuItems.map((item, index) => (
        <li 
          key={index} 
          className={`${item.dropdown ? 'dropdown ' : ''}${index === 0 ? ' active' : ''}`}
        >
          <Link href={item.href}>{item.title}</Link>
          {item.dropdown && (
            <ul>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex} className={subItem.submenu ? 'dropdown' : ''}>
                  {subItem.submenu ? (
                    <>
                      <a href={subItem.href}>{subItem.title}</a>
                      <ul>
                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                          <li key={nestedIndex}>
                            <a href={nestedItem.href}>{nestedItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={subItem.href}>{subItem.title}</a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  // Render mobile menu
  const renderMobileMenu = () => (
    <ul className="mobile-navigation">
      {menuItems.map((item, index) => {
        const itemKey = `mobile-menu-${index}`;
        const isDropdownActive = activeMobileDropdown === itemKey;
        
        return (
          <li 
            key={index} 
            className={`mobile-menu-item ${item.dropdown ? 'has-dropdown ' : ''}${isDropdownActive ? 'active' : ''}`}
          >
            {item.dropdown ? (
              <div 
                className="mobile-menu-link dropdown-trigger"
                onClick={() => toggleMobileDropdown(itemKey)}
              >
                <span>{item.title}</span>
                <span className="dropdown-arrow">
                  <i className={`fas fa-chevron-${isDropdownActive ? 'up' : 'down'}`}></i>
                </span>
              </div>
            ) : (
              <Link 
                href={item.href} 
                className="mobile-menu-link"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            )}
            
            {item.dropdown && isDropdownActive && (
              <ul className="mobile-dropdown">
                {item.dropdown.map((subItem, subIndex) => {
                  const submenuKey = `${itemKey}-${subIndex}`;
                  const isSubmenuActive = activeMobileSubmenu === submenuKey;
                  
                  return (
                    <li 
                      key={subIndex} 
                      className={`mobile-dropdown-item ${subItem.submenu ? 'has-submenu ' : ''}${isSubmenuActive ? 'active' : ''}`}
                    >
                      {subItem.submenu ? (
                        <>
                          <div 
                            className="mobile-dropdown-link submenu-trigger"
                            onClick={() => toggleMobileSubmenu(submenuKey)}
                          >
                            <span>{subItem.title}</span>
                            <span className="submenu-arrow">
                              <i className={`fas fa-chevron-${isSubmenuActive ? 'up' : 'right'}`}></i>
                            </span>
                          </div>
                          
                          {isSubmenuActive && subItem.submenu && (
                            <ul className="mobile-submenu">
                              {subItem.submenu.map((nestedItem, nestedIndex) => (
                                <li key={nestedIndex} className="mobile-submenu-item">
                                  <Link 
                                    href={nestedItem.href} 
                                    className="mobile-submenu-link"
                                    onClick={closeMobileMenu}
                                  >
                                    {nestedItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link 
                          href={subItem.href} 
                          className="mobile-dropdown-link"
                          onClick={closeMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <header className="header">
        {/* Main Header */}
        <div className={`main_header ${isSticky ? 'hidden' : ''}`}>
          <div className="container">
            <div className="main_header_inner">
              <div className="main_header_logo">
                <figure>
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Company Logo" />
                  </Link>
                </figure>
              </div>
              <div className="main_header_menu menu_area">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <div className="menu-bar">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
                <nav className="main-menu">
                  <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                    {renderDesktopMenu()}
                  </div>
                </nav>
              </div>
              <div className="header_right_content">
                <div className="link-btn">
                  <Link href="#" className="btn_style_one">Get Loan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky_header ${isSticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="main_header_inner">
              <div className="main_header_logo">
                <figure>
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Company Logo" />
                  </Link>
                </figure>
              </div>
              <div className="main_header_menu menu_area">
                <nav className="main-menu">
                  <div className="collapse navbar-collapse show">
                    {renderDesktopMenu()}
                  </div>
                </nav>
              </div>
              <div className="header_right_content">

                <div className="link-btn">
                  <Link href="#" className="btn_style_one">Get Loan</Link>
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
                  <img src="/assets/images/mobile-logo.png" alt="Mobile Logo" />
                </Link>
              </div>
              <button className="menu-close-btn" onClick={closeMobileMenu}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="menu-content">
              <nav className="mobile-nav">
                {renderMobileMenu()}
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
                    <Link href="mailto:info@example.com" onClick={closeMobileMenu}>
                      info@example.com
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
    </>
  );
}