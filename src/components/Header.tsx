import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/images/recipe_logo_20251117_084240.png" alt="레시피연구소 로고" />
          <h1>레시피연구소</h1>
        </a>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="active"><a href="#">홈</a></li>
          <li><a href="#">레시피 목록</a></li>
          <li><a href="#">인기 레시피</a></li>
          <li><a href="#">계절별 요리</a></li>
          <li><a href="#">커뮤니티</a></li>
          {/* 모바일용 로그인/회원가입 버튼 */}
          <div className="login-items">
            <a href="#">로그인</a>
            <a href="#" className="btn-signup">회원가입</a>
          </div>
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