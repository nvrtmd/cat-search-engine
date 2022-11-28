# 😺Cat Search Engine🔍

![123](https://user-images.githubusercontent.com/67324487/203611766-ec9ecbcb-ea0c-4993-b80d-c0cbad9a9ff7.gif)

프로그래머스 과제관의 [고양이 사진 검색 사이트](https://school.programmers.co.kr/skill_check_assignments/4)를 처음부터 구현해보는 저장소입니다.

## 😸Deployed Link
[👉🏻Link👈🏻](https://cat-search-engine.netlify.app)


## 🐱Requirements

### 😻HTML, CSS 시멘틱 마크업 적용

#### 😹기본 수정 사항
- [x] 시멘틱한 방법으로 마크업 변경

#### 😼반응형 CSS 지원
- [x] 유저가 사용하는 디바이스의 길이에 따라 row당 column개수를 적절히 변경
- 992px 이하 3개 |	768px 이하 2개	| 576px 이하 1개

#### 🐱‍👤다크모드 지원
- [x] 기존 CSS의 모든주석을 제거 하고 모든 글자는 #FFFFFF, 배경은 #000000으로 한정 -> 커스텀하여 구현
- [x] OS의 다크모드 활성화 여부를 기반으로 동작
- [x] 유저가 테마를 토글링할 수 있도록 좌측 상단에 해당 기능을 토글하는 체크박스를 생성

#### 😽이미지 상세보기 모달
- [x] max-size가 768px 이하인경우 모달의 가로길이를 디바이스 가로길이만큼 늘리기
- [x] 이미지 클릭 시 생성된 모달에 종료(닫힘) 이벤트를 추가
- 키보드의 esc를 누를 때
- 모달 영역밖을 클릭할 때
- 우측 상단의 닫기를 클릭할 때
- [x] /cats/:id를 통해 고양이의 성격 정보를 렌더링
- [x] Modal의 열기/닫기 이벤트에 fade in/out을 적용

### 🐱‍💻검색 페이지
- [x] 페이지 진입 시 검색창(input)에 focus처리
- [x] 키워드가 입력된 상태에서 input을 클릭 시 기존 키워드 삭제
- [x] 데이터 요청 시 Loading UI 추가 필요
- [x] 검색결과가 없는 경우 유저가 파악 할 수 있도록 UI 처리 필요
- [x] 최근 5개의 검색 키워드를 SearchInput아래 표시되도록 생성. 해당 키워드를 선택할 시 검색요청 발생
- [x] 페이지 새로고침 시 마지막 검색결과 화면 유지
- [x] SearchInput옆 자유롭게 버튼을 추가하여 /api/cats/random50 을 호출하여 화면에 렌더링
- [x] Lazy load를 이해하고 이미지가 화면에 보일 시점에 loading되도록 처리
- [x] 검색 결과 각 아이템에 마우스 오버시 고양이 이름을 노출

### 🐱‍🏍스크롤 페이징 구현
- [ ] 유저가 스크롤바 끝까지 이동 시 다음페이지 로딩

### 🙀랜덤고양이 배너 섹션
- [ ] 현재 검색 결과 목록 위에 배너형태의 랜덤 고양이 섹션을 추가
- [ ] 앱이 구동될 때 /api/cats/random50 api요청 이후 받은 결과를 별도 섹션에 노출
- [ ] 겸색결과가 많더라도 화면에 5개만 노출하여 각 이미지에 좌,우 슬라이등 버튼을 표시
- [ ] 좌, 우 버튼을 클릭하면, 현재 노출된 이미지는 사라지고, 이전 또는 다음 이미지를 출력 (트랜지션은 선택)

### 🦁추가 요구사항
- [x] SearchResult에 각 아이템을 클릭하는 이벤트를 EventDelegation을 이용하여 수정
- [ ] 각 컴포넌트의 내부함수와 Util함수를 잘게 분리

### 🐈API
- [x] fetch는 async await를 활용하여 진행하고 에러가 나는 경우 적절히 처리
- [ ] status code에 따라 에러메세지를 분리하여 작성

[출처](https://velog.io/@z6su3/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B6%84%EC%84%9D-%EC%83%81%EC%84%B8)

[참고자료](https://github.com/woohyeonjo/ilovecat-javascript)
