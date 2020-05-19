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
/* 
    [Immutabel.js]
    불변성 관리를 위해, 페이스북팀에서 만든 라이브러리.

    [Map]
    객체 대신 사용된다. JavaScript의 map과는 다르다.
    const Map = Immutable.Map;
    const data = Map({a:1, b:Map({bb:3}), c:5});
    객체 내부에 있는 객체들도 Map으로 감싸줘야한다.

    [fromJS, toJS]
    const fromJS = Immutable.fromJS;
    const data = fromJS({a:1, b:{bb:3}, c:5});
    내부는 자동으로 Map으로 변환 처리가 된다.
    fromJS로 감싸면, 내부의 객체는 자동으로 변환되기 때문에 그대로 사용할 수 없다.
    이럴 경우에는 toJS로 일반 JavaScript 객체로 변환한다.
    data.toJS();

    [get, getIn]
    Map 내부의 값을 가져올 때 사용한다.
    data.get('a');

    깊숙히 있는 값을 가져올 때는 getIn을 사용한다.
    data.getIn(['b', 'bb']);

    [set, setIn]
    값을 설정할 때는 set을 사용한다.
    const newData = data.set('a', 4);

    깊숙히 있는 값을 설정할 때는 setIn을 사용한다.
    const newData = data.setIn(['b', 'bb'], 6);

    기존의 값은 그대로 두고, 새로운 값을 생성하여 반환한다.

    [merge, mergeIn]
    여러 값을 동시에 변경할 때는 merge를 사용한다.
    const newData = data.merge({a:10, c:20});

    깊이 있는 여러 값을 동시에 변경할 때는 mergeIn을 사용한다.
    예시는 b.bb와 b.bbb를 변경할 경우.
    const newData = data.mergeIn(['b'],{ bb:100, bbb:1000 });

    setIn을 두 번 해도 된다.
    const newData = data.setIn(['b', 'bb'], 100)
                        .setIn(['b', 'bbb'], 1000);

    일반적으로 merge 한 번보다, set 여러 번이 더 처리가 빠르다.

    [List]
    array 대신 사용되는 데이터 구조로 array와 동일하게 
    map,filter, sort, pop, push 등의 내장함수를 가지고 있으나
    새로운 List가 반환되는 점이 다르다.

    리액트의 컴포넌트는 Immutable의 List와 호환이 되기 때문에
    Map으로 변환된 상태에서도 렌더링이 가능하다.

    const List = Immutable.List;
    const list = List([1, 2, 3, 4, 5]);

    객체들의 배열인 경우, Map 혹은 fromJS로 Map으로 변환해줘야 set, get등이 사용 가능하다.
    
    const list = List([Map({ a:1 }), Map({ b:2 })]);
                    or
    const list = fromJS([{ a:1 }, { b:2 }]);
    
    당연히 toJS()도 가능하다.
    list.toJS();

    [get, getIn]
    n번째 값을 가져올 때는 get을 사용한다.
    list.get(0);

    깊이 있는 값을 가져올 때는 getIn을 사용한다.
    list.getIn([0, 'a']);

    [set, setIn]
    수정하는 경우, set을 사용할 수 있다.
    const newList = list.set(0, 10);
    const newList = list.setIn([0, 'a'], 10);

    기존의 값을 참조해야하는 경우는 update를 사용할 수 있다.
    const newList = list.setIn([1, 'value'], list.getIn([1, 'value']) * 5);
                            or
    const newList = list.update(1, item => item.set('value', item.get('value') * 5);

    [push, unshift]
    추가 하는 경우, array의 메서드들을 사용할 수 있다.
    var newList = list.push(Map({value: 3}));
    var newList = list.unshift(Map({value: 0}));

    [delete, pop]
    삭제하는 경우.
    var newList = list.delete(1);
    var newList = list.pop();

    [size, isEmpty]
    크기를 가져올 때는 size 메서드를 사용한다.
    list.size;

    비어있는 지 확인 할 때는 isEmpty 메서드를 사용한다.
    list.isEmpty();
)                        
*/

import * as types from "../actions/ActionTypes";
import { fromJS, Map } from "immutable";

const initialState = fromJS({
  counters: [
    {
      number: 0,
      color: "black",
    },
  ],
});

const counter = (state = initialState, action) => {
  const counters = state.get("counters");
  switch (action.type) {
    case types.CREATE:
      return state.set(
        "counters",
        counters.push(Map({ number: 0, color: action.color }))
      );

    case types.REMOVE:
      return state.set("counters", counters.pop());

    case types.INCREMENT:
      return state.set(
        "counters",
        counters.update(action.index, (counter) =>
          counter.set("number", counter.get("number") + 1)
        )
      );

    case types.DECREMENT:
      return state.set(
        "counters",
        counters.update(action.index, (counter) =>
          counter.set("number", counter.get("number") - 1)
        )
      );

    case types.SET_COLOR:
      return state.set(
        "counters",
        counters.update(action.index, (counter) =>
          counter.set("color", action.color)
        )
      );

    default:
      return state;
  }
};

export default counter;
