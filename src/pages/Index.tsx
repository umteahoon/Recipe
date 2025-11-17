import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RecommendedRecipes from '../components/RecommendedRecipes';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // 스크롤 애니메이션
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
          element.classList.add('active');
        }
      });
    }
    
    // 초기 로드 시 한 번 실행
    checkFade();
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', checkFade);
    
    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* 접근성 링크 */}
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      
      <Header />
      <Hero />
      <RecommendedRecipes />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;