import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  icon: string;
  href: string;
}

const Categories = () => {
  const categories: Category[] = [
    { name: "한식", icon: "fas fa-utensils", href: "/category/한식" },
    { name: "양식", icon: "fas fa-pizza-slice", href: "/category/양식" },
    { name: "일식", icon: "fas fa-fish", href: "/category/일식" },
    { name: "중식", icon: "fas fa-pepper-hot", href: "/category/중식" },
    { name: "베이킹", icon: "fas fa-bread-slice", href: "/category/베이킹" },
    { name: "음료", icon: "fas fa-cocktail", href: "/category/음료" },
    { name: "채식", icon: "fas fa-seedling", href: "/category/채식" },
    { name: "간식", icon: "fas fa-cookie", href: "/category/간식" }
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
            <Link key={index} to={category.href} className="category-item fade-in">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <span className="category-name">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;