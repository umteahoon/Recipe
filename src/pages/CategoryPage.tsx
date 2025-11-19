import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRecipesByCategory, Recipe } from '../data/recipes';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [recipes] = useState<Recipe[]>(getRecipesByCategory(categoryName || ''));
  const [likedRecipes, setLikedRecipes] = useState<Set<number>>(new Set());

  const handleLike = (recipeId: number) => {
    const newLikedRecipes = new Set(likedRecipes);
    if (likedRecipes.has(recipeId)) {
      newLikedRecipes.delete(recipeId);
    } else {
      newLikedRecipes.add(recipeId);
    }
    setLikedRecipes(newLikedRecipes);
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      '한식': 'fas fa-utensils',
      '양식': 'fas fa-pizza-slice',
      '일식': 'fas fa-fish',
      '중식': 'fas fa-pepper-hot',
      '베이킹': 'fas fa-bread-slice',
      '음료': 'fas fa-cocktail',
      '채식': 'fas fa-seedling',
      '간식': 'fas fa-cookie'
    };
    return icons[category] || 'fas fa-utensils';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
              <i className={getCategoryIcon(categoryName || '')} style={{ fontSize: '32px', color: '#FF9900', marginRight: '15px' }}></i>
              <h3>{categoryName} 레시피</h3>
            </div>
            <p>{categoryName} 카테고리의 맛있는 레시피들을 만나보세요</p>
          </div>
          
          {recipes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <i className="fas fa-search" style={{ fontSize: '48px', marginBottom: '20px', color: '#ddd' }}></i>
              <h3>레시피를 찾을 수 없습니다</h3>
              <p>해당 카테고리의 레시피가 아직 준비되지 않았습니다.</p>
            </div>
          ) : (
            <div className="recipe-grid">
              {recipes.map((recipe) => (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="recipe-image">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <div className="recipe-content">
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <p className="recipe-desc">{recipe.description}</p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '10px',
                      fontSize: '14px',
                      color: '#666'
                    }}>
                      <span><i className="fas fa-users"></i> {recipe.servings}인분</span>
                      <span><i className="fas fa-signal"></i> {recipe.difficulty === 'easy' ? '쉬움' : recipe.difficulty === 'medium' ? '보통' : '어려움'}</span>
                    </div>
                    <div className="recipe-meta">
                      <span className="recipe-time">
                        <i className="far fa-clock"></i> {recipe.time}
                      </span>
                      <button 
                        className={`recipe-like ${likedRecipes.has(recipe.id) ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleLike(recipe.id);
                        }}
                      >
                        <i className={likedRecipes.has(recipe.id) ? 'fas fa-heart' : 'far fa-heart'}></i> 
                        <span>{recipe.likes + (likedRecipes.has(recipe.id) ? 1 : 0)}</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;