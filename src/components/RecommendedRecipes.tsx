import React, { useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  likes: number;
}

const RecommendedRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "얼큰한 김치찌개",
      description: "묵은지와 삼겹살로 만드는 깊고 풍부한 맛의 김치찌개 레시피입니다. 추운 날씨에 안성맞춤!",
      image: "/images/kimchi_stew_20251117_084238.png",
      time: "30분",
      likes: 36
    },
    {
      id: 2,
      title: "영양 가득 비빔밥",
      description: "각종 나물과 계란 프라이를 곁들인 건강한 비빔밥 만드는 법을 소개합니다.",
      image: "/images/bibimbap_20251117_084239.png",
      time: "45분",
      likes: 29
    },
    {
      id: 3,
      title: "명절 필수 잡채",
      description: "고소한 참기름 향과 각종 채소를 듬뿍 넣은 특별한 잡채 레시피를 만나보세요.",
      image: "/images/japchae_20251117_084240.png",
      time: "35분",
      likes: 22
    },
    {
      id: 4,
      title: "양념이 쏙쏙 배어든 불고기",
      description: "특제 양념으로 재워 부드럽고 달콤한 맛이 일품인 한국식 불고기 요리법입니다.",
      image: "/images/bulgogi_20251117_084239.png",
      time: "40분",
      likes: 18
    }
  ]);

  const [likedRecipes, setLikedRecipes] = useState<Set<number>>(new Set());

  const handleLike = (recipeId: number) => {
    const newLikedRecipes = new Set(likedRecipes);
    const newRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        if (likedRecipes.has(recipeId)) {
          newLikedRecipes.delete(recipeId);
          return { ...recipe, likes: recipe.likes - 1 };
        } else {
          newLikedRecipes.add(recipeId);
          return { ...recipe, likes: recipe.likes + 1 };
        }
      }
      return recipe;
    });
    
    setLikedRecipes(newLikedRecipes);
    setRecipes(newRecipes);
  };

  return (
    <section className="recommended" id="main-content">
      <div className="container">
        <div className="section-title fade-in">
          <h3>오늘의 추천 레시피</h3>
          <p>이번 주 가장 많이 조회된 인기 레시피입니다</p>
        </div>
        
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card fade-in">
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
                    onClick={() => handleLike(recipe.id)}
                  >
                    <i className={likedRecipes.has(recipe.id) ? 'fas fa-heart' : 'far fa-heart'}></i> 
                    <span>{recipe.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedRecipes;