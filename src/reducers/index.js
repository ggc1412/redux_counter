/* 
    리듀서는 action type에 따라 변화를 일으키는 함수이다.
    이 리듀서 파일에는 최초 변화를 일으키기 전, 초기 상태가 정의되어 있어야 한다.
    리듀서 함수는 state와 action을 파라미터로 받는다.
*/
import * as types from "../actions/ActionTypes";

const initialState = {
    color: 'black',
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1 
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
}

export default counter;