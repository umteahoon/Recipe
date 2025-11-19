import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="recommended" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h3>이용약관</h3>
            <p>레시피연구소 서비스 이용약관을 확인해주세요</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '10px', padding: '40px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제1조 (목적)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                이 약관은 레시피연구소(이하 "회사")가 제공하는 온라인 레시피 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제2조 (정의)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '10px' }}>
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다:
              </p>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>1. "서비스"라 함은 회사가 제공하는 레시피 공유 및 요리 정보 서비스를 의미합니다.</li>
                <li>2. "이용자"라 함은 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                <li>3. "회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제3조 (약관의 효력 및 변경)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.<br />
                2. 회사는 합리적인 사유가 발생할 경우에는 이 약관을 변경할 수 있으며, 약관이 변경되는 경우 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 최소 7일 이전에 공지합니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제4조 (서비스의 제공 및 변경)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                1. 회사는 다음과 같은 업무를 수행합니다:<br />
                - 레시피 정보 제공 서비스<br />
                - 요리 관련 커뮤니티 서비스<br />
                - 기타 회사가 정하는 업무<br />
                2. 회사는 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제5조 (서비스 이용시간)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.<br />
                2. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제6조 (회원가입)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.<br />
                2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제7조 (개인정보보호)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하여 시행하고 있으며, 관련 법령에 따라 이용자의 개인정보를 보호합니다.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#FF9900' }}>
                제8조 (이용자의 의무)
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                1. 이용자는 다음 행위를 하여서는 안 됩니다:<br />
                - 신청 또는 변경시 허위 내용의 등록<br />
                - 타인의 정보 도용<br />
                - 회사가 게시한 정보의 변경<br />
                - 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시<br />
                - 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해<br />
                - 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위<br />
                - 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 회사에 공개 또는 게시하는 행위
              </p>
            </div>

            <div>
              <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', marginTop: '40px' }}>
                본 약관은 2023년 11월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;