import React from "react";
import OnBoardLayout from "../components/OnBoardLayout";
import { useNavigate } from "react-router-dom";
import OnboardNav1 from "../components/OnboardNav1";

const Onboarding2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[38%] h-[100vh] flex justify-center items-end bg-image2 bg-no-repeat bg-origin-border bg-center bg-cover">
      <OnBoardLayout
        id={2}
        navigation={<OnboardNav1 onclick={() => navigate("/onboard3")} />}
      />
    </div>
  );
};

export default Onboarding2;
