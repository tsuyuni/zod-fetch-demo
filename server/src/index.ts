import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send({
    string: "string",
    number: 1,
    boolean: true,
  });
});

app.listen(8000, () => {
  console.log("Server is running on port http://localhost:8000");
});
