import React from "react";
import PropTypes from "prop-types";
import "./Buttons.scss";

const Buttons = ({ onCreate, onRemove }) => {
  return (
    <div className="ButtonWrapper">
      <div className="btn create" onClick={onCreate}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        삭제
      </div>
    </div>
  );
};

Buttons.prototype = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
}

Buttons.defaultProps = {
  onCreate: () => console.warn("onCreate not defined"),
  onRemove: () => console.warn("onRemove not defined")
}

export default Buttons;
