import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import "./CounterList.scss";
import { List } from "immutable";

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    
    const counterList = counters.map((counter,i) =>
        <Counter 
            key={i}
            index={i}
            // counter가 Map형태이기 때문에 전개 구문을 사용할 수 없다.
            // 때문에 toJS()로 JavaScript 객체로 바꿔줘야 한다. 
            {...counter.toJS()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    )
    
    return (
        <div className="CounterList">
            {counterList}
        </div>
    )
}

CounterList.prototype ={
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn("onIncrement not defined"),
    onDecrement: () => console.warn("onDecrement not defined"),
    onSetColor: () => console.warn("onSetColor not defined")
}


export default CounterList;