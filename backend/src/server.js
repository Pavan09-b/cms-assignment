const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes);

app.get("/", async (req, res) => {
  try {
    const db = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "Backend Connected Successfully 🚀",
      databaseTime: db.rows[0].now,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});