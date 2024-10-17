import React, { useEffect, useState } from 'react';
import Dropdown from '../tools/Dropdown';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['myNavbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  const options = [
    { label: 'About us', href: '/about' },
    { label: 'News', href: '#' },
    { label: 'Schedule', href: '#' },
    { label: 'Contact', href: '#' },
    // { label: 'Podcast', href: '#' }
  ];

  return (
    <div className={navbarClasses.join(' ')}>
      <div className="navLogo">
        <a href="/">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="menu">
        <Dropdown options={options} />
      </div>
      <div className="navitemsSec">
        <ul>
        {
          options.map((items, index)=>(
            <li key={index}>
            <a href={items.href}>{items.label}</a>
            </li>
          ))
        }
        </ul>

        
      </div>
    </div>
  );
}

export default Nav;
