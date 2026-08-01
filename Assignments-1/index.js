import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to Express Js Api ",
        topic:"This is an Assignment 1"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})