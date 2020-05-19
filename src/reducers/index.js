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
import * as types from "../actions/ActionTypes";

const initialState = {
    counters: [
        {
            number:0,
            color:'black'
        }
    ]
}


const counter = (state = initialState, action) => {
    const { counters } = state;    
    switch (action.type) {
        case types.CREATE:            
            return {
                counters: [
                    ...counters,
                    {
                        number:0,
                        color:action.color
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters:counters.slice(0,counters.length-1)
            };
        case types.INCREMENT:
            return {
                counters:[
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }                
    
        default:
            return state;
    }
}

export default counter;