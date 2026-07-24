import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
      }}
    >
      <h2>CMS Admin</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/pages">Pages</Link>

        <Link to="/pages/create">Create Page</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;