import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from backend inside a multi container!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
