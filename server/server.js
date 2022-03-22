require("dotenv").config();
const express = require('express');

const app = express();

app.get('/getRestaurants', (req, res) => {
    res.json({
        status: "success",
        restaurants: "mcdonalds",
    })
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
