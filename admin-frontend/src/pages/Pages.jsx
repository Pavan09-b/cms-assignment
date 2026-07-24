import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Pages() {
  const [pages, setPages] = useState([]);

  const fetchPages = async () => {
    try {
      const res = await api.get("/pages");
      setPages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/pages/${id}`);
      fetchPages();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Manage Pages</h1>

        <Link to="/pages/create">
          <button>Create Page</button>
        </Link>

        <br />
        <br />

        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td>{page.title}</td>
                <td>{page.slug}</td>
                <td>{page.status}</td>

                <td>
                  <Link to={`/pages/edit/${page.id}`}>
                    <button>Edit</button>
                  </Link>

                  {" "}

                  <button
                    onClick={() => deletePage(page.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {pages.length === 0 && (
              <tr>
                <td colSpan="4">
                  No Pages Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Pages;