import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// Task 3
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to User management Api ",
    topic: "This is an Assignment 3",
  });
});
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "About Us",
  });
});
app.post("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact Us",
    topic: "This is the Contact Us page",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
