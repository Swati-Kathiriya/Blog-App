// const express = require("express");
// const app = express();

// app.listen(4000, () => {
//     console.log("App is running successfully");
// })

// app.get("/", (req,res) => {
//     res.send(`<h1> This is my HOMEPAGE </h1>`);
// }) 

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
  
const blog = require("./routes/blog");
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
})

app.get("/", (req,res) => {
    res.send (`<h1> This is my Own HOMEPAGE </h1>`);
})