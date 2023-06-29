require(`dotenv`).config();
const express = require('express');
const cors = require("cors");
const app = express();
const farmRoutes = require('./routes/farmRoutes');
const categoriesRoutes = require("./routes/categoriesRoutes");



const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));

app.use('/farms', farmRoutes)
app.use('/categories', categoriesRoutes)




app.listen(PORT, () => {
    console.log(`Listening on PORT 8080`);
  });