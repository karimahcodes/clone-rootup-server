const express = require('express'); 
const router = express.Router();
const fs = require("fs");


function readFarmData(){
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedData = JSON.parse(farmData);
    return parsedData;
}


router.get('/', (req, res) => {
    const farms = readFarmData();
    res.json(farms);

});


router.post('/', (req, res) => {
    res.send("add new farm");
});



module.exports = router;