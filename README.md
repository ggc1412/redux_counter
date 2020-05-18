### React, Redux를 활용한 counter

#### 디렉터리

- actions: 액션 타입, 액션 생성자 파일
- components: 뷰만을 담당하는 Presentational 컴포넌트 저장, Dumb 컴포넌트
- containers: store에 접근하는 Container 컴포넌트, Smart 컴포넌트
- reducers: store의 기본 상태와 , 상태 업데이트를 담당하는 리듀서 파일들 저장
- utils: 일부 컴포넌트들에서 공용되는 파일들

#### Presentational 컴포넌트

- 뷰만을 담당
- DOM 엘리먼트, 스타일을 가지고 있음
- Redux Store에 직접적인 접근권한이 없음. 오직 props로만 데이터를 가져옴.
- 대부분의 경우, state를 가지고 있지 않음
- 가지고 있더라도 데이터에 관한 것이 아닌, UI에 관한 것임
- 주로 함수형 컴포넌트로 작성되며, state를 가지고 있어야 하거나, Life Cycle 처리가 필요할 때 클래스 형으로 작성

#### Container 컴포넌트

- Presentational 컴포넌트들과 Container 컴포넌트들 관리를 담당
- 내부에 DOM이 직접적으로 사용되는 경우는 없음
- 스타일을 가지고 있지 않아야 함. 스타일들은 모두 Presentation 컴포넌트에서 정의되어야 함
- state를 가지고 있을 때가 많으며, Redux-Store 에 직접적으로 접근할 수 있음

- UI 쪽과 Data 쪽이 분리 되어 프로젝트를 이해하기 쉬워지며, 컴포넌트의 재사용률도 높여준다.

Ex) Item Presentation 컴포넌트 < Item Container 컴포넌트 < Redux-store 연결

- Redux의 창시자, Dan Abramov가 공유한 구조이지만, 무조건 따라할 필요는 없다.
- 무조건 Presentation 컴포넌트로 분리하지 않고, DOM 엘리먼트를 지닌 컴포넌트에 직접 리덕스를 연결해도 상관없다.
- 개발 흐름에 따라 맞춰서 처리하면 된다.
