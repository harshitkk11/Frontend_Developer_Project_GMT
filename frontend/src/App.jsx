import { Routes, Route } from "react-router-dom";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PostLogin from "./pages/PostLogin";
import TrackingScreen from "./pages/TrackingScreen";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={30000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Flip
      />
      <div className="min-h-[100vh] w-[100%] font-inter flex justify-center items-center bg-black">
        <Routes>
          <Route path="/" element={<Onboarding1 />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/onboard2" element={<Onboarding2 />} />

          <Route path="/onboard3" element={<Onboarding3 />} />

          <Route path="/tracking" element={<TrackingScreen />} />

          <Route element={<PrivateRoute />}>
            <Route path="/postlogin" element={<PostLogin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
