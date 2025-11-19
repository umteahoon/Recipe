import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>개인정보 처리방침</h3>
            <p>레시피연구소의 개인정보 처리방침을 확인해주세요</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '10px', padding: '40px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                1. 개인정보의 처리목적
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 회원 가입 및 관리</li>
                <li>• 서비스 제공 및 개선</li>
                <li>• 고객 문의 및 불만 처리</li>
                <li>• 마케팅 및 광고에의 활용</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                2. 개인정보의 처리 및 보유기간
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                ① 레시피연구소는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br />
                ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 회원 정보: 회원 탈퇴 시까지</li>
                <li>• 서비스 이용 기록: 3년</li>
                <li>• 고객 문의 기록: 3년</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                3. 처리하는 개인정보의 항목
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 다음의 개인정보 항목을 처리하고 있습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 필수항목: 이메일, 비밀번호, 닉네임</li>
                <li>• 선택항목: 프로필 사진, 자기소개</li>
                <li>• 자동 수집 항목: IP주소, 쿠키, 서비스 이용 기록, 접속 로그</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                4. 개인정보의 제3자 제공
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 정보주체가 사전에 동의한 경우</li>
                <li>• 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>• 공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                5. 개인정보처리의 위탁
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 위탁받는 자: 클라우드 서비스 제공업체</li>
                <li>• 위탁하는 업무의 내용: 서버 운영 및 관리</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                6. 정보주체의 권리·의무 및 행사방법
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                정보주체는 레시피연구소에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 개인정보 처리현황 통지요구</li>
                <li>• 개인정보 열람요구</li>
                <li>• 개인정보 정정·삭제요구</li>
                <li>• 개인정보 처리정지요구</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                7. 개인정보의 안전성 확보조치
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', marginTop: '10px' }}>
                <li>• 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                <li>• 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                <li>• 물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                8. 개인정보보호책임자
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                레시피연구소는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다:
              </p>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', marginTop: '10px' }}>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  <strong>개인정보보호책임자</strong><br />
                  성명: 김개인<br />
                  직책: 개인정보보호팀장<br />
                  연락처: privacy@recipelab.kr, 02-123-4567
                </p>
              </div>
            </div>

            <div>
              <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', marginTop: '40px' }}>
                본 개인정보처리방침은 2023년 11월 1일부터 적용됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;