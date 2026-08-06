import express from 'express';



const app = express();
const PORT = process.env.PORT || 5001;


app.get("/hello", (req, res) =>{
    res.send("Hello World");
})


const server = app.listen(PORT, () =>{
    console.log("Server online on port,", PORT);
})