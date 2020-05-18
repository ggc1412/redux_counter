import { connect } from "react-redux";
import Counter from "../components/Counter";
import * as actions from "../actions/index";
import { getRandomColor } from "../utils";

// store state 값을 어떻게 가져올지 설정한다.
const mapStateProps = state => ({
    color: state.color,
    number: state.number
});

// dispatch 함수들의 객체를 설정한다.
const mapDispatchProps = dispatch => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// counter 컴포넌트와 애플리케이션의 데이터 레이어를 묶는 역할을 한다.
const CounterContainer = connect(mapStateProps, mapDispatchProps)(Counter);

export default CounterContainer;