const express = require('express'); 
const router = express.Router();
const fs = require("fs");


//to generate a list of farms
function readFarmData(){
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    return parsedFarmData;
}

//to generate list of options within a category
function readCategories(){
    const categories = fs.readFileSync("./data/categories.json");
    const parsedCategories = JSON.parse(categories);
}

// GET all farms by type of production/("farmtype")
// router.get('/farmtypes', (req, res)=>{
//     let farmtype = req.query.type;

// })

router.get('/farmtypes', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const farmType = req.query.type;
    const farmsByType = parsedFarmData.filter((farm)=>farm.farmType.includes(farmType))
    res.json(farmsByType)
    
});



/*
 "Fruit/Vegetable",
        "Flower/Herb",             
        "Mushroom",
        "Aquaponic/Fish",
        "Garden/SmallSpace/Rooftop/Urban",
        "Bee/Pollinator/Insect",
        "Animal husbandry"
 */



/***************************************************/
router.get('/regions', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const region = req.query.region;
    const farmsByRegion = parsedFarmData.filter((farm)=>farm.region.includes(region));
    res.json(farmsByRegion)
});

router.get('/communities', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const community = req.query.community;
    const farmsByCommunity = parsedFarmData.includes((farm)=>
    farm.community);
    res.json(farmsByCommunity);

})

module.exports = router;