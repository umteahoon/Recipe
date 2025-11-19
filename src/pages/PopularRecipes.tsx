import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPopularRecipes, Recipe } from '../data/recipes';

const PopularRecipes = () => {
  const [recipes] = useState<Recipe[]>(getPopularRecipes());
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>인기 레시피</h3>
            <p>가장 많은 사랑을 받고 있는 레시피들을 만나보세요</p>
          </div>
          
          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="recipe-image" style={{ position: 'relative' }}>
                  <img src={recipe.image} alt={recipe.title} />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#FF9900',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    #{index + 1}
                  </div>
                </div>
                <div className="recipe-content">
                  <h4 className="recipe-title">{recipe.title}</h4>
                  <p className="recipe-desc">{recipe.description}</p>
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

export default PopularRecipes;