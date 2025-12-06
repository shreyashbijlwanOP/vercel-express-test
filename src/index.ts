import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json([{ message: "hello this is from vercel server" }]);
});

app.get("/hello/:name", (req, res) => {
  res.json({ message: `hello ${req.params.name || "user"}` });
});

app.listen(4000, () => {
  console.log("server is liting on port 4000");
});
