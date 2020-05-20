import { connect } from "react-redux";
import * as actions from "../modules";
import { getRandomColor } from "../utils";
import CounterList from "../components/CounterList";

// store state 값을 어떻게 가져올지 설정한다.
const mapStateProps = (state) => ({
  counters: state.get('counters')
});

// dispatch 함수들의 객체를 설정한다.
const mapDispatchProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    // createAction에서 payload에 객체로 넣어줘야하기 때문에 객체 형태로 집어 넣는다. 
    dispatch(actions.setColor({index, color}));
  },
});

// counter 컴포넌트와 애플리케이션의 데이터 레이어를 묶는 역할을 한다.
const CounterContainer = connect(mapStateProps, mapDispatchProps)(CounterList);

export default CounterContainer;
