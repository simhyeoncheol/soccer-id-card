# 포함된 웹폰트

Google Fonts 에서 내려받아 그대로 재배포합니다. 네 가지 모두
**SIL Open Font License 1.1** 이며, 이 라이선스는 재배포를 허용합니다.

| 패밀리 | 저작자 | 라이선스 |
| --- | --- | --- |
| Gothic A1 | Hanyang Systems | SIL OFL 1.1 |
| IBM Plex Sans KR | IBM | SIL OFL 1.1 |
| IBM Plex Mono | IBM | SIL OFL 1.1 |
| Nanum Myeongjo | Sandoll Communication | SIL OFL 1.1 |

파일 이름은 `패밀리-해시.구간번호.woff2` 형식입니다. Google Fonts 가
한글 폰트를 유니코드 구간별로 쪼개 두기 때문에 파일 수는 많지만
(총 488개 / 4.6MB), 브라우저는 화면에 실제로 쓰인 글자가 속한
구간만 내려받습니다. 보통 한 페이지에 3~6개, 200KB 안팎입니다.

`../fonts.css` 가 이 파일들을 `@font-face` 로 연결합니다.
전문은 https://openfontlicense.org 를 보세요.
