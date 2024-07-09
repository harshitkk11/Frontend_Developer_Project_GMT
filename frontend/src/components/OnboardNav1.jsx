import { useNavigate } from "react-router-dom";

const OnboardNav1 = ({ onclick}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center font-medium">
      <a onClick={() => navigate("/login")} className="hover:scale-105 ease-in-out duration-200 cursor-pointer">Skip</a>
      <a onClick={onclick} className="flex justify-center items-center gap-2 hover:scale-105 ease-in-out duration-200 cursor-pointer">
        Next{" "}
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
              fill="white"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default OnboardNav1;
