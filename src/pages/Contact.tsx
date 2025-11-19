import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 서버로 데이터 전송
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>문의하기</h3>
            <p>궁금한 점이나 건의사항이 있으시면 언제든 연락주세요</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* 연락처 정보 */}
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                연락처 정보
              </h4>
              
              <div style={{ background: 'white', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: '#FF9900', fontSize: '18px', marginRight: '15px' }}></i>
                    <strong>주소</strong>
                  </div>
                  <p style={{ color: '#666', marginLeft: '33px' }}>서울시 강남구 테헤란로 123</p>
                </div>
                
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <i className="fas fa-phone" style={{ color: '#FF9900', fontSize: '18px', marginRight: '15px' }}></i>
                    <strong>전화번호</strong>
                  </div>
                  <p style={{ color: '#666', marginLeft: '33px' }}>02-123-4567</p>
                </div>
                
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <i className="fas fa-envelope" style={{ color: '#FF9900', fontSize: '18px', marginRight: '15px' }}></i>
                    <strong>이메일</strong>
                  </div>
                  <p style={{ color: '#666', marginLeft: '33px' }}>info@recipelab.kr</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <i className="fas fa-clock" style={{ color: '#FF9900', fontSize: '18px', marginRight: '15px' }}></i>
                    <strong>운영시간</strong>
                  </div>
                  <p style={{ color: '#666', marginLeft: '33px' }}>
                    평일: 09:00 - 18:00<br />
                    주말: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
            
            {/* 문의 폼 */}
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                문의 양식
              </h4>
              
              <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    문의 유형 *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                  >
                    <option value="">선택해주세요</option>
                    <option value="일반문의">일반문의</option>
                    <option value="레시피문의">레시피 관련 문의</option>
                    <option value="기술지원">기술지원</option>
                    <option value="제휴문의">제휴문의</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      resize: 'vertical'
                    }}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                  />
                </div>
                
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#FF9900',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e68a00'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF9900'}
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;