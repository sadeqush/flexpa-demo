import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login.page";
import { AuthorizePatientPage } from "../pages/authorize-patient.page";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route key="login" path="/" element={<LoginPage />} />
      <Route
        key="authorize-patient"
        path="/authorize-patient"
        element={<AuthorizePatientPage />}
      />
    </Routes>
  );
};
