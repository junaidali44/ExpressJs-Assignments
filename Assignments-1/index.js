import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// Task 1
app.get("/", (req, res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to Express Js Api ",
        topic:"This is an Assignment 1"
    })
})
// Sir ye API me About us or contact us ki kya logic hui .?
app.get("/about", (req, res) => {
    res.status(200).json({
        success:true,
        message: "About Us",
        topic:"This is the About Us page"
    });
})
app.get("/contact", (req, res) => {
    res.status(200).json({
        success:true,
        message: "Contact Us",
        topic:"This is the Contact Us page"
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})