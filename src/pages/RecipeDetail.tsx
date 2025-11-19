import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { recipeData, Recipe } from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipeData.find(r => r.id === parseInt(id || '0'));
  const [isLiked, setIsLiked] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="recommended" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h3>레시피를 찾을 수 없습니다</h3>
              <p>요청하신 레시피가 존재하지 않습니다.</p>
              <Link to="/recipes" style={{ 
                display: 'inline-block', 
                marginTop: '20px',
                background: '#FF9900',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                레시피 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          {/* 뒤로가기 버튼 */}
          <div style={{ marginBottom: '20px' }}>
            <Link to="/recipes" style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#FF9900',
              textDecoration: 'none',
              fontSize: '16px'
            }}>
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
              레시피 목록으로 돌아가기
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '40px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            {/* 이미지 섹션 */}
            <div style={{ position: 'relative' }}>
              <img 
                src={recipe.image} 
                alt={recipe.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: recipe.category === '한식' ? '#FF9900' : 
                           recipe.category === '양식' ? '#e74c3c' :
                           recipe.category === '일식' ? '#2ecc71' :
                           recipe.category === '중식' ? '#f39c12' :
                           recipe.category === '베이킹' ? '#9b59b6' :
                           recipe.category === '음료' ? '#3498db' :
                           recipe.category === '채식' ? '#27ae60' : '#95a5a6',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {recipe.category}
              </div>
            </div>

            {/* 정보 섹션 */}
            <div style={{ padding: '30px' }}>
              <h1 style={{ 
                fontSize: '28px', 
                fontWeight: '700', 
                marginBottom: '15px',
                color: '#333'
              }}>
                {recipe.title}
              </h1>
              
              <p style={{ 
                color: '#666', 
                fontSize: '16px', 
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                {recipe.description}
              </p>

              {/* 메타 정보 */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '20px',
                marginBottom: '30px',
                padding: '20px',
                background: '#f8f9fa',
                borderRadius: '10px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <i className="far fa-clock" style={{ fontSize: '24px', color: '#FF9900', marginBottom: '8px' }}></i>
                  <div style={{ fontSize: '14px', color: '#666' }}>조리시간</div>
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>{recipe.time}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <i className="fas fa-users" style={{ fontSize: '24px', color: '#FF9900', marginBottom: '8px' }}></i>
                  <div style={{ fontSize: '14px', color: '#666' }}>인분</div>
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>{recipe.servings}인분</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <i className="fas fa-signal" style={{ fontSize: '24px', color: '#FF9900', marginBottom: '8px' }}></i>
                  <div style={{ fontSize: '14px', color: '#666' }}>난이도</div>
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>
                    {recipe.difficulty === 'easy' ? '쉬움' : recipe.difficulty === 'medium' ? '보통' : '어려움'}
                  </div>
                </div>
              </div>

              {/* 좋아요 버튼 */}
              <button 
                onClick={handleLike}
                style={{
                  width: '100%',
                  background: isLiked ? '#FF9900' : 'white',
                  color: isLiked ? 'white' : '#FF9900',
                  border: '2px solid #FF9900',
                  padding: '12px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <i className={isLiked ? 'fas fa-heart' : 'far fa-heart'}></i>
                {isLiked ? '좋아요 취소' : '좋아요'} ({recipe.likes + (isLiked ? 1 : 0)})
              </button>
            </div>
          </div>

          {/* 재료 및 조리법 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '40px', 
            maxWidth: '1000px', 
            margin: '40px auto 0'
          }}>
            {/* 재료 */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                marginBottom: '20px',
                color: '#333',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-list-ul" style={{ marginRight: '10px', color: '#FF9900' }}></i>
                재료
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} style={{
                    padding: '10px 0',
                    borderBottom: index < recipe.ingredients.length - 1 ? '1px solid #eee' : 'none',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <i className="fas fa-check" style={{ color: '#FF9900', marginRight: '10px', fontSize: '12px' }}></i>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* 조리법 */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                marginBottom: '20px',
                color: '#333',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-utensils" style={{ marginRight: '10px', color: '#FF9900' }}></i>
                조리법
              </h3>
              <ol style={{ listStyle: 'none', padding: 0 }}>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} style={{
                    padding: '15px 0',
                    borderBottom: index < recipe.instructions.length - 1 ? '1px solid #eee' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      background: '#FF9900',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginRight: '15px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ lineHeight: '1.6' }}>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;