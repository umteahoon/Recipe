import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSeasonalRecipes, Recipe } from '../data/recipes';

const SeasonalRecipes = () => {
  const [recipes] = useState<Recipe[]>(getSeasonalRecipes());
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

  const getCurrentSeason = () => {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) return '봄';
    if (month >= 6 && month <= 8) return '여름';
    if (month >= 9 && month <= 11) return '가을';
    return '겨울';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>{getCurrentSeason()} 계절 요리</h3>
            <p>계절에 어울리는 따뜻하고 맛있는 요리들을 소개합니다</p>
          </div>
          
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SeasonalRecipes;