//載入模組及模板引擎
const express = require("express");
const app = express();
//設定連接埠:
const port = 3000;

app.get("/", (req, res) => {
  res.send("restaurant list");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
