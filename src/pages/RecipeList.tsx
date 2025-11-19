import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { recipeData, Recipe } from '../data/recipes';

const RecipeList = () => {
  const [recipes] = useState<Recipe[]>(recipeData);
  const [likedRecipes, setLikedRecipes] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['전체', '한식', '양식', '일식', '중식', '베이킹', '음료', '채식', '간식'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === '전체' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h3>전체 레시피</h3>
            <p>다양한 카테고리의 맛있는 레시피를 찾아보세요</p>
          </div>

          {/* 검색 및 필터 */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div className="search-bar" style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                placeholder="레시피를 검색해보세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button><i className="fas fa-search"></i></button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #FF9900',
                    borderRadius: '20px',
                    background: selectedCategory === category ? '#FF9900' : 'white',
                    color: selectedCategory === category ? 'white' : '#FF9900',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="recipe-image">
                  <img src={recipe.image} alt={recipe.title} />
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

export default RecipeList;