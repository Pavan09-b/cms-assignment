import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await api.get("/pages/public");

      setPages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>CMS Website</h1>

      {pages.length === 0 ? (
        <p>No published pages found.</p>
      ) : (
        pages.map((page) => (
          <div
            key={page.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          >
            <h2>{page.title}</h2>

            <p>
              <strong>Slug:</strong> {page.slug}
            </p>

            <p>{page.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;