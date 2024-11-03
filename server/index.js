// 4 steps procedure to make server

// Express ko bulna hoga is file me
const express = require("express");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");
const cors = require("cors");

// binding this env
dotenv.config();
// Express call 
const app = express();
// port define 
const port = process.env.PORT || 5000;

connectDb()
// Making routes
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});

// How to use routes
// app.use("/api", authRoute);

// importing and using routes dyanmically
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

// Server ko listen karna hoga
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});