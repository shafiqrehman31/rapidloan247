'use client';

import { useState, useEffect, useCallback } from 'react';

export const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsSticky(true);
      setScrolled(true);
    } else {
      setIsSticky(false);
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { isSticky, scrolled };
};