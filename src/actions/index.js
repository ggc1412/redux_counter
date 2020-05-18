/* 
    dispatch를 할 때 action 객체를 넘겨줘야 하는데,
    그때마다 일일이 객체를 만들기 번거롭다.
    때문에 액션 객체 생성 함수를 만들어 놓고, 필요할 때 가져다가 사용한다.
    이 함수를 액션 생성자라고 한다. action creators
*/
import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

// 더블클릭을 하면, 색이 랜덤으로 변하지만, 액션을 rendomizeColor 이런 식으로 만들면 안된다.
// 리듀서는 순수함수여야 하기 때문.
// 따라서 파라미터로 color를 받으면 동일한 값을 리턴해줘야 한다.
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});

