const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static index.html
app.use(express.static(path.join(__dirname)));

// Basic route
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
