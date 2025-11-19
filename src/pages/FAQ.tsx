import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "레시피연구소는 어떤 서비스인가요?",
      answer: "레시피연구소는 다양한 요리 레시피를 제공하고, 요리 애호가들이 서로 소통할 수 있는 플랫폼입니다. 초보자부터 전문가까지 모든 수준의 요리사를 위한 레시피와 팁을 제공합니다."
    },
    {
      question: "회원가입은 어떻게 하나요?",
      answer: "상단의 '회원가입' 버튼을 클릭하시면 간단한 정보 입력을 통해 회원가입이 가능합니다. 이메일 인증 후 바로 서비스를 이용하실 수 있습니다."
    },
    {
      question: "레시피를 직접 등록할 수 있나요?",
      answer: "네, 회원이시면 누구나 자신만의 레시피를 등록하실 수 있습니다. 커뮤니티 페이지에서 '새 글 작성' 버튼을 통해 레시피를 공유해보세요."
    },
    {
      question: "레시피 검색은 어떻게 하나요?",
      answer: "메인 페이지의 검색창이나 레시피 목록 페이지에서 원하는 요리명, 재료명으로 검색하실 수 있습니다. 카테고리별 필터링도 가능합니다."
    },
    {
      question: "좋아요 기능은 어떻게 사용하나요?",
      answer: "각 레시피 카드의 하트 버튼을 클릭하시면 좋아요를 표시할 수 있습니다. 좋아요한 레시피는 마이페이지에서 모아보실 수 있습니다."
    },
    {
      question: "모바일에서도 이용할 수 있나요?",
      answer: "네, 레시피연구소는 반응형 웹사이트로 제작되어 PC, 태블릿, 모바일 등 모든 기기에서 편리하게 이용하실 수 있습니다."
    },
    {
      question: "레시피 난이도는 어떻게 구분되나요?",
      answer: "레시피는 '쉬움', '보통', '어려움' 세 단계로 난이도가 구분됩니다. 초보자분들은 '쉬움' 단계부터 시작하시는 것을 추천합니다."
    },
    {
      question: "문의사항이 있을 때는 어떻게 연락하나요?",
      answer: "문의하기 페이지를 통해 연락주시거나, 이메일(info@recipelab.kr) 또는 전화(02-123-4567)로 연락주시면 됩니다."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>자주 묻는 질문</h3>
            <p>레시피연구소 이용에 대한 궁금한 점들을 확인해보세요</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '10px',
                marginBottom: '20px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  background: '#FF9900',
                  color: 'white',
                  padding: '20px',
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                  <i className="fas fa-question-circle" style={{ marginRight: '10px' }}></i>
                  {faq.question}
                </div>
                <div style={{
                  padding: '20px',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
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

export default FAQ;