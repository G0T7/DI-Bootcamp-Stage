import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <header className="header bg-danger text-white text-center py-5">
      <h1>Company</h1>
      <p>We specialise in something ...</p>
    </header>
  );
}

export default Header;
