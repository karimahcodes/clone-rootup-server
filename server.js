const express = require('express');
const cors = require("cors");
const app = express();
const farmRoutes = require('./routes/farmRoutes');
const categoriesRoutes = require("./routes/categoriesRoutes")
// const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(express.static("public"));

app.use('/farms', farmRoutes)
app.use('/categories', categoriesRoutes)




app.listen(8080, () => {
    console.log(`Listening on PORT 8080`);
  });