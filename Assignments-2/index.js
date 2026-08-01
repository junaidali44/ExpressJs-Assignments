import express from "express";
import "dotenv/config";
import { teachers,students,courses } from "./data/data.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Task 2
app.get("/", (req, res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to Studnt Portal",
        topic:"This is an Assignment 2"
    })
})
app.get("/students", (req, res) => {
    res.status(200).json({
        success:true,
        message: "Student Information",
        data: students
    });
})
app.get("/teachers", (req, res) => {
    res.status(200).json({
        success:true,
        message:"Teachers Information",
        data: teachers
    })
})
app.get("/courses", (req, res) => {
    res.status(200).json({
        success:true,
        message:"Courses Information",
        data: courses
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})