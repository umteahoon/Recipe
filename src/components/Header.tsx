import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/recipe_logo_20251117_084240.png" alt="레시피연구소 로고" />
          <h1>레시피연구소</h1>
        </Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/recipes">레시피 목록</Link></li>
          <li><Link to="/popular">인기 레시피</Link></li>
          <li><Link to="/seasonal">계절별 요리</Link></li>
          <li><Link to="/community">커뮤니티</Link></li>
        </ul>
        
        <div className="login-section">
          <a href="#">로그인</a>
          <a href="#" className="btn-signup">회원가입</a>
        </div>
      </div>
    </header>
  );
};

export default Header;