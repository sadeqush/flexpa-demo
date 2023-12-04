import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth.util";

export const LoginPage = () => {
  if (isAuthenticated()) return <Navigate to="/dashboard" />;

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>
    </>
  );
};
