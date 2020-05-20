import { createAction, handleActions } from "redux-actions";
import { fromJS, Map } from "immutable";

// action type 상수화
const CREATE = "counter/CREATE";
const REMOVE = "counter/REMOVE";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const SET_COLOR = "counter/SET_COLOR";

// action 생성 함수
// createAction 사용
// 파라미터 값은 payload로 들어온다.
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // index, color

// reducer
// 초기 state
const initialState = fromJS({
  counters: [
    {
      number: 0,
      color: "black",
    },
  ],
});

// reducer함수
// handleActions 사용하기
// 첫번째 파라미터는 액션에 따라 실행할 메서드를 가지고 있는 객체
// 두번째 파라미터는 state 기본값
// key 값으로 상수값을 가져올 때는 []로 묶어준다.
export default handleActions(
  {
    [CREATE]: (state, action) => {
      const counters = state.get("counters");
      return state.set(
        "counters",
        counters.push(Map({ number: 0, color: action.payload }))
      );
    },
    [REMOVE]: (state, action) => {
      const counters = state.get("counters");
      return state.set("counters", counters.pop());
    },
    [INCREMENT]: (state, action) => {
      const counters = state.get("counters");
      return state.set(
        "counters",
        counters.update(action.payload, (counter) =>
          counter.set("number", counter.get("number") + 1)
        )
      );
    },
    [DECREMENT]: (state, action) => {
      const counters = state.get("counters");
      return state.set(
        "counters",
        counters.update(action.payload, (counter) =>
          counter.set("number", counter.get("number") - 1)
        )
      );
    },
    [SET_COLOR]: (state, action) => {
      const counters = state.get("counters");
      return state.set(
        "counters",
        counters.update(action.payload.index, (counter) =>
          counter.set("color", action.payload.color)
        )
      );
    },
  },
  initialState
);
