'use client';

import { useState, useEffect, useCallback } from 'react';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, []);

  const toggleDropdown = useCallback((index: string) => {
    setActiveDropdown(prev => prev === index ? null : index);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((index: string) => {
    setActiveSubmenu(prev => prev === index ? null : index);
  }, []);

  useEffect(() => {
    // Handle body scroll
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    // Handle click outside (for backdrop)
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuBackdrop = document.querySelector('.menu-backdrop');
      
      if (mobileMenu && menuBackdrop && e.target === menuBackdrop) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return {
    isMobileMenuOpen,
    activeDropdown,
    activeSubmenu,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    toggleSubmenu
  };
};