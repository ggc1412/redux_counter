import { connect } from "react-redux";
import * as actions from "../actions/index";
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
    dispatch(actions.setColor(index, color));
  },
});

// counter 컴포넌트와 애플리케이션의 데이터 레이어를 묶는 역할을 한다.
const CounterContainer = connect(mapStateProps, mapDispatchProps)(CounterList);

export default CounterContainer;
