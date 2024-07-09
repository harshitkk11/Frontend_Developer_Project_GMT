import { useNavigate } from "react-router-dom";
import OnBoardLayout from "../components/OnBoardLayout";
import OnboardNav1 from "../components/OnboardNav1";

const Onboarding1 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[38%] h-[100vh] flex justify-center items-end bg-image1 bg-no-repeat bg-origin-border bg-center bg-cover scale-x-[-1]">
      <OnBoardLayout
        id={1}
        navigation={<OnboardNav1 onclick={() => navigate("/onboard2")} />}
        classname="scale-x-[-1]"
      />
    </div>
  );
};

export default Onboarding1;
