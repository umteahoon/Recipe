import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 기능 구현
    console.log('검색어:', searchQuery);
  };

  return (
    <section className="hero">
      <div className="container">
        <h2>맛있는 레시피를 발견하세요</h2>
        <p>집에서도 쉽게 따라 할 수 있는 다양한 요리 레시피를 제공합니다</p>
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="찾고 싶은 레시피를 검색해보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i> 검색
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;