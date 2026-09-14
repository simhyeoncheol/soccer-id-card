// Firebase 콘솔 → 프로젝트 설정 → 일반 → 내 앱(웹 </>) 의 firebaseConfig 값을 그대로 붙여넣으세요.
// 이 값들은 비밀번호가 아니라 "어느 프로젝트인지" 알려주는 주소라서 공개 저장소에 올라가도 됩니다.
// 데이터 보호는 firestore.rules 와 로그인이 맡습니다.
export const firebaseConfig = {
  apiKey: "AIzaSyBZAa5F4M4_cpLVszgGzuxPThg0b6M9yHE",
  authDomain: "soccer-idcard.firebaseapp.com",
  projectId: "soccer-idcard",
  storageBucket: "soccer-idcard.firebasestorage.app",
  messagingSenderId: "1092292446532",
  appId: "1:1092292446532:web:fd737ac1e3ea9c019baf11"
};

// 로그인 아이디 뒤에 붙는 가짜 이메일 도메인.
// 콘솔에서 사용자를 추가할 때 "아이디@soccer-idcard.example" 형태로 넣습니다.
export const LOGIN_DOMAIN = "soccer-idcard.example";
