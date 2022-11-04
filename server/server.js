require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM mltpGames ");
    // const restaurantRatingsData = await db.query(
    //   "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
    // );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        series: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  //console.log(req.params.id);

  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({
    status: "success",
    data: {
      restaurant: results.rows[0],
    },
  });
});

// Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3)",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: "mcdonalds",
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update a Restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
