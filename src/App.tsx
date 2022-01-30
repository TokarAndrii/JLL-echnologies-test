import "./App.css";
import Typography from "@material-ui/core/Typography";
import TenantsList from "./pages/TenantsList";
import Tenant from "./pages/Tenant";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h2">
        JJL Technologies app
      </Typography>

      <Routes>
        <Route path="*" element={<Navigate to="/list" />} />
        <Route path="/list" element={<TenantsList />} />
        <Route path="list/:id" element={<Tenant />} />
      </Routes>
    </div>
  );
}

export default App;
