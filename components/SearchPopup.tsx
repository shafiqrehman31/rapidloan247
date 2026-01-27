'use client';

import { useState } from 'react';

export default function SearchPopup() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted');
    toggleSearch();
  };

  return (
    <>
      <div id="search-popup" className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
        <div className="popup-inner">
          <div className="upper-box">
            <figure className="logo-box">
              <a href="/">
                <img src="/assets/images/logo.png" alt="Financer Logo" />
              </a>
            </figure>
            <div className="close-search" onClick={toggleSearch}>
              <span className="fa-solid fa-xmark"></span>
            </div>
          </div>
          <div className="overlay-layer" onClick={toggleSearch}></div>
          <div className="container">
            <div className="search-form">
              <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="form-group">
                  <fieldset>
                    <input 
                      type="search" 
                      className="form-control" 
                      name="search-input" 
                      placeholder="Type your keyword and hit" 
                      required 
                    />
                    <button type="submit">
                      <i className="icon-50"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}