const express = require('express');
const cors = require("cors");

const app = express();
const farmRoutes = require('./routes/farmRoutes');
// const categoriesRoutes = require('./data/categories.json');
const categoriesRoutes = require("./routes/categoriesRoutes")
// const userRoutes = require('./routes/userRoutes');


app.use(cors());

app.use('/farms', farmRoutes)
app.use('/categories', categoriesRoutes)



// router.get('/farmtype', categoriesRoutes) 

// app.get('/community', categoriesRoutes)

// app.get('/region', categoriesRoutes)




app.listen(8080, () => {
    console.log(`Listening on PORT 8080`);
  });