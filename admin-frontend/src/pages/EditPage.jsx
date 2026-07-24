import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
  });

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      const res = await api.get(`/pages/${id}`);
      setFormData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/pages/${id}`, formData);

      alert("Page Updated Successfully");
      navigate("/pages");
    } catch (err) {
      console.log(err);
      alert("Failed to update page");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px", maxWidth: "600px" }}>
        <h2>Edit Page</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            required
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <textarea
            name="content"
            rows="8"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
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

          <button type="submit">Update Page</button>
        </form>
      </div>
    </>
  );
}

export default EditPage;