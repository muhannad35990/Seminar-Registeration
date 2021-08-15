import React, { useEffect, useState } from "react";

import FirstStep from "../../components/FirstStep";
import SecondStep from "../../components/SecondStep";
import ThirdStep from "../../components/ThirdStep";

function Home() {
  const [step1, setStep1] = useState(null);
  const [names, setNames] = useState([]);
  const [yourCompanyBadges, setYourCompanyBadges] = useState(null);
  const [company, setCompany] = useState("");
  const [accommodations, setAccommodations] = useState(null);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const resetAll = () => {
    setStep1(null);
    setNames([]);
    setYourCompanyBadges(null);
    setCompany("");
    setAccommodations(null);
  };
  useEffect(() => {
    if (yourCompanyBadges !== null && accommodations !== null) {
      if (yourCompanyBadges === "0" && company !== "" && company !== null) {
        setIsThirdActive(true);
      } else if (yourCompanyBadges === "1") setIsThirdActive(true);
      else setIsThirdActive(false);
    } else setIsThirdActive(false);
  }, [accommodations, company, yourCompanyBadges]);

  useEffect(() => {
    let countOfnotNull = 0;
    if (Object.keys(names).length === step1) {
      Object.keys(names).forEach((key) => {
        if (names[key] !== null && names[key] !== "") countOfnotNull++;
      });
    }
    if (countOfnotNull === step1) setIsSecondActive(true);
    else setIsSecondActive(false);
  }, [names, step1]);

  return (
    <div className="home">
      <h1 className="home__title">
        Seminar <span>Registeration</span>
      </h1>
      <div className="home__steps">
        <FirstStep
          step1={step1}
          setStep1={setStep1}
          names={names}
          setNames={setNames}
          isSecondActive={isSecondActive}
        />
        <SecondStep
          yourCompanyBadges={yourCompanyBadges}
          setYourCompanyBadges={setYourCompanyBadges}
          company={company}
          setCompany={setCompany}
          setAccommodations={setAccommodations}
          accommodations={accommodations}
          isSecondActive={isSecondActive}
          isThirdActive={isThirdActive}
        />
        <ThirdStep resetAll={resetAll} isThirdActive={isThirdActive} />
      </div>
    </div>
  );
}

export default Home;
