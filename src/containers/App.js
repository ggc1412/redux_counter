import React, { Component } from "react";
import CounterContainer from "./CounterContainer";
import Buttons from "../components/Buttons";
import { connect } from "react-redux";
import * as actions from "../modules";
import { getRandomColor } from "../utils";

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div>
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterContainer />
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove()),
});

// presentational 컴포넌트를 불러와서 연결한 것이 아니라,
// 페이지 내에서 바로 연결하였기 때문에 export에서 connect를 바로 해도 무방하다.
export default connect(null, mapDispatchProps)(App);
