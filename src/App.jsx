import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";

const App = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/signIn"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
