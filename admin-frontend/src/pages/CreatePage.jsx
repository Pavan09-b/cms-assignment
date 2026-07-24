import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function CreatePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/pages", formData);

      alert("Page Created Successfully");

      navigate("/pages");
    } catch (err) {
      console.log(err);
      alert("Failed to create page");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px", maxWidth: "600px" }}>
        <h2>Create Page</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <input
            type="text"
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <textarea
            name="content"
            placeholder="Content"
            rows="8"
            value={formData.content}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button type="submit">Create Page</button>
        </form>
      </div>
    </>
  );
}

export default CreatePage;