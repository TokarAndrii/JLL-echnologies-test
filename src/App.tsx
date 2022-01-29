import "./App.css";
import Typography from "@material-ui/core/Typography";
import TenantsList from "./pages/TenantsList";
import Tetant from "./pages/Tetant";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h2">
        JJL Technologies app
      </Typography>
      <Routes>
        <Route path="/list" element={<TenantsList />} />
        <Route path="list/:id" element={<Tetant />} />
      </Routes>
    </div>
  );
}

export default App;
