const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./Router/Router");

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(3001, (err) => {
  if (err) throw err;
  console.log("Server is running on port 3001");
});
