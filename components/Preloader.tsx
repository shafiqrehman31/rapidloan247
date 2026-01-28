'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const letters = ['R', 'a', 'p', 'i', 'd', 'l', 'o', 'a', 'n', '2', '4', '/', '7'];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 2 seconds total

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      window.addEventListener('load', handleLoadComplete);
    }

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoadComplete);
    };
  }, []);

  const handleLoadComplete = () => {
    // Ensure minimum 1.5 seconds of loading animation for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handlePreloaderClose = () => {
    setIsLoading(false);
  };

  if (!isLoading) return null;

  return (
    <div className={`loader-wrap ${!isLoading ? 'loaded' : ''}`}>
      <div className="preloader">
        <div className="preloader-close" onClick={handlePreloaderClose}>x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            {/* Spinner */}
            <div className="spinner">
              <div className="spinner-circle"></div>
            </div>
            
            {/* Loading Progress Bar */}
            <div className="loading-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <div className="progress-text">{progress}%</div>
            </div>
            
            {/* Animated Letters */}
            <div className="txt-loading">
              {letters.map((letter, index) => (
                <span 
                  key={index} 
                  data-text-preloader={letter} 
                  className="letters-loading"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: progress > (index + 1) * 12.5 ? 1 : 0.3
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            
            {/* Loading Message */}
            <div className="loading-message">
              <p>Loading RapidLoan24...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}