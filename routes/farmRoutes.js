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

router.get('/farmtypes', (req, res)=>{
    let farmtype = req.query.type;

})

router.get('/region', (req, res)=>{
    let region = req.query.type;
    

})
router.get('/communities', (req, res)=>{
    let communities = req.query.type;

})

router.post('/', (req, res) => {
    res.send("add new farm");
});









module.exports = router;