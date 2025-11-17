import React from 'react';

interface Category {
  name: string;
  icon: string;
  href: string;
}

const Categories = () => {
  const categories: Category[] = [
    { name: "한식", icon: "fas fa-utensils", href: "#" },
    { name: "양식", icon: "fas fa-pizza-slice", href: "#" },
    { name: "일식", icon: "fas fa-fish", href: "#" },
    { name: "중식", icon: "fas fa-pepper-hot", href: "#" },
    { name: "베이킹", icon: "fas fa-bread-slice", href: "#" },
    { name: "음료", icon: "fas fa-cocktail", href: "#" },
    { name: "채식", icon: "fas fa-seedling", href: "#" },
    { name: "간식", icon: "fas fa-cookie", href: "#" }
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title fade-in">
          <h3>요리 카테고리</h3>
          <p>다양한 종류의 요리를 탐색해보세요</p>
        </div>
        
        <div className="category-list">
          {categories.map((category, index) => (
            <a key={index} href={category.href} className="category-item fade-in">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <span className="category-name">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;