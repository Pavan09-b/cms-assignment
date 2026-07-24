import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
  <>
    <Navbar />

    <div style={{ padding: "30px" }}>
      <h1>CMS Admin Dashboard</h1>

      <p>Welcome to the Content Management System.</p>
    </div>
  </>
);

}

export default Dashboard;