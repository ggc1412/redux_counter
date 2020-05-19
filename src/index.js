import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

// store 만들기
// store를 생성하여 리듀서에 연결한다.
import reducers from './reducers';
import { createStore } from 'redux';
/*
  [Provider 컴포넌트]
  Provider는 만든 store(리듀서)를 리액트와 연결한다.
  리액트로 작성된 컴포넌트들을 Provider 안에 넣으면, 
  하위 컴포넌트들이 Provider를 통해서 redux store에 접근이 가능해진다.
  provider의 props로 만든 store를 전달한다.
  결국에는 redux의 store state를 react의 state로 쓰려는 것 아닐까.

  [connect 메서드]
  store를 presentational 컴포넌트와 연결시킨다.
  connect메서드는 Provider 하위에 존재하는 컴포넌트들이 store에 접근하게 만든다.
  connect(mapStateToProps, mapDispathchToProps)메서드를 통해 컴포넌트와 연결가능한 connect 객체가 만들어진다.
  만들어진 connect 객체를 presentational 컴포넌트와 연결한다.
  이렇게 연결이 이루어지는 컴포넌트가 contianer 컴포넌트이다.
  
  결국, 연결 작업이 이루어지는 곳. 
  state의 어떤 값을 props로 가져올지 설정.
  dispatch하는 메서드를 설정하여서 props로 받아오도록 설정.
  그리고 이렇게 설정한 connect 객체를 이 props를 이용할 presentational 컴포넌트와 연결. 

  [mapStateToProps]
  store안의 state를 props로 사용할 수 있게 해준다.
  기본적으로 store가 업데이트 될 때마다 자동적으로 호출된다.
  이를 원하지 않으면, null값을 전달해야 한다.
  첫번째 인자로 state가 들어간다.
  두번째 인자로 원하는 객체를 넣을 수 있다.
  이렇게 넘겨준 값으로 원하는 객체 혹은 메서드를 만들어서 props로 사용할 수 있게 한다.
  
  결국, store state의 어떤 값을 props로 어떻게 받아올지 설정하는 것이다.

  [mapDispatchToProps]
  store에 접근한 컴포넌트가 store의 state를 바꾸기 위해 dispathch를 사용하게 해준다.
  dispatch를 어떻게 할지 설정하는 곳.
  만들어진 dispatch 메서드를 전달한다.
*/  
import { Provider } from 'react-redux';

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);