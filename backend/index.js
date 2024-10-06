const express = require("express");
const bodyparser = require("body-parser");
const methodoverride = require("method-override");
const cors = require("cors");
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(express.json());

var dataBase =
  "mongodb+srv://AkashVerma:panpie-1@cluster0.fjs7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var users;
MongoClient.connect(dataBase).then((success) => {
  var databaseConnection = success.db("panpie-2");
  users = databaseConnection.collection("Users");
});

var images = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/maxican.png",
    Description: "Maxican Pizza",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/soft-drinks.png",
    Description: "Soft Drinks",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/french.png",
    Description: "French Fry",
  },
];
var images2 = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_01-300x300.png",
    Title: "Burger Kingo",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_09-300x300.png",
    Title: "French Fries",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_02-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_07-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_014-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_011-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_010-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_04-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "Rs.25.00",
  },
];
var images3 = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_01-300x300.png",
    Title: "Burger Kingo",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_09-300x300.png",
    Title: "French Fries",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$25.00",
  },
];

var images4 = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_01-300x300.png",
    Title: "Burger Kingo",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$25.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_02-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$20.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_07-300x300.png",
    Title: "BBQ Pizza TinTin",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$29.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_011.png",
    Title: "Burger Kingo",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$27.00",
  },
];

var images5 = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_014-300x300.png",
    Title: "Lemon Juice",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$27.00",
  },
];

var images6 = [
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_04-300x300.png",
    Title: "Chocolate Donuts",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$27.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_010.png",
    Title: "Chicken Sandwich",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$27.00",
  },
  {
    Image:
      "https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_011.png",
    Title: "Burger Kingo",
    Description: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Price: "$27.00",
  },
];

app.post("/Products", (request, response) => {
  response.send(images);
});

app.post("/Products2", (request, response) => {
  response.send(images2);
});

app.post("/Products3", (request, response) => {
  response.send(images3);
});

app.post("/Products4", (request, response) => {
  response.send(images4);
});

app.post("/Products5", (request, response) => {
  response.send(images5);
});

app.post("/Products6", (request, response) => {
  response.send(images6);
});

app.post("/TableData", (request, response) => {
  users.insertOne(request.body).then((users_Insert) => {
    response.send(users_Insert);
  });
});

app.listen(3400, (request, response) => {
  console.log("Server Started at 3400");
});
