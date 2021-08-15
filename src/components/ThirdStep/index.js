import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";

function ThirdStep({ resetAll, isThirdActive }) {
  const [ready, setReady] = useState(false);
  const submitRegisteration = () => {
    setReady(false);
    resetAll();
  };
  return (
    <div
      className={`container container__step3 ${
        !isThirdActive && "container__inactive"
      }`}
    >
      <div className="container__title">Step3</div>
      <div className="container__content"></div>
      <div className="thirdStep">
        <h3 className="question">Are you ready to rock?</h3>
        <Checkbox
          checked={ready}
          onChange={() => setReady(!ready)}
          color="primary"
        />
        <div>
          <button onClick={submitRegisteration} disabled={!ready}>
            Complete Registeration
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdStep;
