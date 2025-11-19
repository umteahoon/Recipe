import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  category: string;
}

const Community = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "김치찌개 맛있게 끓이는 비법 공유합니다!",
      author: "요리왕김치",
      date: "2023-11-15",
      content: "묵은지를 사용하면 정말 깊은 맛이 나요. 삼겹살과 함께 볶아주는 것이 포인트입니다.",
      likes: 24,
      comments: 8,
      category: "한식"
    },
    {
      id: 2,
      title: "파스타 면 삶는 완벽한 방법",
      author: "이탈리아요리사",
      date: "2023-11-14",
      content: "소금물에 면을 넣고 알덴테로 삶는 것이 중요해요. 시간을 정확히 지켜주세요!",
      likes: 18,
      comments: 12,
      category: "양식"
    },
    {
      id: 3,
      title: "집에서 만드는 초콜릿 케이크 성공기",
      author: "베이킹러버",
      date: "2023-11-13",
      content: "오븐 온도와 시간이 정말 중요하더라구요. 여러 번 실패 끝에 성공했습니다!",
      likes: 31,
      comments: 15,
      category: "베이킹"
    },
    {
      id: 4,
      title: "스시 만들기 도전해봤어요",
      author: "스시초보",
      date: "2023-11-12",
      content: "생각보다 어렵네요. 밥 온도 맞추는 게 가장 힘들었습니다. 연습이 필요해요!",
      likes: 15,
      comments: 6,
      category: "일식"
    },
    {
      id: 5,
      title: "마라탕 집에서 만들어 먹기",
      author: "매운맛조아",
      date: "2023-11-11",
      content: "마라 소스 만드는 법 알려드릴게요. 생각보다 간단해요!",
      likes: 22,
      comments: 9,
      category: "중식"
    }
  ]);

  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>요리 커뮤니티</h3>
            <p>요리 경험과 노하우를 함께 나누어요</p>
          </div>

          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <button style={{
              background: '#FF9900',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>
              <i className="fas fa-plus"></i> 새 글 작성
            </button>
          </div>
          
          <div style={{ display: 'grid', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{
                    background: '#FF9900',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#888', fontSize: '14px' }}>{post.date}</span>
                </div>
                
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  marginBottom: '8px',
                  color: '#333'
                }}>
                  {post.title}
                </h4>
                
                <p style={{ 
                  color: '#666', 
                  fontSize: '14px', 
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {post.content}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #eee',
                  paddingTop: '15px'
                }}>
                  <span style={{ color: '#888', fontSize: '14px' }}>
                    <i className="fas fa-user"></i> {post.author}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button 
                      onClick={() => handleLike(post.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: likedPosts.has(post.id) ? '#FF9900' : '#888',
                        cursor: 'pointer',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className={likedPosts.has(post.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </button>
                    
                    <span style={{ color: '#888', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <i className="far fa-comment"></i> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Community;