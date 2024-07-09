const OnBoardLayout = ({ id, navigation, classname = "" }) => {
  return (
    <div
      className={`bg-orange text-white w-[90%] h-[350px] rounded-[48px] mb-10 py-6 px-10 flex flex-col justify-between ${classname}`}
    >
      <div className="w-full flex flex-col gap-2">
        <h4 className="font-semibold text-[2rem] w-full md:tracking-wide text-center leading-9">
          We serve incomparable delicacies
        </h4>

        <p className="font-sm text-sm md:text-lg text-center leading-5 md:leading-6 mb-2">
          All the best restaurants with their top menu waiting for you, they
          cant't wait for your order!!
        </p>

        <div className="h-[6px] flex justify-center items-center gap-1">
          <div
            className={`w-7 h-full rounded-lg ${
              id === 1 ? "bg-white" : "bg-darkgray"
            }`}
          ></div>

          <div
            className={`w-7 h-full rounded-lg ${
              id === 2 ? "bg-white" : "bg-darkgray"
            }`}
          ></div>

          <div
            className={`w-7 h-full rounded-lg ${
              id === 3 ? "bg-white" : "bg-darkgray"
            }`}
          ></div>
        </div>
      </div>
      {navigation}
    </div>
  );
};

export default OnBoardLayout;
