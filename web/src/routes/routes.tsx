import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login.page";
import { AuthorizePatientPage } from "../pages/authorize-patient.page";
import PatientList from "../components/patient-list.component";
import Dashboard from "../pages/dashboard.page";
import PatientDetail from "../components/patient-detail.component";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route key="login" path="/login" element={<LoginPage />} />
      <Route
        key="patients"
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

      <Route
        key="patient-details"
        path="/patients/:id"
        element={
          <Dashboard>
            <PatientDetail />
          </Dashboard>
        }
      />
    </Routes>
  );
};
