//載入模組及模板引擎即種子資料
const express = require("express");
const app = express();
const restaurantList = require("./restaurant.json").results;
//設定連接埠:
const port = 3000;
// 設定模板引擎
const exphbs = require("express-handlebars");
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//設定靜態資料抓取位置
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { restaurantList });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
