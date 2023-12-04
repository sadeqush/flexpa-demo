import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login.page";
import { AuthorizePatientPage } from "../pages/authorize-patient.page";
import PatientList from "../components/patient-list.component";
import Dashboard from "../pages/dashboard.page";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route key="login" path="/login" element={<LoginPage />} />
      <Route
        key="login"
        path="/patients"
        element={
          <Dashboard>
            <PatientList />
          </Dashboard>
        }
      />

      <Route
        key="authorize-patient"
        path="/"
        element={<AuthorizePatientPage />}
      />
    </Routes>
  );
};
