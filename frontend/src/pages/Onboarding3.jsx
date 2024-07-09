import OnBoardLayout from "../components/OnBoardLayout";
import OnboardNav2 from "../components/OnboardNav2";

const Onboarding3 = () => {
  return (
    <div className="w-full md:w-[38%] h-[100vh] flex justify-center items-end bg-image3 bg-no-repeat bg-origin-border bg-center bg-cover">
      <OnBoardLayout id={3} navigation={<OnboardNav2 />} />
    </div>
  );
};

export default Onboarding3;
