const express = require('express');
const cors = require("cors");

const app = express();
const farmRoutes = require('./routes/farmRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(cors());

app.use('/farms', farmRoutes)

app.listen(8080, () => {
    console.log(`Listening on PORT 8080`);
  });