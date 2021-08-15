import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import chekedImage from "../../img/checkedImage.png";
import Expand from "react-expand-animated";

function FirstStep({ step1, setStep1, names, setNames, isSecondActive }) {
  const step1Choices = [1, 2, 3, 4, 5];

  const handleNamesChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNames({ ...names, [name]: value });
  };

  const transitions = ["height", "opacity"];
  return (
    <div className="container container__step1">
      <div className="container__title">Step1</div>
      <div className="container__content">
        <div className="firstStep">
          <h3 className="question">How many people will be attending?</h3>
          <FormControl fullWidth>
            <InputLabel id="step1-choice">Please Choice</InputLabel>
            <Select
              labelId="step1-choice"
              id="step1-choice"
              value={step1}
              onChange={(e) => setStep1(e.target.value)}
              label="peaple"
            >
              {step1Choices.map((step) => (
                <MenuItem value={step}>{step}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Expand open={step1} duration={1000} transitions={transitions}>
            {step1 !== null && (
              <div className="firstStep__content">
                <div className="firstStep__content__names">
                  <h2 className="firstStep__content__names__title">
                    Please provide full names:
                  </h2>
                  {[...Array(step1)].map((e, i) => (
                    <TextField
                      key={i}
                      label={`Attendee ${i + 1} Name`}
                      type="text"
                      name={`Attendee${i + 1}`}
                      value={names[`Attendee${i + 1}`]}
                      onChange={handleNamesChange}
                      variant="outlined"
                      fullWidth
                      inputProps={{ style: { fontSize: 15 } }}
                      InputLabelProps={{ style: { fontSize: 15 } }}
                    />
                  ))}
                </div>
              </div>
            )}
          </Expand>
          <Expand
            open={isSecondActive}
            duration={1000}
            transitions={transitions}
          >
            {isSecondActive && (
              <div className="imageContainer">
                <div>
                  <img
                    src={chekedImage}
                    alt="checkeimage"
                    className="checkedImage"
                  />
                </div>
              </div>
            )}
          </Expand>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
