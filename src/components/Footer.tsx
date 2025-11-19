import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>레시피연구소</h2>
            <p>언제 어디서나 맛있는 요리를 쉽게 만들 수 있도록 돕는 레시피 플랫폼입니다. 초보자부터 전문가까지 모두가 즐길 수 있는 요리 세계로 여러분을 초대합니다.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>사이트 맵</h3>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/recipes">레시피 목록</Link></li>
              <li><Link to="/popular">인기 레시피</Link></li>
              <li><Link to="/seasonal">계절별 요리</Link></li>
              <li><Link to="/community">커뮤니티</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>고객 지원</h3>
            <ul>
              <li><Link to="/faq">자주 묻는 질문</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
              <li><Link to="/terms">이용약관</Link></li>
              <li><Link to="/privacy">개인정보 처리방침</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>연락처</h3>
            <ul>
              <li>이메일: info@recipelab.kr</li>
              <li>전화번호: 02-123-4567</li>
              <li>주소: 서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2023 레시피연구소 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;