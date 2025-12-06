import express from "express";

const app = express();
app.use(express.static("public"));

app.get("/message", (req, res) => {
  res.send("Hello from a single-container Node app!");
});

app.listen(3000, () => console.log("Running on port 3000"));
