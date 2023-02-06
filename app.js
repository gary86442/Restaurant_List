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

//處理路由
//首頁
app.get("/", (req, res) => {
  res.render("index", { restaurantList });
});

//餐廳詳細頁面
app.get("/restaurants/:id", (req, res) => {
  const id = Number(req.params.id);
  const restaurant = restaurantList.find((restaurant) => restaurant.id === id);
  res.render("show", { restaurant });
});

//搜尋功能
app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  const filteredRestaurant = restaurantList.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.includes(keyword)
  );
  res.render("index", { restaurantList: filteredRestaurant, keyword });
});
// 開啟並監聽伺服器
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
