import { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [type, setType] = useState("password");

  const [isDisable, setIsDisable] = useState({
    inputfield: false,
    submitbutton: false,
  });

  // password hide/unhide
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  // controle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // handle sign in with email and password
  const onLogin = (e) => {
    e.preventDefault();
    setIsDisable({
      inputfield: true,
      submitbutton: true,
    });
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setIsDisable({
          inputfield: false,
          submitbutton: false,
        });
        navigate("/postlogin");
      })
      .catch((error) => {
        setIsDisable({
          inputfield: false,
          submitbutton: false,
        });
        toast.error(error.code);
        console.log(error.code);
      });
  };

  // handle sign in with Google
  const signInWithGoogle = async (e) => {
    e.preventDefault();

    await signInWithPopup(auth, provider)
      .then(() => {
        navigate("/postlogin");
      })
      .catch((error) => {
        toast.error(error.code);
        console.log(error.code);
      });
  };

  return (
    <div className="w-full md:w-[38%] h-[100vh] flex flex-col justify-start items-start bg-white p-7 gap-2 overflow-auto">
      <div className="flex flex-col justify-start items-strat gap-2">
        <h4 className="text-[2rem] md:text-[2.5rem] text-black font-medium md:font-semibold text-wrap leading-10 md:leading-tight">
          Login to your account.
        </h4>
        <p className="text-[1rem] md:text-[1.1rem] leading-5 md:leading-6 text-lightgray font-medium">
          Please sign in to your account
        </p>
      </div>

      <form
        className="w-full flex flex-col justify-start items-center gap-4"
        onSubmit={onLogin}
      >
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onchange={(e) => handleOnChange(e)}
          disable={isDisable.inputfield}
          autocomplete="email"
        />

        <div className="w-full space-y-1">
          <label
            htmlFor="password"
            className="text-[1rem] font-medium text-black md:font-semibold"
          >
            Password
          </label>
          <div className="flex w-full rounded-lg border border-lightgray bg-white px-4 py-3 text-black">
            <input
              type={type}
              id="password"
              name="password"
              className="w-full bg-white text-[1rem] text-black outline-none placeholder:text-lightgray font-medium"
              required
              aria-describedby="password"
              autoComplete="current-password"
              placeholder="Password"
              disabled={isDisable.inputfield}
              onChange={(e) => handleOnChange(e)}
              value={formData.password}
            />
            {type === "password" ? (
              <span
                className="flex justify-around items-center text-lg"
                onClick={handleToggle}
              >
                <FiEyeOff />
              </span>
            ) : (
              <span
                className="flex justify-around items-center text-lg"
                onClick={handleToggle}
              >
                <FiEye />
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex justify-end items-start gap-2">
          <a
            href="#"
            className="text-orange cursor-pointer text-[1rem] font-medium md:font-semibold"
          >
            Forgot password?
          </a>
        </div>

        <button
          className="w-full bg-orange p-4 rounded-full text-white text-[1rem] hover:scale-105 ease-in-out duration-300 disabled:scale-100 disabled:bg-darkgray"
          disabled={isDisable.submitbutton}
        >
          Sign In
        </button>
      </form>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center text-lightgray">
          <div className="flex-grow border-t"></div>
          <p className="p-4 text-base">Or sign in with</p>
          <div className="flex-grow border-t"></div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            className="border rounded-full p-2 border-[#D6D6D6]"
            onClick={signInWithGoogle}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.65295 7.3455L6.93845 9.755C7.82745 7.554 9.98045 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65895 2 5.32795 4.1685 3.65295 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0718 17.5742 13.8038 18.001 12.5 18C9.89903 18 7.69053 16.3415 6.85853 14.027L3.59753 16.5395C5.25253 19.778 8.61353 22 12.5 22Z"
                fill="#4CAF50"
              />
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#1976D2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4">
        <p className="text-base font-medium">
          Don't have an account?{" "}
          <a
            onClick={() => navigate("/signup")}
            className="text-orange cursor-pointer"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
