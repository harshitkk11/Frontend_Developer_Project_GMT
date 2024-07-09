import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const PrivateRoute = () => {
  var [uId, setUId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUId(uid);
      }
    });
  });
  if (uId) return <Outlet />;
};

export default PrivateRoute;
