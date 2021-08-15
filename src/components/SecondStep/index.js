import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
import Expand from "react-expand-animated";
import chekedImage from "../../img/checkedImage.png";
function SecondStep({
  yourCompanyBadges,
  setYourCompanyBadges,
  company,
  setCompany,
  isSecondActive,
  setAccommodations,
  accommodations,
  isThirdActive,
}) {
  const transitions = ["height", "opacity"];
  return (
    <div
      className={`container container__step2 ${
        !isSecondActive && "container__inactive"
      }`}
    >
      <div className="container__title">Step2</div>
      <div className="container__content"></div>
      <div className="secondStep">
        <div className="secondStep__content">
          <h3 className="question">
            Would you like your company name on your badges?
          </h3>
          <RadioGroup
            aria-label="Gender"
            name="Gender"
            value={yourCompanyBadges}
            onChange={(e) => setYourCompanyBadges(e.target.value)}
          >
            <div className="flex">
              <FormControlLabel
                value="0"
                control={<Radio color="default" disabled={!isSecondActive} />}
                label="Yes"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="default" disabled={!isSecondActive} />}
                label="No"
              />
            </div>
          </RadioGroup>

          {yourCompanyBadges === "0" && (
            <TextField
              label="CompanyName"
              type="text"
              name="CompanyName"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              variant="outlined"
              fullWidth
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
            />
          )}

          <h3 className="question">
            Will anyone in your group require speical accommodations?
          </h3>
          <RadioGroup
            aria-label="Gender"
            name="Gender"
            value={accommodations}
            onChange={(e) => setAccommodations(e.target.value)}
          >
            <div className="flex">
              <FormControlLabel
                value="0"
                control={<Radio color="default" disabled={!isSecondActive} />}
                label="Yes"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="default" disabled={!isSecondActive} />}
                label="No"
              />
            </div>
          </RadioGroup>
          <Expand
            open={isThirdActive}
            duration={1000}
            transitions={transitions}
          >
            {isThirdActive && (
              <div className="imageContainer">
                <img
                  src={chekedImage}
                  alt="checkeimage"
                  className="checkedImage"
                />
              </div>
            )}
          </Expand>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
