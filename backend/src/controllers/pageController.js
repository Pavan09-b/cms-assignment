const pool = require("../config/db");

// Create Page
const createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;

    const result = await pool.query(
      `INSERT INTO pages(title, slug, content, status)
       VALUES($1,$2,$3,$4)
       RETURNING *`,
      [title, slug, content, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Pages (Admin)
const getPages = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM pages ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Published Pages (Public)
const getPublishedPages = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM pages WHERE status = 'published' ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Single Page
const getPage = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM pages WHERE id=$1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Page
const updatePage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;

    const result = await pool.query(
      `UPDATE pages
       SET title=$1,
           slug=$2,
           content=$3,
           status=$4,
           updated_at=CURRENT_TIMESTAMP
       WHERE id=$5
       RETURNING *`,
      [title, slug, content, status, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Page
const deletePage = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM pages WHERE id=$1",
      [req.params.id]
    );

    res.json({ message: "Page deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createPage,
  getPages,
  getPublishedPages,
  getPage,
  updatePage,
  deletePage,
};