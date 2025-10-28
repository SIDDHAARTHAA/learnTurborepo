import express from "express";

const app = express();
const PORT = 3002;

app.get("/health", (req, res)=> {
    res.status(200).json({
        status:"ok",
        messagee:"server is running fine",
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})