import { combineReducers } from "redux";
import number from "./number";
import color from "./color";

/* 
    리듀서는 action type에 따라 변화를 일으키는 함수이다.
    이 리듀서 파일에는 최초 변화를 일으키기 전, 초기 상태가 정의되어 있어야 한다.
    리듀서 함수는 state와 action을 파라미터로 받는다.
*/
/*
    리듀서의 상태가 복잡한 경우, 여러 개의 리듀서로 쪼개볼 수 있다.
    combineReducers를 통해, 서브 리듀서들을 하나로 합친다.
    합치면 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
    지금의 경우,
        {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어진다.
*/

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;