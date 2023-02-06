//載入模組及模板引擎
const express = require("express");
const app = express();
//設定連接埠:
const port = 3000;

const exphbs = require("express-handlebars");
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
